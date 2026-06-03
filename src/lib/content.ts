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
  "Remote-focused categories",
  "Flexible schedule awareness",
  "Third-party hiring process",
  "Profile-based review",
] as const;

export const heroStats = [
  { value: "3", label: "basic steps to understand" },
  { value: "1", label: "profile submission pathway" },
  { value: "Anytime", label: "send an enquiry when convenient" },
] as const;

export const profileReadiness = [
  "Applicant profile",
  "Category matching",
  "Next-step contact",
] as const;

export const jobPositions = [
  "Remote Customer Support Associate",
  "Remote Admin & Data Entry Assistant",
  "Remote Marketing & Content Support Assistant",
  "Remote Operations & Coordination Assistant",
  "AI Data Support Assistant",
  "Remote Social Media & Community Support Assistant",
] as const;

export const aboutCards = [
  {
    id: "A",
    title: "One organized profile",
    description:
      "Put your contact details, work preferences, and relevant background into one concise profile.",
  },
  {
    id: "B",
    title: "Plain-language process notes",
    description:
      "See how profile review, company contact, screening, and role confirmation usually fit together.",
  },
  {
    id: "C",
    title: "Remote-friendly categories",
    description:
      "Explore common online work areas, including customer support, admin, content, operations, AI data support, and community coordination.",
  },
] as const;

export const stepsCards = [
  {
    step: "1",
    title: "Send your interest",
    description:
      "Share your contact details, availability, preferred categories, and a short skills summary.",
  },
  {
    step: "2",
    title: "Category review",
    description:
      "Your information may be compared with current or upcoming categories shared with the platform.",
  },
  {
    step: "3",
    title: "Company-led next steps",
    description:
      "If a company considers your profile relevant, it may contact you about screening, interviews, role scope, and work arrangements.",
  },
] as const;

export const confidenceItems = [
  {
    title: "General role guidance",
    description:
      "Review common tasks and expectations before sharing more information with a hiring company.",
  },
  {
    title: "Process transparency",
    description:
      "Understand that role details, pay, verification, and scheduling are confirmed by the hiring company.",
  },
  {
    title: "Applicant awareness",
    description:
      "Exercise discretion, review role details, and avoid sharing sensitive information until necessary.",
  },
  {
    title: "General enquiries",
    description:
      "Contact support for platform-related questions. Hiring decisions remain with third-party companies.",
  },
] as const;

export const compensationBullets = [
  "Actual pay may depend on role scope, hours, skills, experience, company requirements, and location rules.",
  "Any examples or ranges shown in communications should be treated as general information only.",
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
    title: "Working-age and work eligibility",
    description:
      "Meet minimum age requirements and have appropriate eligibility to work where required.",
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
      "Provide accurate contact and background details. Standard verification may be required by a hiring company.",
  },
] as const;

export const roleCards = [
  {
    title: "Remote Customer Support Associate",
    tags: ["Part-time", "Contract"],
    place: "Remote",
    hours: "Flexible shifts",
    pay: "SGD 27–31/hr",
    description:
      "Support customers through email, chat, or calls while following company guidelines and service standards.",
    bestFit:
      "Applicants comfortable with clear communication, patience, and structured online support workflows.",
    image: "/images/roles/role-customer-support.png",
  },
  {
    title: "Remote Admin & Data Entry Assistant",
    tags: ["Part-time", "Contract"],
    place: "Remote",
    hours: "Flexible hours",
    pay: "SGD 25–29/hr",
    description:
      "Organize records, update spreadsheets, and complete accurate data entry tasks for hiring companies.",
    bestFit:
      "Detail-oriented applicants who work carefully with documents, forms, and everyday office tools.",
    image: "/images/roles/role-admin-data.png",
  },
  {
    title: "Remote Marketing & Content Support Assistant",
    tags: ["Part-time", "Contract"],
    place: "Remote",
    hours: "Project-based",
    pay: "SGD 29–33/hr",
    description:
      "Assist with content drafts, scheduling support, and marketing coordination under company direction.",
    bestFit:
      "Applicants with writing interest, basic design awareness, and comfort using online collaboration tools.",
    image: "/images/roles/role-marketing-content.png",
  },
  {
    title: "Remote Operations & Coordination Assistant",
    tags: ["Part-time", "Contract"],
    place: "Remote",
    hours: "Flexible hours",
    pay: "SGD 28–32/hr",
    description:
      "Help coordinate tasks, follow up on requests, and keep remote workflows organized across teams.",
    bestFit:
      "Organized applicants who can track priorities, communicate clearly, and support process consistency.",
    image: "/images/roles/role-operations.png",
  },
  {
    title: "AI Data Support Assistant",
    tags: ["Part-time", "Contract"],
    place: "Remote",
    hours: "Task-based",
    pay: "SGD 27–32/hr",
    description:
      "Review, label, or quality-check data tasks according to project instructions from hiring companies.",
    bestFit:
      "Applicants who follow guidelines closely, stay focused, and complete repetitive review tasks accurately.",
    image: "/images/roles/role-ai-data.png",
  },
  {
    title: "Remote Social Media & Community Support Assistant",
    tags: ["Part-time", "Contract"],
    place: "Remote",
    hours: "Flexible shifts",
    pay: "SGD 28–33/hr",
    description:
      "Monitor community channels, respond to enquiries, and support engagement within company policies.",
    bestFit:
      "Applicants comfortable with online communities, tone awareness, and timely written responses.",
    image: "/images/roles/role-social-community.png",
  },
] as const;

export const footerQuickLinks = navLinks;

export const consentText =
  "I agree to be contacted regarding my profile interest and understand that hiring decisions are made by third-party companies.";
