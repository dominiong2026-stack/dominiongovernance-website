# Dominion Governance request form email setup

The request page now uses a native embedded HTML form. The form posts to the Vercel serverless endpoint at /api/request-review.

## Recipient

All form submissions are intended to be emailed to advisory@dominiongovernance.com.

The API endpoint defaults to that address if MAIL_TO is not set.

## Required Vercel environment variables

Set these in the Vercel project settings for Production, Preview and Development as appropriate:

RESEND_API_KEY=your_resend_api_key
MAIL_FROM=Dominion Governance notifications@dominiongovernance.com
MAIL_TO=advisory@dominiongovernance.com

MAIL_FROM must use a sender address on a domain verified with Resend. The recommended sender is notifications@dominiongovernance.com after the domain is verified.

## Behaviour if email is not configured

If RESEND_API_KEY or MAIL_FROM is missing, the API returns a safe fallback message instructing the visitor to email advisory@dominiongovernance.com directly. This prevents silent loss of enquiries.

## Fields collected

- Full name
- Work email
- Organisation
- Role
- Country or market
- Primary reason for enquiry
- Optional high-level message
- Confirmation that the initial enquiry does not include highly confidential material

## Security and governance notes

- The form includes a honeypot field named website for simple bot filtering.
- The API validates required fields and email format before attempting delivery.
- The visitor email address is used as reply_to, not as the sender.
- The form warns users not to submit highly confidential material, client files, passwords, sensitive datasets or legal documents at intake stage.

## Acceptance test

After environment variables are configured and Vercel redeploys:

1. Open https://www.dominiongovernance.com/request/.
2. Submit a test enquiry using non-confidential sample data.
3. Confirm the page displays the success message.
4. Confirm the email arrives at advisory@dominiongovernance.com.
5. Reply to the email and confirm it replies to the submitter work email.
