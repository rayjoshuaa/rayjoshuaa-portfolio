import { DATA } from "@/data/resume";

/**
 * WebSite + ProfilePage schema: tells Google this site is the official
 * profile page of the person in PersonSchema, which is what name
 * searches ("Ray Joshua Balingkit portfolio") need to rank it.
 */
export function SiteSchema() {
  const person = {
    "@type": "Person",
    name: "Ray Joshua A. Balingkit",
    alternateName: ["Ray Joshua", "RJ"],
    url: DATA.url,
    image: `${DATA.url}${DATA.avatarUrl}`,
    jobTitle: "ICT & Robotics Teacher",
    description: DATA.description,
    sameAs: [
      DATA.contact.social.GitHub.url,
      DATA.contact.social.LinkedIn.url,
      DATA.contact.social.X.url,
      DATA.contact.social.Instagram.url,
      DATA.contact.social.Facebook.url,
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${DATA.url}/#website`,
              url: DATA.url,
              name: "Ray Joshua Balingkit Portfolio",
              description: DATA.description,
              inLanguage: "en",
              publisher: { "@id": `${DATA.url}/#person` },
            },
            {
              "@type": "ProfilePage",
              "@id": `${DATA.url}/#profilepage`,
              url: DATA.url,
              name: "Ray Joshua Balingkit Portfolio",
              isPartOf: { "@id": `${DATA.url}/#website` },
              about: { "@id": `${DATA.url}/#person` },
              mainEntity: { "@id": `${DATA.url}/#person` },
            },
            { ...person, "@id": `${DATA.url}/#person` },
          ],
        }),
      }}
    />
  );
}
