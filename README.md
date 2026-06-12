# Dominion Governance Website

Premium static website for Dominion Governance.

## Included

- `index.html` — live homepage with premium executive branding, Request Briefing form, and Herman the Chat Bot.
- `robots.txt` — search engine instructions.
- `sitemap.xml` — sitemap for `https://dominiongovernance.com/`.
- `netlify.toml` — Netlify static hosting configuration.
- `vercel.json` — Vercel static hosting configuration.

## GitHub Pages setup

To publish through GitHub Pages:

1. Open the repository on GitHub.
2. Go to **Settings**.
3. Go to **Pages**.
4. Under **Build and deployment**, select:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/** root
5. Save.
6. GitHub will provide a Pages URL after deployment.

## Custom domain

If using `dominiongovernance.com`, add it in GitHub Pages Custom Domain settings, then point DNS records to GitHub Pages according to GitHub's instructions.

## Alternative deployment

This site can also be deployed on:

- Netlify
- Vercel
- Cloudflare Pages
- cPanel / traditional hosting

## Form note

The Request Briefing form currently opens a prepared email to:

`advisory@dominiongovernance.com`

For production-grade lead capture, connect the form to a secure backend, CRM, or form service.

## Herman the Chat Bot

Herman is currently a front-end rule-based chatbot. A future production version should connect to an approved Dominion knowledge base and backend.
