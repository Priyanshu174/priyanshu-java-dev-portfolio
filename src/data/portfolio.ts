
 // Central content file for profile, social links, resume, experience and skills.
 // Projects live in ./projects.ts. Leave a value as "" to hide its link.

export const profile = {
  name: "Priyanshu Sharma",

  headline:
    "Software Engineer building backend services and full-stack applications",

  intro:
    "Software Engineer with 2+ years of experience developing enterprise applications, REST APIs, and system integrations using Java, Spring Boot, Angular, and TypeScript.",

  about: [
    "I'm a Software Engineer with experience developing enterprise Project and Portfolio Management (PPM) applications at Planview / Sciforma. My work spans frontend development, backend functionality, and integrations that connect application workflows and external systems.",

    "On the backend, I work with Java and Spring Boot to develop REST APIs and application functionality. On the frontend, I build and maintain interfaces using Angular and TypeScript, with additional experience building full-stack applications using React.",

    "I've also worked on a SnapLogic scheduled-job integration and a custom Power BI connector. Outside enterprise development, I build full-stack projects to explore application architecture, authentication, database design, API integration, and real-time communication.",
  ],
};

export const resume = {
  url: "https://drive.google.com/file/d/1067Tzg3_Tb76bVxp24YO2oyhbcN32gUl/view?usp=sharing",
  downloadUrl: "https://drive.google.com/uc?export=download&id=1067Tzg3_Tb76bVxp24YO2oyhbcN32gUl",
  fileName: "Priyanshu_Sharma_Resume.pdf",
  description:
    "Professional experience, technical skills, and selected software engineering projects.",
};

export const socialLinks = {
  email: "priyanshu174sharma@gmail.com",
  phone: "+91 9817941044",
  github: "https://github.com/Priyanshu174",
  linkedin: "https://www.linkedin.com/in/priyanshu-sharma-890b39219/",
  extra: [
    {
      label: "X",
      url: "https://x.com/Priyans37636282",
    },
  ] as { label: string; url: string }[],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "Planview",
    role: "Software Development Engineer I",
    period: "Jul 2025 - Sep 2026",
    location: "Bengaluru",
    summary:
      "Building enterprise integrations and backend workflows that support scheduling, resource allocation, and analytics-driven business operations.",
    points: [
      "Designed and built a new External Schedule Job type in Java and Spring Boot within the Designer application that triggers external SnapLogic functionality via API, supporting both on-demand and recurring (hourly/weekly/monthly) execution; implemented field validation, API response handling, failure logic, and execution history updates with Triggered/Failure status and error messaging, cutting manual scheduling effort by 40-50% per feedback from the SnapLogic integration team.",
      "Built a custom Power BI connector using the Power Query SDK (Power Query M) that authenticated against the application's API and exposed its hierarchical data (year/month/week/date/file) through a Power Query Navigation Table, letting business users browse and load CSV/Excel datasets into Power BI without manually constructing API requests.",
      "Designed and implemented REST APIs from scratch for a Resource Allocation feature in Java and Spring Boot, following a layered MVC architecture with clear separation between DTOs and JPA/Hibernate-mapped entities; validated required fields (Project ID, Organization ID, Skills) and implemented the underlying business logic.",
      "Resolved 25+ production issues through root-cause analysis using OpenSearch and JProfiler, maintaining code quality via CI/CD, JUnit testing, and 50+ peer code reviews across 20+ Agile sprints.",
    ],
  },
  {
    company: "Sciforma",
    role: "Software Development Trainee",
    period: "Sep 2024 - Jun 2025",
    location: "Bengaluru",
    summary:
      "Delivered enterprise frontend features and integration enhancements for a scalable, maintainable application platform.",
    points: [
      "Enhanced 15+ enterprise integration features on the Vantage Integration Platform using Angular, TypeScript, and REST APIs to deliver scalable, maintainable UI components.",
      "Delivered 10+ new UI features and resolved 35+ frontend defects using Angular and Git/GitHub for version control.",
      "Wrote Jasmine and Karma test cases achieving 95-100% test coverage across all delivered features.",
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Backend Development",
    items: [
      "Java",
      "Spring Boot",
      "REST APIs",
    ],
  },
  {
    group: "Frontend Development",
    items: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "React",
      "HTML5",
      "CSS3",
    ],
  },
  {
    group: "Databases",
    items: [
      "SQL",
      "MongoDB",
    ],
  },
  {
    group: "Tools & Integrations",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "SnapLogic",
      "Power BI",
      "Postman",
    ],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    name: "JavaScript for Web Development",
    issuer: "Board Infinity",
    date: "July 12, 2023",
    credentialUrl: "/certifications/javascript-for-web-development-board-infinity.pdf",
  },
  {
    name: "Advanced Styling with Responsive Design",
    issuer: "University of Michigan · Coursera",
    date: "November 16, 2023",
    credentialUrl: "/certifications/advanced-styling-responsive-design-coursera.pdf",
  },
  {
    name: "The Complete 2024 Web Development Bootcamp",
    issuer: "Udemy · Dr. Angela Yu",
    date: "March 6, 2024",
    credentialUrl: "/certifications/complete-web-development-bootcamp.pdf",
  },
  {
    name: "Generative AI for Web Developers: AI-Powered Pair Programming for Full-Stack Development",
    issuer: "LinkedIn Learning",
    date: "April 6, 2026",
    credentialUrl: "/certifications/generative-ai-for-web-developers.pdf",
  },
];
