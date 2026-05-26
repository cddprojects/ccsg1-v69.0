#!/usr/bin/env node
/**
 * Generates static HTML site in /static-html from shared content modules.
 * Run: node --experimental-strip-types scripts/generate-static-html.mjs
 */
import { cpSync, mkdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { privacyPolicyIntro, privacyPolicyMeta, privacyPolicySections } from "../src/lib/privacy-policy-content.ts";
import {
  aboutCards,
  compensationBullets,
  confidenceItems,
  consentText,
  eligibilityItems,
  getStartedCards,
  heroBullets,
  heroStats,
  jobPositions,
  profileReadiness,
  roleCards,
  siteImages,
  stepsCards,
} from "../src/lib/content.ts";
import { termsOfUseIntro, termsOfUseMeta, termsOfUseSections } from "../src/lib/terms-of-use-content.ts";
import { brandName, brandPageTitleSuffix } from "../src/lib/brand.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "static-html");

const icon = {
  check: `<svg class="h-5 w-5 shrink-0 text-brand-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>`,
  checkSm: `<svg class="h-4 w-4 shrink-0 text-brand-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>`,
  chevron: `<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>`,
  send: `<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`,
  clipboard: `<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>`,
  arrow: `<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  map: `<svg class="h-3.5 w-3.5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clock: `<svg class="h-3.5 w-3.5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  wallet: `<svg class="h-3.5 w-3.5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>`,
  menu: `<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/></svg>`,
};

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function pageShell(title, description, body, homeLink = "index.html") {
  return `<!DOCTYPE html>
<html lang="en" data-theme="purple">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}" />
  <link rel="icon" href="logo.png" type="image/png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet" />
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
            serif: ['Libre Baskerville', 'Georgia', 'serif'],
          },
          colors: {
            brand: {
              50: '#f5f3ff', 100: '#ede9fe', 200: '#ddd6fe', 300: '#c4b5fd',
              400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9',
              800: '#5b21b6', 900: '#4c1d95',
            },
          },
        },
      },
    };
  </script>
  <link rel="stylesheet" href="assets/css/site.css" />
</head>
<body class="min-h-screen bg-white text-slate-800 antialiased">
${header(homeLink)}
${body}
${footer(homeLink)}
  <script src="assets/js/site.js"></script>
</body>
</html>`;
}

function header(homeLink) {
  const indexPrefix = homeLink === "index.html" ? "" : "index.html";
  return `<header class="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur-md">
  <div class="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6 lg:px-8">
    <a href="${indexPrefix}" class="flex min-w-0 items-center gap-2">
      <img src="logo.png" alt="${brandName} logo" class="h-8 w-8 shrink-0 rounded-lg object-contain sm:h-9 sm:w-9 sm:rounded-xl" width="36" height="36" />
      <span class="truncate font-serif text-lg font-semibold text-slate-900 sm:text-xl">Matching Remote</span>
    </a>
    <nav class="hidden items-center gap-6 lg:flex">
      <a href="${indexPrefix}#about" class="text-sm text-slate-600 hover:text-brand-700">About</a>
      <a href="${indexPrefix}#steps" class="text-sm text-slate-600 hover:text-brand-700">How it works</a>
      <a href="${indexPrefix}#roles" class="text-sm text-slate-600 hover:text-brand-700">Roles</a>
      <a href="${indexPrefix}#eligibility" class="text-sm text-slate-600 hover:text-brand-700">Eligibility</a>
      <a href="${indexPrefix}#hero-form" class="btn-primary px-5 py-2.5 text-sm">Get updates</a>
    </nav>
    <button id="menu-btn" type="button" class="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden" aria-expanded="false" aria-label="Toggle menu">${icon.menu}</button>
  </div>
  <nav id="mobile-nav" class="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
    <ul class="flex flex-col gap-1">
      <li><a href="${indexPrefix}#about" class="block rounded-lg px-3 py-3 text-base text-slate-700">About</a></li>
      <li><a href="${indexPrefix}#steps" class="block rounded-lg px-3 py-3 text-base text-slate-700">How it works</a></li>
      <li><a href="${indexPrefix}#roles" class="block rounded-lg px-3 py-3 text-base text-slate-700">Roles</a></li>
      <li><a href="${indexPrefix}#eligibility" class="block rounded-lg px-3 py-3 text-base text-slate-700">Eligibility</a></li>
    </ul>
    <a href="${indexPrefix}#hero-form" class="btn-primary mt-3 block w-full text-center">Get updates</a>
  </nav>
</header>`;
}

function footer(homeLink) {
  const indexPrefix = homeLink === "index.html" ? "" : "index.html";
  return `<footer class="border-t border-slate-800 bg-slate-950 text-slate-300">
  <div class="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
    <div class="flex flex-col gap-10">
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <img src="logo.png" alt="${brandName} logo" class="h-9 w-9 shrink-0 rounded-xl object-contain" width="36" height="36" />
          <span class="font-serif text-xl font-semibold text-white">Matching Remote</span>
        </div>
        <p class="max-w-md text-sm leading-relaxed text-slate-400">Profile support for Singapore-based applicants exploring remote-friendly categories shared by third-party hiring companies.</p>
        <div class="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-xs leading-relaxed text-slate-400">
          <p class="font-semibold text-slate-200">Disclaimer</p>
          <p class="mt-2">Matching Remote provides profile support and general process information. It does not employ applicants directly. Role availability, compensation, verification, and hiring outcomes are determined by third-party hiring companies.</p>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-8 border-t border-slate-800 pt-8 sm:grid-cols-3 sm:gap-6">
        <div>
          <p class="text-sm font-semibold text-white">Quick links</p>
          <ul class="mt-3 space-y-2 text-sm">
            <li><a href="${indexPrefix}#about" class="inline-block py-1 hover:text-white">About</a></li>
            <li><a href="${indexPrefix}#steps" class="inline-block py-1 hover:text-white">How it works</a></li>
            <li><a href="${indexPrefix}#roles" class="inline-block py-1 hover:text-white">Roles</a></li>
            <li><a href="${indexPrefix}#eligibility" class="inline-block py-1 hover:text-white">Eligibility</a></li>
          </ul>
        </div>
        <div>
          <p class="text-sm font-semibold text-white">Legal</p>
          <ul class="mt-3 space-y-2 text-sm">
            <li><a href="privacy-policy.html" class="inline-block py-1 hover:text-white">Privacy Policy</a></li>
            <li><a href="terms-of-use.html" class="inline-block py-1 hover:text-white">Terms of Use</a></li>
          </ul>
        </div>
        <div>
          <p class="text-sm font-semibold text-white">Support</p>
          <p class="mt-3 text-sm text-brand-200">support@matchingremote.com</p>
          <p class="mt-3 text-sm leading-relaxed text-slate-400"><span class="block font-medium text-slate-300">Business Correspondence Address</span>Ang Mo Kio Avenue 3, 569933, Ang Mo Kio</p>
        </div>
      </div>
    </div>
    <div class="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
      <p>&copy; ${new Date().getFullYear()} Matching Remote. All rights reserved.</p>
      <a href="${indexPrefix}" class="inline-block py-2 hover:text-slate-300">Back to top</a>
    </div>
  </div>
</footer>`;
}

function buildIndex() {
  const heroText =
    "Matching Remote helps applicants submit a profile for consideration when remote-friendly role categories are shared by third-party hiring companies. The platform focuses on remote-friendly support categories such as customer service, administration, data entry, marketing content, operations coordination, AI data review, and social media community support. Availability, responsibilities, pay, and selection criteria are confirmed by each hiring company.";

  const bullets = heroBullets
    .map(
      (b) =>
        `<li class="flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white/90 px-3 py-2.5 text-sm text-slate-700">${icon.checkSm}<span>${esc(b)}</span></li>`,
    )
    .join("");

  const stats = heroStats
    .map(
      (s) =>
        `<div><dt class="font-serif text-xl font-semibold text-brand-700 sm:text-2xl">${esc(s.value)}</dt><dd class="mt-0.5 text-xs leading-snug text-slate-600 sm:text-sm">${esc(s.label)}</dd></div>`,
    )
    .join("");

  const readiness = profileReadiness
    .map((r) => `<li class="flex items-center gap-2 text-sm text-slate-600">${icon.checkSm}${esc(r)}</li>`)
    .join("");

  const jobs = jobPositions.map((j) => `<option>${esc(j)}</option>`).join("");

  const aboutHtml = aboutCards
    .map(
      (c) => `<article class="flex flex-col gap-3 p-5 sm:flex-row sm:items-start sm:gap-5 sm:p-8">
      <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 font-serif text-base font-semibold text-white">${esc(c.id)}</div>
      <div class="min-w-0 flex-1"><h3 class="font-serif text-lg font-semibold text-slate-900 sm:text-xl">${esc(c.title)}</h3><p class="mt-1.5 text-sm leading-relaxed text-slate-600 sm:text-base">${esc(c.description)}</p></div>
    </article>`,
    )
    .join("");

  const stepIcons = [icon.send, icon.clipboard, icon.arrow];
  const stepsHtml = stepsCards
    .map((card, i) => {
      const arrowMobile =
        i < stepsCards.length - 1
          ? `<div class="mx-auto my-2 flex h-9 w-9 items-center justify-center rounded-full border border-brand-200/80 bg-white text-brand-600 shadow-sm lg:hidden" aria-hidden="true"><span class="rotate-90 inline-flex">${icon.arrow}</span></div>`
          : "";
      const arrowDesk =
        i < stepsCards.length - 1
          ? `<div class="pointer-events-none absolute -right-3 top-[42%] z-10 hidden -translate-y-1/2 lg:flex" aria-hidden="true"><div class="flex h-8 w-8 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-600 shadow-sm">${icon.arrow}</div></div>`
          : "";
      return `<div class="relative flex flex-col lg:min-h-[280px]">${arrowDesk}
      <article class="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm ring-1 ring-slate-900/[0.04]">
        <div class="h-1.5 w-full shrink-0 bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400"></div>
        <div class="flex flex-1 flex-col p-5 sm:p-6">
          <div class="flex items-center justify-between gap-3"><span class="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">Step ${esc(card.step)}</span><span class="font-serif text-2xl font-semibold leading-none text-brand-600/20 sm:text-3xl" aria-hidden="true">${esc(card.step)}</span></div>
          <div class="mt-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-md shadow-brand-600/20">${stepIcons[i]}</div>
          <h3 class="mt-4 font-serif text-xl font-semibold leading-snug text-slate-900">${esc(card.title)}</h3>
          <p class="mt-2 flex-1 text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]">${esc(card.description)}</p>
        </div>
      </article>${arrowMobile}</div>`;
    })
    .join("");

  const confidenceHtml = confidenceItems
    .map(
      (item) =>
        `<article class="flex gap-4 border-b border-slate-200/80 py-5 sm:py-6"><div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">${icon.check}</div><div class="min-w-0 flex-1"><h3 class="font-serif text-lg font-semibold text-slate-900">${esc(item.title)}</h3><p class="mt-1.5 text-sm leading-relaxed text-slate-600 sm:text-base">${esc(item.description)}</p></div></article>`,
    )
    .join("");

  const compBullets = compensationBullets
    .map(
      (b) =>
        `<li class="flex gap-3 text-sm leading-relaxed text-slate-600 sm:text-base"><span class="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600"></span><span>${esc(b)}</span></li>`,
    )
    .join("");

  const getStartedHtml = getStartedCards
    .map(
      (c) =>
        `<article class="flex gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 sm:gap-5 sm:p-6"><span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-600 font-serif text-base font-semibold text-white">${esc(c.step)}</span><div class="min-w-0 flex-1"><h3 class="font-serif text-lg font-semibold text-slate-900">${esc(c.title)}</h3><p class="mt-1.5 text-sm leading-relaxed text-slate-600">${esc(c.description)}</p></div></article>`,
    )
    .join("");

  const rolesHtml = roleCards
    .map((role) => {
      const tags = role.tags.map((t) => `<span class="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">${esc(t)}</span>`).join("");
      const img = role.image.replace(/^\//, "");
      return `<article class="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm sm:rounded-3xl">
        <div class="flex flex-col sm:flex-row">
          <div class="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-slate-100 sm:aspect-auto sm:h-full sm:min-h-[220px] sm:w-72">
            <img src="${img}" alt="${esc(role.title)}" class="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          </div>
          <div class="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
            <div class="flex flex-wrap gap-2">${tags}</div>
            <h3 class="mt-3 font-serif text-lg font-semibold leading-snug text-slate-900 sm:text-xl">${esc(role.title)}</h3>
            <ul class="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
              <li class="inline-flex items-center gap-1">${icon.map}${esc(role.place)}</li>
              <li class="inline-flex items-center gap-1">${icon.clock}${esc(role.hours)}</li>
              <li class="inline-flex items-center gap-1">${icon.wallet}${esc(role.pay)}</li>
            </ul>
            <p class="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-600 sm:line-clamp-none sm:text-base">${esc(role.description)}</p>
            <div class="mt-3 rounded-xl bg-slate-50 px-4 py-3"><p class="text-xs font-semibold uppercase tracking-wide text-slate-500">Best fit for</p><p class="mt-1 line-clamp-2 text-sm text-slate-600 sm:line-clamp-none">${esc(role.bestFit)}</p></div>
            <a href="#hero-form" class="btn-primary mt-4 w-full text-center sm:mt-5">Register Interest</a>
          </div>
        </div>
      </article>`;
    })
    .join("");

  const eligibilityHtml = eligibilityItems
    .map(
      (item, index) => `
      <div class="${index > 0 ? "border-t border-slate-200/80" : ""}">
        <button type="button" data-accordion-trigger="${index}" class="flex w-full min-h-[3.25rem] items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-50/80 sm:min-h-14 sm:px-8 sm:py-5" aria-expanded="${index === 0 ? "true" : "false"}" aria-controls="eligibility-panel-${index}">
          <span class="pr-2 font-serif text-lg font-semibold text-slate-900">${esc(item.title)}</span>
          <span class="accordion-chevron flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200/80 bg-white text-brand-700 ${index === 0 ? "rotate-180 border-brand-200 bg-brand-50" : ""}">${icon.chevron}</span>
        </button>
        <div data-accordion-panel="${index}" id="eligibility-panel-${index}" class="accordion-panel ${index === 0 ? "is-open" : ""}" role="region">
          <div><p class="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-8 sm:pb-6 sm:text-base">${esc(item.description)}</p></div>
        </div>
      </div>`,
    )
    .join("");

  const body = `<main>
  <section class="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
    <div class="mesh-gradient pointer-events-none absolute inset-0" aria-hidden="true"></div>
    <div class="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-8 lg:gap-y-10">
        <div class="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
          <div class="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-2xl shadow-lg sm:rounded-3xl lg:aspect-auto lg:h-full lg:min-h-full lg:w-[40%] lg:max-w-md lg:self-stretch">
            <img src="images/hero.png" alt="Person working remotely on a laptop at home" class="absolute inset-0 h-full w-full object-cover object-[58%_42%]" width="800" height="600" />
          </div>
          <div class="flex min-w-0 flex-1 flex-col">
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">MATCHING REMOTE - SINGAPORE</p>
            <h1 class="mt-4 font-serif text-[1.875rem] font-semibold text-slate-900 sm:text-4xl lg:text-[2.75rem]">Flexible remote-work profile support for Singapore-based applicants</h1>
            <div class="mt-5">
              <p id="read-more-text" class="read-more-clamped text-base leading-relaxed text-slate-600 sm:text-lg">${esc(heroText)}</p>
              <button id="read-more-btn" type="button" class="read-more-toggle mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-700 sm:hidden" aria-expanded="false">
                <span class="read-more-label">Read full overview</span>
                <span class="read-more-icon inline-flex transition-transform">${icon.chevron}</span>
              </button>
            </div>
            <ul class="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">${bullets}</ul>
            <div class="mt-6 flex w-full flex-col gap-3 sm:flex-row">
              <a href="#hero-form" class="btn-primary w-full text-center sm:w-auto">Start your profile</a>
              <a href="#steps" class="btn-outline w-full text-center sm:w-auto">See the process</a>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <div class="hidden shrink-0 lg:block lg:w-[40%] lg:max-w-md" aria-hidden="true"></div>
          <dl class="min-w-0 flex-1 grid grid-cols-3 gap-3 border-t border-slate-200/80 pt-6 lg:mt-0 lg:pt-8">${stats}</dl>
        </div>
      </div>
      <div id="hero-form" class="mt-12 lg:mt-14">
        <div data-cddform="cc-sg10-singapore10" data-origin="www.matching-remote.com"></div>
        <script src="https://staging.chatfromforms.com/form-embed.js?v=0.1" defer></script>
      </div>
    </div>
  </section>

  <section id="about" class="bg-white py-16 sm:py-20 lg:py-28">
    <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
        <div class="lg:w-[45%] lg:shrink-0">
          <header class="max-w-3xl text-left"><h2 class="font-serif text-[1.75rem] font-semibold text-slate-900 sm:text-3xl lg:text-4xl">Built for a simpler applicant journey</h2>
          <p class="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">Matching Remote keeps the enquiry experience organized, practical, and transparent so applicants know what may happen before a hiring company begins its own review.</p></header>
          <div class="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-md sm:rounded-3xl">
            <img src="images/about.png" alt="Team collaborating in a modern office" class="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
        <div class="flex-1 divide-y divide-slate-200/80 overflow-hidden rounded-2xl border border-slate-200/80 bg-white sm:rounded-3xl">${aboutHtml}</div>
      </div>
    </div>
  </section>

  <section id="steps" class="bg-slate-50 py-16 sm:py-20 lg:py-28">
    <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <header class="max-w-3xl"><h2 class="font-serif text-[1.75rem] font-semibold text-slate-900 sm:text-3xl lg:text-4xl">How the profile path works</h2>
      <p class="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">Matching Remote explains the general path. Company-specific screening, role details, and hiring decisions remain with the third-party hiring company.</p></header>
      <div class="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-900/5 sm:mt-10 sm:rounded-3xl lg:aspect-[21/9]">
        <img src="images/steps.png" alt="Singapore applicants reviewing remote work opportunities on laptops" class="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      </div>
      <div class="mt-10 flex flex-col gap-2 sm:mt-12 lg:grid lg:grid-cols-3 lg:gap-6">${stepsHtml}</div>
    </div>
  </section>

  <section class="bg-white py-16 sm:py-20 lg:py-28">
    <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-5 lg:gap-12">
        <header class="lg:col-span-2 max-w-3xl lg:max-w-none"><h2 class="font-serif text-[1.75rem] font-semibold text-slate-900 sm:text-3xl lg:text-4xl">Know what to check before moving forward</h2>
        <p class="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">Remote roles can differ in schedule, tools, verification, and pay terms. Matching Remote keeps the guidance practical so you can review each opportunity carefully.</p></header>
        <div class="mt-8 flex flex-col lg:col-span-3 lg:mt-0">${confidenceHtml}</div>
      </div>
    </div>
  </section>

  <section class="bg-slate-50 py-16 sm:py-20 lg:py-28">
    <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
        <header class="lg:w-[42%] lg:shrink-0"><h2 class="font-serif text-[1.75rem] font-semibold text-slate-900 sm:text-4xl">How compensation is usually confirmed</h2>
        <p class="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">Compensation structure is not universal. Depending on the company and work scope, it may be hourly, task-based, shift-based, or project-based.</p></header>
        <aside class="w-full rounded-2xl border border-slate-200/80 border-l-4 border-l-brand-600 bg-white p-5 sm:p-8 lg:flex-1">
          <h3 class="font-serif text-xl font-semibold text-slate-900">When pay details are provided</h3>
          <ul class="mt-5 space-y-4">${compBullets}</ul>
        </aside>
      </div>
    </div>
  </section>

  <section class="bg-white py-16 sm:py-20 lg:py-28">
    <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="relative mb-8 aspect-[16/7] w-full overflow-hidden rounded-2xl shadow-md sm:mb-10 sm:rounded-3xl">
        <img src="images/get-started.png" alt="Clean home workspace with laptop ready for remote work" class="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      </div>
      <header class="max-w-3xl"><h2 class="font-serif text-[1.75rem] font-semibold text-slate-900 sm:text-3xl lg:text-4xl">Before you submit your profile</h2>
      <p class="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">These are practical basics that often matter for remote-friendly work. Individual opportunities may still include additional company requirements.</p></header>
      <div class="mt-8 space-y-3 sm:mt-10">${getStartedHtml}</div>
    </div>
  </section>

  <section id="roles" class="bg-slate-50 py-16 sm:py-20 lg:py-28">
    <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <header class="max-w-3xl lg:max-w-none"><h2 id="roles-heading" class="font-serif text-[1.75rem] font-semibold text-slate-900 sm:text-3xl lg:text-4xl">Remote-friendly categories <span class="whitespace-nowrap">at a glance</span></h2>
      <p class="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">These examples help applicants understand the kinds of online work that may appear through third-party hiring companies. They are not a promise that every category is currently open.</p></header>
      <div class="mt-8 flex flex-col gap-4 rounded-2xl border border-brand-200/50 bg-brand-600 px-5 py-6 text-white sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p class="text-sm leading-relaxed text-brand-50 sm:text-base">Keep your profile ready. Submit your interest once so your details are easier to reference when a relevant category appears.</p>
        <a href="#hero-form" class="btn-outline mt-4 shrink-0 border-white/40 bg-white text-brand-700 sm:mt-0">Submit profile interest</a>
      </div>
      <div class="mt-8 flex flex-col gap-6 sm:mt-10">${rolesHtml}</div>
    </div>
  </section>

  <section id="eligibility" class="bg-white py-16 sm:py-20 lg:py-28">
    <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <header class="max-w-3xl"><h2 class="font-serif text-[1.75rem] font-semibold text-slate-900 sm:text-3xl lg:text-4xl">Who can take part</h2>
      <p class="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">Before applying, review these general points. Individual roles may have additional criteria set by hiring companies.</p></header>
      <div class="mt-10 overflow-hidden rounded-2xl border border-slate-200/80 bg-white sm:mt-12 sm:rounded-3xl">${eligibilityHtml}</div>
    </div>
  </section>

  <section class="bg-white py-16 sm:py-20 lg:py-28">
    <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-6 rounded-2xl border border-brand-200/40 bg-brand-50/50 px-5 py-8 sm:rounded-3xl sm:px-10 sm:py-10 lg:flex-row lg:items-center lg:justify-between">
        <div class="max-w-2xl"><h2 class="font-serif text-[1.75rem] font-semibold text-slate-900 sm:text-3xl">Questions before you apply?</h2>
        <p class="mt-4 text-base leading-relaxed text-slate-600">For general questions about how Matching Remote works, contact support for platform-related questions. Hiring decisions remain with third-party companies.</p></div>
        <p class="shrink-0 text-sm font-medium text-slate-800 lg:text-right">support@matchingremote.com</p>
      </div>
    </div>
  </section>
</main>`;

  return pageShell(
    brandPageTitleSuffix,
    "Flexible remote-work profile support for Singapore-based applicants exploring remote-friendly categories through third-party hiring companies.",
    body,
    "index.html",
  );
}

function renderPrivacyBlocks(blocks) {
  return blocks
    .map((block) => {
      if (block.type === "paragraph") {
        const text = block.text;
        if (block.email) {
          const parts = text.split(block.email);
          return `<p class="text-base leading-relaxed text-slate-600">${esc(parts[0])}<span class="font-medium text-slate-800">${esc(block.email)}</span>${esc(parts[1] || "")}</p>`;
        }
        return `<p class="text-base leading-relaxed text-slate-600">${esc(text)}</p>`;
      }
      if (block.type === "list") {
        return `<ul class="list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-600">${block.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
      }
      if (block.type === "contact") {
        return `<div class="rounded-xl border border-slate-200/80 bg-slate-50/80 p-4 text-sm text-slate-600">${block.lines
          .map((line) => {
            const val = esc(line.value);
            return `<p class="mt-2 first:mt-0"><span class="font-medium text-slate-800">${esc(line.label)}: </span>${val}</p>`;
          })
          .join("")}</div>`;
      }
      return "";
    })
    .join("");
}

function buildPrivacy() {
  const toc = privacyPolicySections
    .map(
      (s) =>
        `<li><a href="#${s.id}" class="block rounded-lg py-1.5 pl-2 text-slate-600 transition-colors hover:bg-brand-50 hover:text-brand-800">${esc(s.title)}</a></li>`,
    )
    .join("");
  const sections = privacyPolicySections
    .map(
      (s) =>
        `<section id="${s.id}" class="scroll-mt-28 py-8 sm:py-10 border-b border-slate-200/80 last:border-0">
      <h2 class="font-serif text-xl font-semibold text-slate-900 sm:text-2xl">${esc(s.title)}</h2>
      <div class="mt-4 space-y-4">${renderPrivacyBlocks(s.blocks)}</div>
    </section>`,
    )
    .join("");

  const body = `<main class="bg-white pt-24 pb-16 sm:pt-28 sm:pb-20">
  <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
    <div class="lg:grid lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-14">
      <aside class="mb-10 lg:sticky lg:top-28 lg:mb-0 lg:self-start">
        <nav class="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm" aria-label="Table of contents">
          <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">On this page</p>
          <ol class="mt-4 space-y-2 text-sm">${toc}</ol>
        </nav>
      </aside>
      <article class="min-w-0">
        <header class="border-b border-slate-200/80 pb-8">
          <h1 class="font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">${esc(privacyPolicyMeta.title)}</h1>
          <p class="mt-3 text-sm text-slate-500">Last updated: ${esc(privacyPolicyMeta.lastUpdated)} · ${esc(privacyPolicyMeta.brand)}</p>
          <p class="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">${esc(privacyPolicyIntro)}</p>
        </header>
        <div>${sections}</div>
        <div class="border-t border-slate-200/80 pt-8"><a href="index.html" class="btn-primary">Back to Homepage</a></div>
      </article>
    </div>
  </div>
</main>`;

  return pageShell(`${privacyPolicyMeta.title} | Matching Remote`, "How Matching Remote collects, uses, and protects personal data for Singapore-based applicants under the PDPA.", body, "privacy-policy.html");
}

function buildTerms() {
  const toc = termsOfUseSections
    .map(
      (s) =>
        `<li><a href="#${s.id}" class="block rounded-lg py-1.5 pl-2 text-slate-600 hover:bg-brand-50 hover:text-brand-800">${esc(s.title)}</a></li>`,
    )
    .join("");
  const sections = termsOfUseSections
    .map((s) => {
      let p = `<p class="text-base leading-relaxed text-slate-600">${esc(s.text)}</p>`;
      if (s.email) {
        const parts = s.text.split(s.email);
        p = `<p class="text-base leading-relaxed text-slate-600">${esc(parts[0])}<span class="font-medium text-slate-800">${esc(s.email)}</span>${esc(parts[1] || "")}</p>`;
      }
      return `<section id="${s.id}" class="scroll-mt-28 py-8 sm:py-10 border-b border-slate-200/80 last:border-0"><h2 class="font-serif text-xl font-semibold text-slate-900 sm:text-2xl">${esc(s.title)}</h2><div class="mt-4">${p}</div></section>`;
    })
    .join("");

  const body = `<main class="bg-white pt-24 pb-16 sm:pt-28 sm:pb-20">
  <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
    <div class="lg:grid lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-14">
      <aside class="mb-10 lg:sticky lg:top-28 lg:mb-0 lg:self-start">
        <nav class="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm" aria-label="Table of contents">
          <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">On this page</p>
          <ol class="mt-4 space-y-2 text-sm">${toc}</ol>
        </nav>
      </aside>
      <article>
        <header class="border-b border-slate-200/80 pb-8">
          <h1 class="font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">${esc(termsOfUseMeta.title)}</h1>
          <p class="mt-3 text-sm text-slate-500">Last updated: ${esc(termsOfUseMeta.lastUpdated)}</p>
          <p class="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">${esc(termsOfUseIntro)}</p>
        </header>
        <div>${sections}</div>
        <div class="border-t border-slate-200/80 pt-8"><a href="index.html" class="btn-primary">Back to Homepage</a></div>
      </article>
    </div>
  </div>
</main>`;

  return pageShell(`${termsOfUseMeta.title} | Matching Remote`, "Terms governing use of the Matching Remote website and profile-submission information pages.", body, "terms-of-use.html");
}

function buildThankYou() {
  const steps = [
    "Your details are received for profile review.",
    "Your information may be compared with current or upcoming remote-friendly categories.",
    "If a hiring company considers your profile relevant, it may contact you about next steps.",
  ]
    .map(
      (s) =>
        `<li class="flex gap-3 text-sm leading-relaxed text-slate-600 sm:text-base">${icon.check}<span>${esc(s)}</span></li>`,
    )
    .join("");

  const body = `<main class="bg-white pt-24 pb-16 sm:pt-28 sm:pb-20">
  <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-700">${icon.check}</div>
      <p class="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">MATCHING REMOTE - SINGAPORE</p>
      <h1 class="mt-4 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">Thank you for your interest</h1>
      <p class="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">Your profile submission has been received. Matching Remote will use your information for category review and may share relevant details with third-party hiring companies when appropriate. Hiring decisions remain with those companies.</p>
      <div class="mt-10 rounded-2xl border border-slate-200/80 bg-white p-6 text-left shadow-sm sm:p-8">
        <h2 class="font-serif text-lg font-semibold text-slate-900 sm:text-xl">What may happen next</h2>
        <ul class="mt-4 space-y-3">${steps}</ul>
      </div>
      <p class="mt-8 text-sm leading-relaxed text-slate-600">Questions about your submission? <span class="font-medium text-slate-800">support@matchingremote.com</span></p>
      <div class="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <a href="index.html" class="btn-primary w-full sm:w-auto">Back to Homepage</a>
        <a href="index.html#steps" class="btn-outline w-full sm:w-auto">See the process</a>
      </div>
    </div>
  </div>
</main>`;

  return pageShell("Thank You | Matching Remote", "Your Matching Remote profile interest has been received.", body, "thank-you.html");
}

mkdirSync(join(outDir, "assets/css"), { recursive: true });
mkdirSync(join(outDir, "assets/js"), { recursive: true });
mkdirSync(join(outDir, "images/roles"), { recursive: true });

writeFileSync(join(outDir, "index.html"), buildIndex());
writeFileSync(join(outDir, "privacy-policy.html"), buildPrivacy());
writeFileSync(join(outDir, "terms-of-use.html"), buildTerms());
writeFileSync(join(outDir, "thank-you.html"), buildThankYou());

cpSync(join(root, "public/images"), join(outDir, "images"), { recursive: true });
cpSync(join(root, "public/logo.png"), join(outDir, "logo.png"));

console.log("Static HTML generated in static-html/");
