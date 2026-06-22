# Dominion Governance launch acceptance status

Date: 2026-06-22

## Deployment

Latest launch hardening commit checked: ce2b3822f02d8ad459be355b9b51e9bc6bd7e8c2

Vercel status: success

## Repository acceptance passed

### Native request form

The request page uses an embedded native HTML form at the request route.

The form collects full name, work email, organisation, role, country or market, primary reason for enquiry, optional high-level message, and confirmation that the enquiry does not include highly confidential material.

The form posts to the request review API endpoint.

### Email API endpoint

The Vercel serverless endpoint validates the submission and sends email through Resend.

Recipient behaviour:

- The configured recipient variable is used if set.
- If the recipient variable is not set, the endpoint defaults to advisory@dominiongovernance.com.
- The visitor email is used as reply_to, not as the sender.

Required Vercel configuration:

- Resend API key
- Mail sender address
- Mail recipient address, recommended as advisory@dominiongovernance.com

Failure behaviour:

- If the email service is not configured, the API returns a safe message asking the visitor to email advisory@dominiongovernance.com directly.
- If the email service returns an error, the API returns a safe fallback message.

### Discovery files

The following launch discovery files exist:

- robots.txt
- sitemap.xml
- sitemap-services.xml
- sitemap-markets.xml
- sitemap-audiences.xml
- sitemap-trust-resources.xml
- llms.txt
- .well-known/security.txt

robots.txt references all sitemap files and discovery contacts.

The trust and resources sitemap includes the framework pages, trust pages, resource pages, the AI discovery file, and the security contact file.

## Manual acceptance still required

The following tests require browser and email access and cannot be completed from repository inspection alone:

1. Open the request page in a browser.
2. Confirm the native embedded form appears and no Formbyte link appears.
3. Submit a non-confidential test enquiry after Vercel email configuration is completed.
4. Confirm the page displays a success message.
5. Confirm the email arrives at advisory@dominiongovernance.com.
6. Confirm replying to the received email replies to the submitter email address.
7. Confirm the public framework, trust, robots, sitemap, AI discovery, and security contact routes resolve.

## Current launch position

The website is repository-ready and Vercel-deployed for the implemented launch-hardening work.

The only known blocker to full enquiry capture is external configuration of the Resend email sender and Vercel environment variables.
