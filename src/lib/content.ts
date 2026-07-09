/** Local imagery — Singapore-focused, Asian professionals (see /public/images) */
export const siteImages = {
  hero: "/images/hero.png",
  about: "/images/about.png",
  steps: "/images/steps.png",
  getStarted: "/images/get-started.png",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "How it works", href: "#steps" },
  { label: "Roles", href: "#roles" },
  { label: "Eligibility", href: "#eligibility" },
] as const;

export const heroBullets = [
  "Remote-friendly role categories",
  "Flexible schedule options",
  "Hiring-partner review process",
  "Simple application pathway",
] as const;

export const heroStats = [
  { value: "6", label: "current role categories" },
  { value: "1", label: "simple application pathway" },
  { value: "Anytime", label: "submit your application online" },
] as const;

export const formSectionDescription =
  "Submit your application for current remote-friendly role categories. Your details may be reviewed against suitable opportunities shared by hiring partners.";

export const jobPositions = [
  "Remote Admin Assistant",
  "Remote Customer Support Assistant",
  "Online Merchant Support Assistant",
  "E-Commerce Support Assistant",
  "Online Sales Support Assistant",
  "AI Content Support Assistant",
] as const;

export const aboutCards = [
  {
    id: "A",
    title: "One organized application",
    description:
      "Submit your contact details, availability, work preferences, and relevant background through one clear application form.",
  },
  {
    id: "B",
    title: "Clear process notes",
    description:
      "Understand how application review, company contact, screening, and role confirmation usually work.",
  },
  {
    id: "C",
    title: "Remote-friendly roles",
    description:
      "Explore current online work categories including admin support, customer support, merchant support, e-commerce support, online sales support, and AI content support.",
  },
] as const;

export const stepsCards = [
  {
    step: "1",
    title: "Submit your application",
    description:
      "Share your contact details, availability, preferred role category, and a short skills summary.",
  },
  {
    step: "2",
    title: "Application review",
    description:
      "Your application may be reviewed against currently available role categories shared by hiring partners.",
  },
  {
    step: "3",
    title: "Company-led next steps",
    description:
      "If a hiring company considers your application relevant, it may contact you about screening, interviews, role scope, work arrangements, and onboarding requirements.",
  },
] as const;

export const confidenceItems = [
  {
    title: "Role guidance",
    description:
      "Review common tasks and expectations before moving forward with a hiring company.",
  },
  {
    title: "Process transparency",
    description:
      "Role details, pay, verification, onboarding, and scheduling are confirmed by the hiring company.",
  },
  {
    title: "Applicant awareness",
    description:
      "Exercise discretion, review role details carefully, and avoid sharing sensitive information until it is necessary for a legitimate hiring step.",
  },
  {
    title: "General enquiries",
    description:
      "Contact Browse Flex for platform-related questions. Hiring decisions remain with the relevant hiring company.",
  },
] as const;

export const compensationBullets = [
  "Actual pay may depend on role scope, hours, skills, experience, company requirements, and applicable location rules.",
  "Pay ranges shown on this website are indicative for the listed role categories and may be confirmed or adjusted by the hiring company during the review process.",
  "Final outcomes such as interviews, job offers, placement, or earnings depend on the hiring company and role requirements.",
] as const;

export const getStartedCards = [
  {
    step: "1",
    title: "Reliable setup",
    description:
      "A laptop or desktop, steady internet connection, and comfort using common online tools.",
  },
  {
    step: "2",
    title: "Everyday work skills",
    description:
      "Clear communication, attention to detail, basic computer skills, and ability to follow instructions.",
  },
  {
    step: "3",
    title: "Focused work environment",
    description:
      "A consistent space for focused work. Some roles may require calls, video, or a headset.",
  },
] as const;

export const eligibilityItems = [
  {
    title: "Working age and work eligibility",
    description:
      "Meet the applicable working-age and work-eligibility requirements for Singapore-based remote-friendly roles. Hiring companies may request verification where required.",
  },
  {
    title: "Communication readiness",
    description:
      "Be comfortable using email, chat, calls, or common online tools in the language required for the role.",
  },
  {
    title: "Remote setup",
    description:
      "Have access to a suitable device, reliable internet, and an environment where you can complete tasks consistently.",
  },
  {
    title: "Accurate information",
    description:
      "Provide accurate contact and background details. Standard verification may be required by a hiring company before role confirmation.",
  },
] as const;

export const roleCards = [
  {
    title: "Remote Admin Assistant",
    profileFit: "Good fit",
    tags: ["Basic computer", "Attention to detail", "Online admin"],
    place: "Flexible arrangement",
    hours: "Part-time",
    pay: "Indicative S$16–S$22/hr",
    description:
      "Help with simple admin tasks such as updating records, organizing documents, checking details, and supporting daily online workflows.",
    supportingNote:
      "Good fit for applicants who are detail-oriented and comfortable using basic computer tools.",
    image: "/images/roles/role-admin-data.png",
  },
  {
    title: "Remote Customer Support Assistant",
    profileFit: "Good fit",
    tags: ["Customer replies", "Communication", "Online tools"],
    place: "Flexible arrangement",
    hours: "Part-time",
    pay: "Indicative S$16–S$22/hr",
    description:
      "Support customer enquiries through chat, email, or calls while following company guidelines and response templates.",
    supportingNote:
      "Good fit for applicants who are patient, clear in communication, and comfortable helping customers online.",
    image: "/images/roles/role-customer-support.png",
  },
  {
    title: "Online Merchant Support Assistant",
    profileFit: "Good fit",
    tags: ["Product updates", "Order checks", "Platform admin"],
    place: "Flexible arrangement",
    hours: "Part-time",
    pay: "Indicative S$16–S$22/hr",
    description:
      "Support online merchants with product updates, order checks, simple account tasks, and platform-related follow-ups.",
    supportingNote:
      "Good fit for applicants who are comfortable using online platforms and following clear step-by-step instructions.",
    image: "/images/roles/role-operations.png",
  },
  {
    title: "E-Commerce Support Assistant",
    profileFit: "Good fit",
    tags: ["Online store", "Order checks", "Product updates"],
    place: "Flexible arrangement",
    hours: "Part-time",
    pay: "Indicative S$16–S$22/hr",
    description:
      "Assist with online store support tasks such as updating product details, checking order information, organizing simple records, and following up on platform-related requests.",
    supportingNote:
      "Good fit for applicants who are comfortable using online tools, checking details carefully, and supporting e-commerce workflows.",
    image: "/images/roles/role-marketing-content.png",
  },
  {
    title: "Online Sales Support Assistant",
    profileFit: "Moderate fit",
    tags: ["Customer replies", "Lead follow-up", "Online tools"],
    place: "Flexible arrangement",
    hours: "Part-time",
    pay: "Indicative S$16–S$22/hr",
    description:
      "Support online sales teams with simple enquiry replies, lead follow-ups, appointment updates, and basic customer information checks.",
    supportingNote:
      "Good fit for applicants who are comfortable communicating online and following a structured response process.",
    image: "/images/roles/role-social-community.png",
  },
  {
    title: "AI Content Support Assistant",
    profileFit: "Good fit",
    tags: ["AI tools", "Content checks", "Attention to detail"],
    place: "Flexible arrangement",
    hours: "Part-time",
    pay: "Indicative S$16–S$22/hr",
    description:
      "Assist with simple AI-supported content tasks such as checking generated text, organizing information, reviewing drafts, and following project guidelines.",
    supportingNote:
      "Good fit for applicants who are comfortable using online tools, reading carefully, and following clear instructions.",
    image: "/images/roles/role-ai-data.png",
  },
] as const;

export const footerQuickLinks = navLinks;

export const consentText =
  "By submitting this form, you agree that Browse Flex may collect, use, and disclose your submitted details for application review, communication, and role consideration with relevant hiring partners, in accordance with our Privacy Policy.";
