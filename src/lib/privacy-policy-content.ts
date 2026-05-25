export const privacyPolicyMeta = {
  title: "Privacy Policy",
  lastUpdated: "6 May 2026",
  brand: "Matching Remote",
} as const;

export const privacyPolicyIntro =
  'This Privacy Policy describes how Matching Remote ("we", "us", "our") collects, uses, discloses, and protects personal data when you use our website, profile-submission forms, applicant enquiry services, and related profile support services at www.matchingremote.com, where applicable (the "Services"). It is intended to align with the Personal Data Protection Act 2012 of Singapore ("PDPA"). This Policy does not constitute legal advice.';

export const privacyPolicySections = [
  {
    id: "who-we-are",
    title: "1. Who we are",
    blocks: [
      {
        type: "paragraph" as const,
        text: "Matching Remote helps Singapore-based applicants submit or prepare a concise profile for consideration when remote-friendly role categories are shared by third-party hiring companies.",
      },
      {
        type: "paragraph" as const,
        text: "The platform focuses on remote-friendly support categories such as customer service, administration, data entry, marketing content, operations coordination, AI data review, and social media or community support. We may provide general process information and profile support, but company-specific screening, role details, compensation, verification, work arrangements, and hiring decisions remain with the relevant third-party hiring company.",
      },
      {
        type: "paragraph" as const,
        text: "Matching Remote is generally not your employer and does not guarantee interviews, job offers, placement, earnings, or role availability.",
      },
      {
        type: "contact" as const,
        lines: [
          { label: "Contact", value: "support@matchingremote.com" },
          {
            label: "Business correspondence",
            value: "Ang Mo Kio Avenue 3, 569933, Ang Mo Kio, Singapore",
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
          "Applicant profile information — such as availability, preferred role categories, work preferences, skills summary, background information, experience, remote-work readiness, work eligibility, and information you choose to submit.",
          "Category matching information — such as notes or indicators relating to your potential suitability for remote-friendly categories including customer support, administrative support, data entry, content or marketing support, operations coordination, AI data support, and social media or community support.",
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
          "Operating the Services and processing your profile submission or enquiry;",
          "Reviewing your submitted information for relevance to current or upcoming remote-friendly role categories;",
          "Supporting profile readiness, category matching, and applicant communication;",
          "Considering or presenting your profile in connection with opportunities shared by third-party hiring companies, where you have been informed and consented as required;",
          "Communicating with you about the platform, your submission, relevant categories, next-step actions, or support enquiries;",
          "Maintaining internal profile, enquiry, screening, and matching records;",
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
        text: "Matching Remote may share relevant profile or applicant information with third-party hiring companies where your profile appears relevant to a remote-friendly role category or opportunity.",
      },
      {
        type: "paragraph" as const,
        text: "Those companies may contact you directly about screening, interviews, role scope, work arrangements, verification, contract terms, compensation, or other next steps. Their use of your personal data is governed by their own privacy notices, agreements, and applicable legal obligations.",
      },
      {
        type: "paragraph" as const,
        text: "We do not control how third-party hiring companies process personal data once it has been legitimately shared for recruitment or role consideration purposes. We also do not control their hiring decisions, compensation terms, schedules, verification requirements, or role availability.",
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
        text: "We retain personal data only for as long as reasonably necessary for the purposes for which it was collected, including profile review, category matching, applicant communication, legal, accounting, reporting, dispute-resolution, or business record purposes.",
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
        text: "To exercise these rights or raise a concern, contact us at support@matchingremote.com. We may need to verify your identity before responding.",
        email: "support@matchingremote.com",
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
        text: "Withdrawal of consent may affect our ability to provide certain Services, such as reviewing your profile, matching it with relevant categories, presenting it to third-party hiring companies, or contacting you about next-step opportunities.",
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
