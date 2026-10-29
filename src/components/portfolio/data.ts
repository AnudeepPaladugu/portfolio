export const LINKS = {
  github: "https://github.com/AnudeepPaladugu",
  linkedin: "https://www.linkedin.com/in/anudeeppaladugu/",
  blog: "https://mindsnotebook.com/",
  email: "anudeeppaladugu99@gmail.com",
};
export const RESUME_URL = "/Anudeep-Paladugu-Resume.pdf";
export const BOOK_AMAZON_URLS = {
  "No Record of Her": "https://www.amazon.in/dp/B0FH5BR82W",
  "Her Name in Every Silence": "https://www.amazon.in/Her-Name-Every-Silence-coming/dp/B0FM47LWTP/ref=tmm_pap_swatch_0",
} as const;
export const CREATORSPARK = {
  title: "CreatorSpark AI",
  status: "Work in Progress",
  description: "A tool for drafting social captions, hooks and scripts in English and Telugu.",
} as const;
export const TESTPILOT = {
  title: "TestPilot",
  status: "Work in Progress",
  description: "A workspace for test cases, test runs, and defect tracking.",
} as const;

export const NAV = [
  { id: "skills", label: "Skills" },
  { id: "engineer", label: "QA projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
export const SKILLS = [
  { group: "Automation", items: ["Selenium", "Java", "TestNG", "Cucumber", "POM", "Maven", "Testim"] },
  { group: "API & Data", items: ["Postman", "REST APIs", "SQL"] },
  { group: "AI QA", items: ["Context retention", "Hallucination checks", "Prompt injection testing"] },
  { group: "Workflow", items: ["Jira", "Zephyr", "Jenkins", "Allure", "Agile/Scrum"] },
] as const;
export const ROLES = [
  { title: "QA Engineer", company: "Softalk Technologies", period: "Apr 2024 – Present", project: "Dental AI CRM · Healthcare & Dental", points: [
    "Maintain Selenium/Java UI automation with TestNG, Cucumber, POM and Maven; extend regression coverage with Testim.",
    "Evaluate chatbot context, relevance and reference accuracy; check hallucinations and basic prompt injection.",
    "Test CRM workflows, REST APIs in Postman and data with SQL; track defects and validate releases.",
  ] },
  { title: "QA Analyst", company: "Softalk Technologies", period: "Feb 2021 – Mar 2024", project: "Insurance & Banking", points: [
    "Test onboarding, policies, claims, payments, accounts and transactions end to end.",
    "Run functional, regression and exploratory checks; validate REST services and SQL transaction records.",
    "Document defects in Jira, maintain Zephyr cases and support Agile sprint release validation.",
  ] },
] as const;
export const HIDDEN_REPOS = ["eversage", "anudeeppaladugu"];
export const FEATURED_PROJECTS = [
  { name: "qa-automation-framework", title: "QA Automation Framework", category: "UI regression automation", language: "Java", description: "SauceDemo UI regression using Selenium, Java and Page Object Model, with TestNG execution, Allure reports and manual test documentation.", stack: "Selenium / Java / TestNG / POM / Maven / Allure", url: `${LINKS.github}/qa-automation-framework` },
  { name: "qa-engineering-portfolio", title: "QA Engineering Portfolio", category: "End-to-end QA case study", language: "Java", description: "Automation Exercise testing: manual and exploratory tests, defect reports, UI automation, Postman/Newman API checks and release evidence.", stack: "Java / Selenium / Postman / Newman / Allure", url: `${LINKS.github}/qa-engineering-portfolio` },
  { name: "Test-pilot-QA", title: "Test Pilot QA", category: "QA workflow app · Work in progress", language: "TypeScript", description: "A React/TypeScript app for projects, cases, suites, runs, linked defects and reports. Includes CSV export and a local demo.", stack: "React / TypeScript / Vite", url: `${LINKS.github}/Test-pilot-QA` },
] as const;
export const MORE_PROJECTS = [
  { name: "Banana_Freshness_Check", title: "Banana Freshness Check", category: "Image classification experiment", description: "MobileNet verifies a banana, then TensorFlow.js/Teachable Machine classifies freshness from an upload or camera.", stack: "MobileNet / TensorFlow.js / Teachable Machine", url: `${LINKS.github}/Banana_Freshness_Check` },
  { name: "Beginner-Html-webpage", title: "Anudeep’s Coffee House", category: "HTML learning project", description: "An HTML-only coffee house website, made as an early web learning project.", stack: "HTML only", url: `${LINKS.github}/Beginner-Html-webpage` },
  { name: "Doraemon-using-Python", title: "Doraemon in Python", category: "Creative coding", description: "Drawing Doraemon with Python Turtle.", stack: "Python / Turtle", url: `${LINKS.github}/Doraemon-using-Python` },
  { name: "Shinchan-using-python", title: "Shinchan in Python", category: "Creative coding", description: "Drawing Shinchan with Python Turtle.", stack: "Python / Turtle", url: `${LINKS.github}/Shinchan-using-python` },
] as const;
