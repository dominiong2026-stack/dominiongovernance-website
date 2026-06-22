const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalise(value) {
  return String(value || '').trim();
}

function escapeHtml(value) {
  return normalise(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function parseUrlEncoded(body) {
  const params = new URLSearchParams(body);
  return Object.fromEntries(params.entries());
}

function getBody(req) {
  if (!req.body) return {};
  if (typeof req.body === 'string') {
    const contentType = req.headers['content-type'] || '';
    if (contentType.includes('application/x-www-form-urlencoded')) return parseUrlEncoded(req.body);
    try { return JSON.parse(req.body); } catch (_) { return {}; }
  }
  return req.body;
}

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(payload));
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return sendJson(res, 405, { ok: false, message: 'Method not allowed.' });
  }

  const body = getBody(req);
  if (normalise(body.website)) {
    return sendJson(res, 200, { ok: true, message: 'Thank you. Your request has been received.' });
  }

  const name = normalise(body.name);
  const email = normalise(body.email).toLowerCase();
  const organisation = normalise(body.organisation);
  const role = normalise(body.role);
  const market = normalise(body.market);
  const primaryConcern = normalise(body.primary_concern);
  const message = normalise(body.message);
  const consent = normalise(body.consent);

  const missing = [];
  if (!name) missing.push('name');
  if (!email || !EMAIL_RE.test(email)) missing.push('valid work email');
  if (!organisation) missing.push('organisation');
  if (!role) missing.push('role');
  if (!market) missing.push('market');
  if (!primaryConcern) missing.push('primary concern');
  if (consent !== 'yes') missing.push('consent confirmation');

  if (missing.length) {
    return sendJson(res, 400, { ok: false, message: `Please complete: ${missing.join(', ')}.` });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.MAIL_TO || 'advisory@dominiongovernance.com';
  const from = process.env.MAIL_FROM;

  if (!apiKey || !from) {
    return sendJson(res, 503, {
      ok: false,
      message: 'The request form is not fully configured yet. Please email advisory@dominiongovernance.com directly.'
    });
  }

  const subject = `Dominion Governance request - ${organisation}`;
  const html = `
    <h2>New Dominion Governance discussion request</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Organisation:</strong> ${escapeHtml(organisation)}</p>
    <p><strong>Role:</strong> ${escapeHtml(role)}</p>
    <p><strong>Market:</strong> ${escapeHtml(market)}</p>
    <p><strong>Primary concern:</strong> ${escapeHtml(primaryConcern)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br>') || 'No additional message provided.'}</p>
    <hr>
    <p>This enquiry was submitted through the Dominion Governance website request form.</p>
  `;

  const text = [
    'New Dominion Governance discussion request',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Organisation: ${organisation}`,
    `Role: ${role}`,
    `Market: ${market}`,
    `Primary concern: ${primaryConcern}`,
    '',
    'Message:',
    message || 'No additional message provided.',
    '',
    'This enquiry was submitted through the Dominion Governance website request form.'
  ].join('\n');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject,
        html,
        text
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Resend email error:', errorText);
      return sendJson(res, 502, {
        ok: false,
        message: 'The request could not be emailed. Please email advisory@dominiongovernance.com directly.'
      });
    }

    return sendJson(res, 200, { ok: true, message: 'Thank you. Your request has been sent to Dominion Governance.' });
  } catch (error) {
    console.error('Request form error:', error);
    return sendJson(res, 500, {
      ok: false,
      message: 'The request could not be sent. Please email advisory@dominiongovernance.com directly.'
    });
  }
};
