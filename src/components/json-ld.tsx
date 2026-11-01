import { DATA } from "@/data/resume";

/**
 * Structured data (JSON-LD) for SEO.
 * Includes Person, WebSite, and ItemList schemas.
 *
 * Template by Mynd Labs — https://myndlabs.tech
 */
export function JsonLd() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${DATA.url}/#person`,
      name: "Ray Joshua A. Balingkit",
      givenName: "Ray Joshua",
      familyName: "Balingkit",
      url: DATA.url,
      image: `${DATA.url}${DATA.avatarUrl}`,
      jobTitle: "ICT & Robotics Teacher",
      nationality: {
        "@type": "Country",
        name: "Philippines",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "St. John Paul II College of Davao",
      },
      worksFor: {
        "@type": "Organization",
        name: "SIAMIS",
        url: DATA.url,
      },
      sameAs: [
        "https://github.com/rayjoshuaa",
        "https://www.linkedin.com/in/rayjoshua432/",
        "https://x.com/ry_devs",
        "https://instagram.com/rayjoshua432",
        "https://facebook.com/rj432",
      ],
      knowsAbout: DATA.skills.map((s) => s.name),
      knowsLanguage: ["English", "Tagalog", "Bisaya"],
      description: DATA.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${DATA.url}/#website`,
      name: "Ray Joshua — ICT & Robotics Teacher, Developer & Virtual Assistant",
      url: DATA.url,
      description: DATA.description,
      publisher: {
        "@id": `${DATA.url}/#person`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Site Sections",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Projects",
          description:
            "School management systems, lesson plan hubs, and small useful apps built with .NET, React, and TypeScript",
          url: `${DATA.url}/projects`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          description:
            "Articles about teaching technology, robotics, and building EdTech software",
          url: `${DATA.url}/blog`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Services",
          description:
            "WordPress & CMS websites, social media management, and custom web development with fixed quotes",
          url: `${DATA.url}/services`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Tools",
          description: "Tech setup, hardware, and productivity tools used daily",
          url: `${DATA.url}/tools`,
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
