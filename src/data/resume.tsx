import { NAVBAR, CONTACT } from "./navigation";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FolderIcon, Settings, Wrench, PenTool, Globe, Share2, AppWindow, School, Bot, ClipboardList } from "lucide-react";
import { faReact, faNodeJs, faGitAlt, faTypescript, faTailwindCss, faDocker, faFigma, faGithub, faPython, faJs, faPhp, faJava, faLaravel, faVuejs, faAngular, faBootstrap, faWordpress, faShopify, faJira, faTrello, faCss3Alt, faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faLeaf, faPlug, faBolt, faTerminal, faRocket, faServer, faDatabase, faCode, faChartBar, faPalette, faRobot, faPuzzlePiece, faCube, faMicrochip, faGraduationCap, faClipboardList } from "@fortawesome/free-solid-svg-icons";

/**
 * Central data source for the portfolio template.
 * Every piece of content displayed across the site is driven by this object.
 *
 * Template by Mynd Labs — https://myndlabs.tech
 *
 * To customize this template for your own portfolio:
 * 1. Replace the personal information below with your own
 * 2. Update projects, work experience, and education arrays
 * 3. Swap social links with your own profiles
 * 4. Replace the author image at /assets/ray-joshua.jpg
 */
export const DATA = {
  name: "Ray Joshua",
  initials: "RJ",
  url: "https://rayjoshuaa-portfolio.pages.dev",
  location: "Bangkok, Thailand",
  locationLink: "https://www.google.com/maps/place/Bangkok",
  description:
    "ICT & Robotics Teacher and Virtual Assistant — I help schools and businesses win clients online: WordPress & CMS websites, social media management, and custom web development, built with care and code.",
  summary:
    "I'm an **ICT, Computer Science & Robotics teacher** at SIAMIS in Bangkok, originally from Davao City, Philippines — with **6+ years in IT** and **3+ years in academe**, from online ESL tutoring to teaching BSIT college students.\n\nI started from scratch: first as a **freelance frontend developer** building JavaScript and React components and page sections, then as a **website administrator and CMS developer** (WordPress / Elementor), and later in a Project Management Office as a **Business Systems Analyst** — designing end-to-end process flows and BRDs, and leading QA, UAT and go-live for 10+ enterprise systems. Along the way I picked up digital marketing at OSOlink — SEO, SEM and social media management.\n\nToday I teach Kindergarten, Primary and Secondary students — **Scratch and Python** for younger learners, **LEGO and Arduino Uno robotics kits**, and programming in C++, C#, Java, Python and PHP at higher levels — while building software as a side hustle, including a **school management system for our entire school**.\n\nI offer remote **virtual-assistant services**: CMS web development, social media management, web & app development, and EdTech solutions. I'm **open to collaborations on any project related to education**. I speak English, Tagalog and Bisaya (Cebuano).",

  avatarUrl: "/assets/ray-joshua-avatar.jpg",
  skills: [
    { name: "C#", icon: faCode, category: "Languages" },
    { name: "TypeScript", icon: faTypescript, category: "Languages" },
    { name: "JavaScript", icon: faJs, category: "Languages" },
    { name: "Python", icon: faPython, category: "Languages" },
    { name: "PHP", icon: faPhp, category: "Languages" },
    { name: "Java", icon: faJava, category: "Languages" },
    { name: "C++", icon: faTerminal, category: "Languages" },
    { name: "React", icon: faReact, category: "Frontend" },
    { name: "Next.js", customIcon: Icons.nextjs, category: "Frontend" },
    { name: "Vue.js", icon: faVuejs, category: "Frontend" },
    { name: "Angular", icon: faAngular, category: "Frontend" },
    { name: "Tailwind CSS", icon: faTailwindCss, category: "Frontend" },
    { name: "Bootstrap", icon: faBootstrap, category: "Frontend" },
    { name: "Bulma", icon: faCss3Alt, category: "Frontend" },
    { name: ".NET / ASP.NET Core", icon: faMicrosoft, category: "Backend" },
    { name: "Laravel", icon: faLaravel, category: "Backend" },
    { name: "Django", icon: faLeaf, category: "Backend" },
    { name: "Node.js", icon: faNodeJs, category: "Backend" },
    { name: "PostgreSQL", icon: faDatabase, category: "Data" },
    { name: "MySQL", icon: faDatabase, category: "Data" },
    { name: "SQL Server", icon: faServer, category: "Data" },
    { name: "Power BI", icon: faChartBar, category: "Data" },
    { name: "WordPress", icon: faWordpress, category: "CMS & VA Tools" },
    { name: "Elementor", icon: faPlug, category: "CMS & VA Tools" },
    { name: "Shopify", icon: faShopify, category: "CMS & VA Tools" },
    { name: "Canva", icon: faPalette, category: "CMS & VA Tools" },
    { name: "Claude", customIcon: Icons.claude, category: "AI & Automation" },
    { name: "OpenAI Codex", customIcon: Icons.openai, category: "AI & Automation" },
    { name: "Grok", icon: faBolt, category: "AI & Automation" },
    { name: "Cursor", customIcon: Icons.cursor, category: "AI & Automation" },
    { name: "AI-Assisted Development & Workflow Automation", icon: faRobot, category: "AI & Automation" },
    { name: "Scratch", icon: faPuzzlePiece, category: "Teaching & Robotics" },
    { name: "LEGO Robotics", icon: faCube, category: "Teaching & Robotics" },
    { name: "Arduino Uno", icon: faMicrochip, category: "Teaching & Robotics" },
    { name: "Lesson Planning", icon: faGraduationCap, category: "Teaching & Robotics" },
    { name: "Docker", icon: faDocker, category: "Tools & PM" },
    { name: "Git", icon: faGitAlt, category: "Tools & PM" },
    { name: "Jira", icon: faJira, category: "Tools & PM" },
    { name: "Trello", icon: faTrello, category: "Tools & PM" },
    { name: "ClickUp", icon: faClipboardList, category: "Tools & PM" },
    { name: "Figma", icon: faFigma, category: "Tools & PM" },
    { name: "Adobe XD", icon: faPalette, category: "Tools & PM" },
  ],
  services: [
    {
      title: "CMS Web Development",
      description: "A website that turns visitors into inquiries — built on WordPress, Elementor or Shopify, fast and mobile-friendly, and easy for you to update yourself.",
      tags: ["WordPress", "Elementor", "Shopify"],
      icon: Globe,
    },
    {
      title: "Social Media Management",
      description: "Stay visible while you run your business — planned content, designed posts and consistent posting that grows your audience and brings inquiries.",
      tags: ["SEO", "SEM", "SMM", "Content Scheduling"],
      icon: Share2,
    },
    {
      title: "Web & App Development",
      description: "When a page builder is not enough — custom websites and web apps coded with React, Next.js and .NET, with the exact features your business needs.",
      tags: ["React", "TypeScript", ".NET", "Next.js"],
      icon: AppWindow,
    },
    {
      title: "School Management Systems",
      description: "Custom EdTech platforms for schools — HR, attendance, accounts and school-wide workflows in one system.",
      tags: ["EdTech", "ASP.NET Core", "SQL Server", "React"],
      icon: School,
    },
    {
      title: "ICT & Robotics Education / Training",
      description: "ICT, Computer Science and Robotics teaching, training and workshops for Kindergarten to college — Scratch, Python, LEGO and Arduino.",
      tags: ["Scratch", "Python", "LEGO Robotics", "Arduino"],
      icon: Bot,
    },
    {
      title: "Business Systems Analysis",
      description: "End-to-end process flows, business requirements documents, and QA/UAT leadership that connect stakeholders and developers.",
      tags: ["BRD", "Process Flows", "UAT", "QA"],
      icon: ClipboardList,
    },
  ],
  packages: [
    {
      title: "CMS Website",
      tagline: "For businesses and schools that need a website which brings inquiries, not just visits.",
      icon: Globe,
      features: [
        "WordPress + Elementor (or Shopify for stores)",
        "Up to 5 pages — Home, About, Services, Gallery, Contact",
        "Mobile-responsive, fast-loading design",
        "Contact form, Google Maps and social links",
        "Basic SEO setup — titles, descriptions, sitemap",
        "Handover guide so you can edit the site yourself",
      ],
      subject: "CMS Website inquiry",
    },
    {
      title: "Social Media Management",
      tagline: "For busy owners who want consistent, professional pages without doing it themselves.",
      icon: Share2,
      features: [
        "Monthly content calendar planned with you",
        "Designed posts and captions (Canva)",
        "Scheduling and posting done for you",
        "Hashtag and keyword research for reach",
        "Facebook and Instagram pages",
        "Simple monthly performance summary",
      ],
      subject: "Social Media Management inquiry",
    },
    {
      title: "Custom Web Development",
      tagline: "For ideas that need real programming — systems, dashboards and web apps built to order.",
      icon: AppWindow,
      features: [
        "Coded with React, Next.js, TypeScript or .NET",
        "Custom features — booking, dashboards, school systems",
        "Database and admin panel included",
        "Fast, secure and SEO-friendly structure",
        "Deployment and launch handled for you",
        "Full source code — you own everything",
      ],
      subject: "Custom Web Development inquiry",
    },
  ],
  processSteps: [
    {
      title: "Free consultation",
      description: "Tell me about your business, goals and timeline by email. No cost, no commitment.",
    },
    {
      title: "Proposal & fixed quote",
      description: "You receive a clear scope, total price and timeline before any work starts — no surprises later.",
    },
    {
      title: "Design & build",
      description: "I build in stages and share previews along the way, so your feedback shapes the result early.",
    },
    {
      title: "Launch & support",
      description: "We go live together, and I stay available for updates, fixes and your next idea.",
    },
  ],
  faqs: [
    {
      question: "How much does a website cost?",
      answer: "Every project is different, so after a free consultation I send one fixed quote for the full scope. You know the total before we start — no hourly billing and no surprise charges.",
    },
    {
      question: "How long does a project take?",
      answer: "A typical CMS website takes about 1–3 weeks once your content is ready. Social media management can start within a few days. Your exact timeline is agreed in the proposal before we begin.",
    },
    {
      question: "Do you work with clients outside Thailand?",
      answer: "Yes. I work remotely from Bangkok with clients anywhere — we communicate by email, chat and video call, and I share progress previews online at every stage.",
    },
    {
      question: "Can you update or maintain my website afterwards?",
      answer: "Yes — I offer ongoing updates, backups and small changes, or I can hand over the site with a simple guide so you can edit text and photos yourself.",
    },
    {
      question: "What do you need from me to start?",
      answer: "Just your goals, and any logo, text or photos you already have. No content yet? I can help you draft it — many clients start with almost nothing.",
    },
    {
      question: "Which social platforms do you manage?",
      answer: "Facebook and Instagram — content planning, designed posts, captions, scheduling and a monthly summary, so your pages stay active while you focus on your business.",
    },
  ],
  certifications: [
    { title: "Computer Systems Servicing (CSS) NC II", issuer: "TESDA National Certificate" },
    { title: "Microsoft Technology Associate — Database", issuer: "Microsoft" },
    { title: "Cisco Certified Network Associate — Basic Networking", issuer: "Cisco" },
    { title: "Cisco Networking — Advanced Networking", issuer: "Cisco" },
    { title: "Speaker — IT Fest Workshop: Python Game Development", issuer: "IT Fest" },
    { title: "Speaker — IT Fest Workshop: Java Programming", issuer: "IT Fest" },
    { title: "Capstone Project Adviser", issuer: "Holy Child College of Davao" },
  ],
  setup: [
    {
      title: "Gear I Use",
      description: "Hardware and gadgets in my daily workflow.",
      href: "/tools",
      icon: Settings,
    },
    {
      title: "Tools I Use",
      description: "Software, CMS and AI tools I teach and build with every day.",
      href: "/tools",
      icon: Wrench,
    },
  ],
  tools: [
    {
      name: "Cursor",
      description: "AI-powered code editor — my primary IDE for building apps and school systems.",
      href: "https://cursor.com",
      customIcon: Icons.cursor,
    },
    {
      name: "VS Code",
      description: "The classic editor I use for teaching programming and quick edits.",
      href: "https://code.visualstudio.com",
      customIcon: Icons.vscode,
    },
    {
      name: "Claude",
      description: "AI assistant for coding, lesson planning and writing — part of my daily workflow.",
      href: "https://claude.ai",
      customIcon: Icons.claude,
    },
    {
      name: "Docker",
      description: "Containerization for consistent dev environments and easy deployments.",
      href: "https://www.docker.com",
      icon: faDocker,
    },
    {
      name: "GitHub",
      description: "Where my code lives — the Lesson Plan Hub, the SIAMIS School Management System, and more.",
      href: "https://github.com/rayjoshuaa",
      icon: faGithub,
    },
    {
      name: "WordPress & Elementor",
      description: "My go-to CMS stack for client and school websites as a virtual assistant.",
      href: "https://wordpress.org",
      icon: faWordpress,
    },
    {
      name: "Canva",
      description: "Designing e-books, learning materials, and social media content.",
      href: "https://www.canva.com",
      icon: faPalette,
    },
    {
      name: "Postman",
      description: "API testing and documentation for the school management system's API-first backend.",
      href: "https://www.postman.com",
      icon: faRocket,
    },
    {
      name: "Jira",
      description: "Issue tracking and project management from my business systems analyst work.",
      href: "https://www.atlassian.com/software/jira",
      icon: faJira,
    },
    {
      name: "Trello",
      description: "Lightweight boards for organizing tasks, lessons and content schedules.",
      href: "https://trello.com",
      icon: faTrello,
    },
    {
      name: "Figma",
      description: "Design tool for UI mockups, prototyping, and collaborating on layouts.",
      href: "https://www.figma.com",
      icon: faFigma,
    },
    {
      name: "Notion",
      description: "Notes, lesson references, and documentation — my second brain.",
      href: "https://www.notion.so",
      customIcon: Icons.notion,
    },
  ],
  navbar: NAVBAR,
  contact: CONTACT,

  work: [
    {
      company: "Siam International School",
      href: "#",
      badges: [],
      location: "Bangkok, Thailand",
      title: "ICT, Computer Science & Robotics Teacher",
      logoUrl: "",
      start: "",
      end: "Present",
      description:
        "Teaching ICT, Computer Science and Robotics across Kindergarten, Primary and Secondary. Younger learners start with Scratch and Python; robotics classes build and program with LEGO kits and Arduino Uno. At higher levels I teach programming in C++, C#, Java, Python and PHP. I also built the SIAMIS Lesson Plan Hub for my co-teachers and am developing a school management system for the entire school.",
    },
    {
      company: "Lapanday Foods Corporation",
      href: "#",
      badges: ["Supervisor"],
      location: "Davao City, Philippines",
      title: "Business Systems Analyst",
      logoUrl: "",
      start: "April 2024",
      end: "April 2026",
      description:
        "Created the end-to-end process flows for the entire company workflow and wrote BRDs covering functional and non-functional specifications. Led QA, UAT and go-live for 10+ enterprise systems — including the Applicants Portal & HRIS, DMS, LDMS, Banana & Pineapple Farm Management Systems, Employee ID System, Computerized Product Pricing Tool, Accounts Payable Tracking, Materials Requisition System, and ERP–Acumatica — acting as liaison between stakeholders and developers.",
    },
    {
      company: "Holy Child College of Davao",
      href: "#",
      badges: ["Part-time"],
      location: "Mintal, Davao City, Philippines",
      title: "College Instructor",
      logoUrl: "",
      start: "June 2024",
      end: "March 2026",
      description:
        "Taught core BSIT subjects including programming and networking. Served as thesis and capstone adviser for many fourth-year groups who went on to graduate, and ran workshops for students across different year levels.",
    },
    {
      company: "OSOlink Solutions",
      href: "#",
      badges: ["Internship"],
      location: "Davao City, Philippines",
      title: "Digital Marketer",
      logoUrl: "",
      start: "January 2024",
      end: "March 2024",
      description:
        "Where I started in web development with CMS platforms and digital marketing. Executed SEO, SEM and SMM campaigns, with content scheduling, keyword research and trend monitoring — techniques I still use in my virtual-assistant work today.",
    },
    {
      company: "Tutorspod",
      href: "#",
      badges: [],
      location: "Davao City, Philippines",
      title: "Website Administrator & E-book Designer",
      logoUrl: "",
      start: "November 2019",
      end: "July 2020",
      description:
        "Maintained CMS website content for accuracy, SEO and user experience, designed e-books and learning materials with Canva and Adobe tools, and also tutored English to kindergarten and primary students.",
    },
    {
      company: "Breakthrough and Milestones Productions International",
      href: "#",
      badges: [],
      location: "Philippines",
      title: "Marketing Executive & Hospitality Staff",
      logoUrl: "",
      start: "December 2018",
      end: "August 2019",
      description:
        "Negotiated deals with promotional partners and provided hospitality support at events.",
    },
  ],
  education: [
    {
      school: "St. John Paul II College of Davao",
      href: "#",
      degree: "BS in Information Technology — BSIT Department Officer (Auditor 2020–2022, Treasurer 2022–2023); PSITS and Research Congress participant. Coursework: Systems Analysis & Design, Database Management, Software Engineering.",
      logoUrl: "",
      start: "",
      end: "June 2024",
    },
    {
      school: "Elegant Tech Training Center",
      href: "#",
      degree: "Vocational Course in Tourism & Bookkeeping — Davao City",
      logoUrl: "",
      start: "",
      end: "",
    },
  ],
  projects: [
    {
      title: "SIAMIS School Management System",
      href: "https://github.com/rayjoshuaa/SIAMIS-School-Management-System",
      dates: "In development",
      active: true,
      description:
        "An API-first school management platform I'm building for the entire school's functions — starting with the HR module: employee directory, accounts, and attendance. Currently at v0.5.1 release candidate, and the project I'm most proud of as it keeps improving.",
      technologies: [
        "C#",
        ".NET",
        "ASP.NET Core",
        "EF Core",
        "SQL Server",
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/rayjoshuaa/SIAMIS-School-Management-System",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/projects/siamis-sms.png",
      video: "",
    },
    {
      title: "SIAMIS Lesson Plan Hub",
      href: "https://rayjoshuaa.github.io/",
      dates: "Ongoing",
      active: true,
      description:
        "Lesson plans and materials site for Computing (Years 2–8) and ICT. It started as a personal and co-teacher reference — including when I'm on leave — so classes keep running with the same plans and resources.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "GitHub Pages",
      ],
      links: [
        {
          type: "Website",
          href: "https://rayjoshuaa.github.io/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/assets/projects/siamis-lesson-plan-hub.png",
      video: "",
    },
    {
      title: "Lapanday Enterprise Systems Program",
      href: "#",
      dates: "2024 - 2026",
      active: true,
      description:
        "Business analysis and process design connecting CMS, ERP and internal systems across Lapanday Foods Corporation — process flows, BRDs, QA and UAT for 10+ systems including HRIS, document and learning management, farm management systems, and ERP–Acumatica.",
      technologies: [
        "Business Analysis",
        "BRD",
        "Process Design",
        "UAT",
        "ERP — Acumatica",
      ],
      links: [],
      image: "/assets/projects/banana-farm-management-system.png",
      video: "",
    },
    {
      title: "Small Useful Apps",
      href: "#",
      dates: "In progress",
      active: true,
      description:
        "A growing collection of small, useful apps I build to publish and help people — simple tools that solve everyday problems for teachers, students and small teams.",
      technologies: [
        "React",
        "TypeScript",
        "C#",
        ".NET",
      ],
      links: [],
      image: "/assets/projects/small-useful-apps.png",
      video: "",
    },
    {
      title: "ChoiceMart PH — UI/UX Prototype",
      href: "#",
      dates: "UI/UX Design",
      active: true,
      description:
        "E-commerce grocery website UI prototype designed in Figma — homepage with product categories, search and cart, GCash, Coins.ph and Visa payment options, and delivery around Davao City.",
      technologies: ["UI/UX Design", "Figma", "E-commerce"],
      links: [],
      image: "/assets/projects/choicemart-ph.png",
      video: "",
    },
    {
      title: "AgriMart PH — UI/UX Prototype",
      href: "#",
      dates: "UI/UX Design",
      active: true,
      description:
        "Farm-to-table fresh goods e-commerce landing page UI prototype, with an illustrated hero and a clean, friendly shopping layout.",
      technologies: ["UI/UX Design", "Figma", "E-commerce"],
      links: [],
      image: "/assets/projects/agrimart-ph.png",
      video: "",
    },
    {
      title: "Banana Farm Management System — UI Design",
      href: "#",
      dates: "UI Design",
      active: true,
      description:
        "Login screen UI for the Banana Farm Management System (BFMS) at Lapanday Foods Corporation, set over a banana nursery photo — part of the enterprise systems program I supported as Business Systems Analyst.",
      technologies: ["UI Design", "Enterprise Systems", "Lapanday Foods"],
      links: [],
      image: "/assets/projects/banana-farm-management-system.png",
      video: "",
    },
    {
      title: "Eco-green Society — UI/UX Prototype",
      href: "#",
      dates: "UI/UX Design",
      active: true,
      description:
        "Environmental nonprofit website landing page UI prototype — “Nature is our treasure, help us save it” — with a nature-first hero and community-focused sections.",
      technologies: ["UI/UX Design", "Figma", "Web Design"],
      links: [],
      image: "/assets/projects/eco-green-society.png",
      video: "",
    },
    {
      title: "Devpedia — Mobile App UI Prototype",
      href: "#",
      dates: "UI/UX Design",
      active: true,
      description:
        "Mobile app UI prototype for Devpedia, a programming dictionary app that helps developers improve their technical vocabulary — shown here is the welcome and onboarding screen.",
      technologies: ["UI/UX Design", "Mobile App", "Figma"],
      links: [],
      image: "/assets/projects/devpedia.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "IT Fest Workshop — Python Game Development",
      dates: "",
      location: "Davao City, Philippines",
      description:
        "Workshop speaker session on building games with Python for IT Fest participants.",
      image: "/assets/logo.svg",
      mlh: "#",
      links: [],
    },
    {
      title: "IT Fest Workshop — Java Programming",
      dates: "",
      location: "Davao City, Philippines",
      description:
        "Workshop speaker session on Java programming fundamentals for IT Fest participants.",
      image: "/assets/logo.svg",
      mlh: "#",
      links: [],
    },
  ],
} as const;
