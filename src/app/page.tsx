import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { PersonSchema } from "@/components/schema/person-schema";
import { SiteSchema } from "@/components/schema/site-schema";
import { Metadata } from 'next';
import { Icons } from "@/components/icons";
import { Award, Check } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlipAvatar } from "@/components/flip-avatar";
import { FeatureBento } from "@/components/feature-bento";
import { ContactForm } from "@/components/contact-form";

// Serve the avatar through the Next image optimizer (about 8 KB instead of 485 KB).
const OPTIMIZED_AVATAR = DATA.avatarUrl;

const BLUR_FADE_DELAY = 0.04;

// Brand hover colors for social icons; others fall back to foreground
const SOCIAL_HOVER_COLORS: Record<string, string> = {
  LinkedIn: "hover:text-[#0a66c2]",
  Youtube: "hover:text-[#ff0000]",
  Instagram: "hover:text-[#e4405f]",
};

export const metadata: Metadata = {
  title: "Ray Joshua Balingkit Portfolio",
  description: DATA.summary.replace(/\*\*|\[|\]|\(.*?\)/g, '').trim(),
  openGraph: {
    title: "Ray Joshua Balingkit Portfolio",
    description: DATA.description,
    url: DATA.url,
    siteName: "Ray Joshua Balingkit Portfolio",
    images: [
      {
        url: `${DATA.url}${DATA.avatarUrl}`,
        width: 1200,
        height: 630,
        alt: `${DATA.name}'s Portfolio`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ray Joshua Balingkit Portfolio",
    description: DATA.description,
    creator: '@ry_devs',
    images: [`${DATA.url}${DATA.avatarUrl}`],
  },
};

function SectionLabel({ label }: { label: string }) {
  return (
    <span className="inline-block text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
      {label}
    </span>
  );
}

export default function Page() {
  return (
    <>
      <main className="flex min-h-[100dvh] flex-col space-y-12 sm:space-y-14">
        <PersonSchema />
      <SiteSchema />

        {/* ─── HERO ─── */}
        <section id="hero">
          <div className="mx-auto w-full space-y-8">
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="flex flex-col items-center space-y-1.5">
                <BlurFade eager delay={BLUR_FADE_DELAY * 0.5}>
                  <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground backdrop-blur">
                    <span className="relative flex size-1.5">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/70 motion-reduce:animate-none" />
                      <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                    </span>
                    ICT Teacher · Freelance Web Developer · Social Media Manager
                  </span>
                </BlurFade>
                <BlurFadeText eager
                  delay={BLUR_FADE_DELAY}
                  className="font-display text-5xl leading-[0.95] tracking-[-0.03em] sm:text-7xl xl:text-8xl"
                  yOffset={8}
                  text={`Hey, I'm ${DATA.name.split(" ")[0]}.`}
                  as="h1"
                />
                <BlurFadeText eager
                  className="mx-auto mt-3 max-w-[640px] text-base leading-relaxed text-muted-foreground md:text-xl"
                  delay={BLUR_FADE_DELAY * 1.5}
                  text={DATA.description}
                />
                <BlurFade eager delay={BLUR_FADE_DELAY * 2.2}>
                  <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/70 motion-reduce:animate-none" />
                      <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                    </span>
                    Available for new client projects
                  </p>
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=rayjoshua432@gmail.com&su=Project%20inquiry" target="_blank" rel="noopener noreferrer"
                      className="inline-flex h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      Start a project
                    </a>
                    <Link prefetch={false}
                      href="/services"
                      className="inline-flex h-11 items-center rounded-full border border-border bg-card/50 px-6 text-sm font-medium transition-colors duration-200 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      Services &amp; packages
                    </Link>
                    <Link prefetch={false}
                      href="/projects"
                      className="inline-flex h-11 items-center rounded-full border border-border bg-card/50 px-6 text-sm font-medium transition-colors duration-200 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      View projects
                    </Link>
                  </div>
                </BlurFade>
              </div>
              <BlurFade eager delay={BLUR_FADE_DELAY} className="order-first">
                <div className="profile-wrapper">
                  <FlipAvatar
                    src={OPTIMIZED_AVATAR}
                    hoverSrc={OPTIMIZED_AVATAR}
                    alt={DATA.name}
                    fallback={DATA.initials}
                  />
                </div>
              </BlurFade>
            </div>

            {/* About */}
            <BlurFade eager delay={BLUR_FADE_DELAY * 3} className="mx-auto w-full max-w-3xl text-left">
              <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                {DATA.summary}
              </Markdown>
            </BlurFade>

            {/* Social links */}
            <div className="flex flex-col items-center gap-3">
              <BlurFade eager delay={BLUR_FADE_DELAY * 4.5}>
                <div className="flex flex-wrap items-center gap-3">
                  {Object.entries(DATA.contact.social)
                    .filter(([_, social]) => social.navbar !== false)
                    .map(([name, social]) => (
                      <Tooltip key={name}>
                        <TooltipTrigger asChild>
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`rounded-full border border-border/60 bg-card/40 p-2.5 text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-border hover:bg-card ${SOCIAL_HOVER_COLORS[name] ?? "hover:text-foreground"}`}
                            aria-label={name}
                          >
                            <social.icon className="size-5" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{social.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                </div>
              </BlurFade>
            </div>
          </div>
        </section>


        <FeatureBento />

        {/* ─── SERVICES ─── */}
        <section id="services">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 8.5}>
              <SectionLabel label="Virtual Assistant & Services" />
              <h2 className="mt-1.5 text-xl font-bold tracking-tight">What I Can Do For You</h2>
              <p className="mt-1 max-w-[560px] text-sm text-muted-foreground">
                Websites and social media that turn visitors into inquiries — remote services for schools, businesses and creators.
              </p>
            </BlurFade>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {DATA.services.map((service, id) => (
                <BlurFade key={service.title} delay={BLUR_FADE_DELAY * 9 + id * 0.05}>
                  <article className="group h-full rounded-2xl border border-border/60 bg-card/40 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:bg-card/80">
                    <service.icon className="size-6 text-muted-foreground transition-colors group-hover:text-foreground" />
                    <h3 className="mt-4 font-display text-xl leading-tight tracking-[-0.01em]">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="border border-border/50 px-2 py-0.5 text-[11px]">{tag}</Badge>
                      ))}
                    </div>
                  </article>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>


        {/* ─── PACKAGES ─── */}
        <section id="packages">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9.2}>
              <SectionLabel label="Packages" />
              <h2 className="mt-1.5 text-xl font-bold tracking-tight">Simple Packages, Fixed Quotes</h2>
              <p className="mt-1 max-w-[560px] text-sm text-muted-foreground">
                Pick a starting point — every package begins with a free consultation and one fixed quote for the full scope.
              </p>
            </BlurFade>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {DATA.packages.map((pkg, id) => (
                <BlurFade key={pkg.title} delay={BLUR_FADE_DELAY * 9.4 + id * 0.05} className="h-full">
                  <article className="flex h-full flex-col rounded-2xl border border-border/60 bg-card/40 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:bg-card/80">
                    <pkg.icon className="size-6 text-muted-foreground" />
                    <h3 className="mt-4 font-display text-xl leading-tight tracking-[-0.01em]">{pkg.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pkg.tagline}</p>
                    <ul className="mt-4 flex-1 space-y-2">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${DATA.contact.email}&su=${encodeURIComponent(pkg.subject)}`} target="_blank" rel="noopener noreferrer"
                      className="mt-5 inline-flex h-10 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      Get a free quote
                    </a>
                  </article>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROCESS ─── */}
        <section id="process">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9.6}>
              <SectionLabel label="Working together" />
              <h2 className="mt-1.5 text-xl font-bold tracking-tight">How It Works</h2>
            </BlurFade>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {DATA.processSteps.map((step, id) => (
                <BlurFade key={step.title} delay={BLUR_FADE_DELAY * 9.8 + id * 0.05}>
                  <div className="h-full rounded-2xl border border-border/60 bg-card/40 p-5">
                    <span className="font-display text-3xl text-muted-foreground/60">{String(id + 1).padStart(2, "0")}</span>
                    <h3 className="mt-3 text-sm font-semibold">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SKILLS ─── */}
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <SectionLabel label="Technologies" />
              <h2 className="mt-1.5 text-xl font-bold tracking-tight">Tech Stack</h2>
            </BlurFade>
            {Array.from(new Set(DATA.skills.map((s) => s.category))).map((category, ci) => (
              <BlurFade key={category} delay={BLUR_FADE_DELAY * (9.5 + ci * 0.5)}>
                <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {DATA.skills.filter((skill) => skill.category === category).map((skill) => (
                    <Badge key={skill.name} variant="secondary" className="inline-flex items-center gap-1.5 border border-border/50 px-3 py-1.5 text-sm">
                      {"customIcon" in skill ? (
                        <skill.customIcon className="size-4" />
                      ) : (
                        <FontAwesomeIcon icon={skill.icon} className="size-4" />
                      )}
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </BlurFade>
            ))}
          </div>
        </section>


        {/* ─── PROJECTS ─── */}
        <section id="projects">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <SectionLabel label="Portfolio" />
              <h2 className="mt-1.5 text-xl font-bold tracking-tight">Featured Projects</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 10.5}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {DATA.projects
                  .filter((project) =>
                    ["SIAMIS School Management System", "SIAMIS Lesson Plan Hub", "Lapanday Enterprise Systems Program"].includes(project.title)
                  )
                  .sort((a, b) => {
                    const order = ["SIAMIS School Management System", "SIAMIS Lesson Plan Hub", "Lapanday Enterprise Systems Program"];
                    return order.indexOf(a.title) - order.indexOf(b.title);
                  })
                  .map((project) => (
                    <div key={project.title} className="relative h-full overflow-hidden rounded-xl">
                      <ProjectCard
                        {...project}
                        tags={Array.from(project.technologies)}
                      />
                    </div>
                  ))}
              </div>
              <Link prefetch={false}
                href="/projects"
                className="mt-4 inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                  View All Projects →
              </Link>
            </BlurFade>
          </div>
        </section>


        {/* ─── WORK ─── */}
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <SectionLabel label="Career" />
              <h2 className="mt-1.5 text-xl font-bold tracking-tight">Work Experience</h2>
            </BlurFade>
            <div className="space-y-3">
              {DATA.work.map((work, id) => (
                <BlurFade
                  key={work.company}
                  delay={BLUR_FADE_DELAY * 11.5 + id * 0.05}
                >
                  <ResumeCard
                    key={work.company}
                    logoUrl={work.logoUrl}
                    altText={work.company}
                    avatarVariant="work"
                    title={work.company}
                    subtitle={work.title}
                    href={work.href}
                    badges={work.badges}
                    period={work.start ? `${work.start} - ${work.end}` : work.end}
                    description={work.description}
                    redacted={(work as any).redacted}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>


        {/* ─── EDUCATION ─── */}
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <SectionLabel label="Academic" />
              <h2 className="mt-1.5 text-xl font-bold tracking-tight">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 12.5 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  avatarVariant="education"
                  title={education.school}
                  subtitle={education.degree}
                  period={education.start ? `${education.start} - ${education.end}` : education.end}
                />
              </BlurFade>
            ))}
          </div>
        </section>


        {/* ─── CERTIFICATIONS & SPEAKING ─── */}
        <section id="certifications">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <SectionLabel label="Credentials" />
              <h2 className="mt-1.5 text-xl font-bold tracking-tight">Certifications &amp; Speaking</h2>
            </BlurFade>
            <div className="grid gap-3 sm:grid-cols-2">
              {DATA.certifications.map((cert, id) => (
                <BlurFade key={cert.title} delay={BLUR_FADE_DELAY * 13.5 + id * 0.05}>
                  <div className="flex h-full items-start gap-3 rounded-xl border border-border/60 bg-card/40 p-4">
                    <Award className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium leading-snug">{cert.title}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section id="contact">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-b from-card/60 via-card/40 to-card/20 px-6 py-12 text-center sm:px-12">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, hsl(var(--foreground) / 0.18) 1px, transparent 0)",
                  backgroundSize: "16px 16px",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-foreground/10 blur-3xl"
              />
              <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
              <SectionLabel label="Get in touch" />
              <p className="mx-auto max-w-2xl text-xl leading-relaxed text-muted-foreground">
               Open to collaborations on education projects — and to VA, CMS, social media and web development work. Let's build something useful.
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rayjoshua432@gmail.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-border/70 bg-background/70 px-5 py-2.5 text-sm font-medium shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-background"
              >
                <Avatar className="size-6">
                  <AvatarImage src={OPTIMIZED_AVATAR} alt={DATA.name} className="object-cover object-[50%_30%]" />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
                Let's talk
              </a>
              <div className="w-full space-y-3 pt-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Or send a message right here
                </p>
                <ContactForm />
              </div>
              </div>
            </div>
          </BlurFade>
        </section>

        {/* ─── FOOTER ─── */}
        <footer className="border-t border-border/40 pt-8 pb-4">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="space-y-2">
                <p className="text-sm font-medium">{DATA.name}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  ICT & Robotics Teacher at SIAMIS, Bangkok.
                  <br />Educator · Developer · Virtual Assistant.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Links</p>
                <div className="flex flex-col gap-1.5">
                  {DATA.navbar.slice(1).map((item) => (
                    <Link prefetch={false}
                      key={item.href}
                      href={item.href}
                      className="inline-flex min-h-6 items-center py-1 text-xs text-muted-foreground hover:text-foreground transition-colors w-fit"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Meta</p>
                <div className="flex flex-col gap-1.5">
                  <Link prefetch={false} href="/sitemap.xml" className="inline-flex min-h-6 items-center py-1 text-xs text-muted-foreground hover:text-foreground transition-colors w-fit">
                    Sitemap
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-border/30 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} {DATA.name}. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground">
                ICT & Robotics Teacher · Bangkok, Thailand
              </p>
            </div>
          </BlurFade>
        </footer>
      </main>
    </>
  );
}
