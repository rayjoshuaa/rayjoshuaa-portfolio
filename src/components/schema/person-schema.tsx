import { DATA } from "@/data/resume";

/**
 * Person schema for structured data (SEO).
 * Template by Mynd Labs — https://myndlabs.tech
 */
export function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ray Joshua A. Balingkit",
          alternateName: ["Ray Joshua", "RJ"],
          description: DATA.description,
          image: `${DATA.url}${DATA.avatarUrl}`,
          url: DATA.url,
          sameAs: [
            DATA.contact.social.GitHub.url,
            DATA.contact.social.LinkedIn.url,
            DATA.contact.social.X.url,
            DATA.contact.social.Instagram.url,
            DATA.contact.social.Facebook.url,
          ],
          jobTitle: "ICT & Robotics Teacher",
          worksFor: {
            "@type": "Organization",
            name: "Siam International School",
            url: DATA.url,
          },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "St. John Paul II College of Davao",
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bangkok",
            addressCountry: "Thailand",
          },
          email: DATA.contact.email,
          knowsAbout: DATA.skills.map((s) => s.name),
        }),
      }}
    />
  );
}
