# Matching Remote Landing Page

Premium Next.js landing page for **Matching Remote** — remote-work profile support for Singapore-based applicants.

## Stack

- Next.js (App Router)
- Tailwind CSS v4
- Framer Motion (scroll animations)
- Lucide React icons
- Playfair Display + Inter typography

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Layout approach

Same section structure and copy as the reference page, with layout pattern variation:

- **About / Steps / Get Started / Confidence / Eligibility:** centered or list layouts → **bento grids**
- **Hero:** split layout with glassmorphism profile form card
- **Compensation:** unified glass panel with split content inside
- **Roles:** bento-style grid (featured first card spans two columns)
- Blue / white / gray palette, mesh gradients, `rounded-3xl`, `shadow-xl`
