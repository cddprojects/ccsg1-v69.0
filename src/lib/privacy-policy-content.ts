export const privacyPolicyMeta = {
  title: "Privacy Policy",
  lastUpdated: "6 May 2026",
  brand: "Unitel Match",
} as const;

export const privacyPolicyIntro =
  'This Privacy Policy describes how Unitel Match ("we", "us", "our") collects, uses, discloses, and protects personal data when you use our website, application forms, applicant enquiry services, and related application support services at www.unitelmatch.com, where applicable (the "Services"). It is intended to align with the Personal Data Protection Act 2012 of Singapore ("PDPA"). This Policy does not constitute legal advice.';

export const privacyPolicySections = [
  {
    id: "who-we-are",
    title: "1. Who we are",
    blocks: [
      {
        type: "paragraph" as const,
        text: "Unitel Match provides an online application pathway for Singapore-based applicants exploring current remote-friendly role categories shared by third-party hiring companies.",
      },
      {
        type: "paragraph" as const,
        text: "The platform focuses on remote-friendly role categories such as remote admin support, customer support, online merchant support, e-commerce store operations, online sales support, and AI content support. We may provide general process information and application support, but company-specific screening, role details, compensation, verification, work arrangements, onboarding, and hiring decisions remain with the relevant third-party hiring company.",
      },
      {
        type: "paragraph" as const,
        text: "Unitel Match is generally not your employer and does not guarantee interviews, job offers, placement, earnings, or role availability unless expressly stated in writing.",
      },
      {
        type: "contact" as const,
        lines: [
          { label: "Contact", value: "support@unitelmatch.com" },
          {
            label: "Business correspondence",
            value: "Haw Par Centre, 180 Clemenceau Avenue, #05-01, Singapore 239922",
          },
        ],
      },
    ],
  },
  {
    id: "personal-data",
    title: "2. Personal data we may collect",
    blocks: [
      {
        type: "paragraph" as const,
        text: "Depending on how you use the Services, we may collect:",
      },
      {
        type: "list" as const,
        items: [
          "Identity and contact details — such as your name, email address, phone number, and other contact information.",
          "Application information — such as availability, preferred role category, work preferences, skills summary, background information, experience, remote-work readiness, work eligibility, and information you choose to submit.",
          "Role review information — such as notes or indicators relating to your potential suitability for remote-friendly role categories including remote admin support, customer support, online merchant support, e-commerce store operations, online sales support, and AI content support.",
          "Technical and usage data — such as IP address, browser type, device information, pages viewed, approximate location derived from IP address, cookies, pixels, or similar technologies where applicable.",
          "Communications — such as the content of emails, messages, enquiries, or support requests you send to us.",
        ],
      },
      {
        type: "paragraph" as const,
        text: "We aim to collect only what is reasonably necessary for the purposes described in this Policy.",
      },
    ],
  },
  {
    id: "purposes",
    title: "3. Purposes of collection, use, and disclosure",
    blocks: [
      {
        type: "paragraph" as const,
        text: "We may collect, use, and disclose your personal data for purposes including:",
      },
      {
        type: "list" as const,
        items: [
          "Operating the Services and processing your application or enquiry;",
          "Reviewing your submitted information for relevance to current remote-friendly role categories;",
          "Supporting application readiness, role-category review, and applicant communication;",
          "Considering or presenting your application in connection with opportunities shared by third-party hiring companies, where you have been informed and consented as required;",
          "Communicating with you about the platform, your application, relevant role categories, next-step actions, or support enquiries;",
          "Maintaining internal application, enquiry, screening, and matching records;",
          "Improving platform security, preventing misuse, and complying with legal or regulatory obligations;",
          "Analytics and service improvement, often using aggregated or de-identified information where appropriate.",
        ],
      },
    ],
  },
  {
    id: "third-party",
    title: "4. Third-party hiring companies",
    blocks: [
      {
        type: "paragraph" as const,
        text: "Unitel Match may share relevant application or applicant information with third-party hiring companies where your application appears relevant to a current remote-friendly role category or opportunity.",
      },
      {
        type: "paragraph" as const,
        text: "Those companies may contact you directly about screening, interviews, role scope, work arrangements, verification, contract terms, compensation, onboarding, or other next steps. Their use of your personal data is governed by their own privacy notices, agreements, and applicable legal obligations.",
      },
      {
        type: "paragraph" as const,
        text: "We do not control how third-party hiring companies process personal data once it has been legitimately shared for recruitment or role consideration purposes. We also do not control their hiring decisions, compensation terms, schedules, verification requirements, onboarding process, or final role availability.",
      },
    ],
  },
  {
    id: "other-disclosures",
    title: "5. Other disclosures",
    blocks: [
      {
        type: "paragraph" as const,
        text: "We may disclose personal data to service providers who assist us in operating the Services, such as hosting providers, form tools, email delivery services, analytics providers, cloud storage providers, security tools, or other operational vendors.",
      },
      {
        type: "paragraph" as const,
        text: "Where required, we take reasonable steps to ensure such service providers are subject to appropriate confidentiality, security, or contractual safeguards.",
      },
      {
        type: "paragraph" as const,
        text: "We may also disclose information if required by law, regulation, court order, government request, or where necessary to protect our rights, users, Services, or the public.",
      },
    ],
  },
  {
    id: "cookies",
    title: "6. Cookies and similar technologies",
    blocks: [
      {
        type: "paragraph" as const,
        text: "We may use cookies, pixels, analytics tools, or similar technologies to operate the website, remember preferences, measure traffic, improve performance, and understand how users interact with the Services.",
      },
      {
        type: "paragraph" as const,
        text: "You may control cookies through your browser settings. Disabling some cookies may affect certain website features or functionality.",
      },
    ],
  },
  {
    id: "retention",
    title: "7. Retention",
    blocks: [
      {
        type: "paragraph" as const,
        text: "We retain personal data only for as long as reasonably necessary for the purposes for which it was collected, including application review, role-category matching, applicant communication, legal, accounting, reporting, dispute-resolution, or business record purposes.",
      },
      {
        type: "paragraph" as const,
        text: "When personal data is no longer needed, we take reasonable steps to delete, anonymise, or securely archive it in accordance with applicable law and internal retention practices.",
      },
    ],
  },
  {
    id: "security",
    title: "8. Security",
    blocks: [
      {
        type: "paragraph" as const,
        text: "We implement reasonable administrative, technical, and organisational measures designed to protect personal data against unauthorised access, collection, use, disclosure, copying, modification, loss, or similar risks.",
      },
      {
        type: "paragraph" as const,
        text: "No internet transmission or electronic storage method is completely secure. We cannot guarantee absolute security of information submitted through the Services.",
      },
    ],
  },
  {
    id: "overseas",
    title: "9. Overseas transfers",
    blocks: [
      {
        type: "paragraph" as const,
        text: "Where personal data is transferred outside Singapore, we will take steps consistent with the PDPA to ensure a comparable standard of protection, such as contractual safeguards, service provider commitments, or your consent where appropriate.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "10. Your rights under Singapore law",
    blocks: [
      {
        type: "paragraph" as const,
        text: "Subject to the PDPA and applicable exceptions, you may have the right to access or correct personal data held by us, withdraw consent where processing is consent-based, and request further information about how we handle your personal data.",
      },
      {
        type: "paragraph" as const,
        text: "To exercise these rights or raise a concern, contact us at support@unitelmatch.com. We may need to verify your identity before responding.",
        email: "support@unitelmatch.com",
      },
    ],
  },
  {
    id: "withdrawal",
    title: "11. Withdrawal of consent",
    blocks: [
      {
        type: "paragraph" as const,
        text: "Where we rely on consent, you may withdraw it by contacting us.",
      },
      {
        type: "paragraph" as const,
        text: "Withdrawal of consent may affect our ability to provide certain Services, such as reviewing your application, matching it with relevant role categories, presenting it to third-party hiring companies, or contacting you about next-step opportunities.",
      },
    ],
  },
  {
    id: "eligibility",
    title: "12. Eligibility and children",
    blocks: [
      {
        type: "paragraph" as const,
        text: "The Services are intended for individuals who meet applicable working-age and work-eligibility requirements. Individual roles may have additional criteria set by third-party hiring companies.",
      },
      {
        type: "paragraph" as const,
        text: "The Services are not directed at individuals below the applicable minimum working age. Do not submit personal data if you do not meet the relevant eligibility requirements described on our site or in a specific opportunity notice.",
      },
    ],
  },
  {
    id: "changes",
    title: "13. Changes to this Policy",
    blocks: [
      {
        type: "paragraph" as const,
        text: 'We may update this Privacy Policy from time to time. The "Last updated" date will change accordingly.',
      },
      {
        type: "paragraph" as const,
        text: "Where required by law, material changes may require additional notice or consent. Continued use of the Services after changes are posted constitutes acceptance of the updated Policy where permitted by law.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "14. Governing law",
    blocks: [
      {
        type: "paragraph" as const,
        text: "This Policy is governed by the laws of Singapore.",
      },
    ],
  },
] as const;
