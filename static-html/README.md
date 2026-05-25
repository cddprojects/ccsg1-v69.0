# Matching Remote — Static HTML version

Self-contained HTML export of the Matching Remote landing site lives at the project root. Serve the repository with any static file server so pages use clean URLs:

- `/` — home (`index.html`)
- `/privacy-policy` — privacy policy
- `/terms-of-use` — terms of use
- `/thank-you` — thank you page

Legacy `*.html` filenames redirect to the slug URLs above.

Regenerate from the Next.js source:

```bash
npm run build:static-html
```
