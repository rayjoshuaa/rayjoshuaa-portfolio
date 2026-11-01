import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Packages",
  description:
    "Hire Ray Joshua for WordPress & CMS websites, social media management, and custom web development — fixed quotes, remote from Bangkok, for schools and businesses anywhere.",
  alternates: {
    canonical: `${DATA.url}/services`,
  },
  openGraph: {
    title: "Services & Packages | Ray Joshua Balingkit Portfolio",
    description:
      "WordPress & CMS websites, social media management, and custom web development — fixed quotes after a free consultation.",
    url: `${DATA.url}/services`,
    images: [{ url: `${DATA.url}${DATA.avatarUrl}`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services & Packages | Ray Joshua Balingkit Portfolio",
    description:
      "WordPress & CMS websites, social media management, and custom web development — fixed quotes after a free consultation.",
    images: [`${DATA.url}${DATA.avatarUrl}`],
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function ServicesPage() {
  return (
    <main className="w-full py-12">
      <BreadcrumbJsonLd items={[{ name: "Services", href: "/services" }]} />

      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/70 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Available for new client projects
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Websites &amp; Social Media That Bring You Clients
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I&apos;m Ray — an ICT &amp; Robotics teacher by day and a web developer with 6+ years in IT.
            I build WordPress &amp; CMS websites, manage social media, and code custom web apps for
            schools and businesses — remotely, with a fixed quote before we start.
          </p>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${DATA.contact.email}&su=${encodeURIComponent("Project inquiry — from your portfolio")}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-transform duration-200 hover:-translate-y-0.5"
          >
            Start with a free consultation
          </a>
        </div>
      </BlurFade>

      {/* Packages */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {DATA.packages.map((pkg, id) => (
          <BlurFade key={pkg.title} delay={BLUR_FADE_DELAY * 2 + id * 0.05} inView className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-border/60 bg-card/40 p-6">
              <pkg.icon className="size-7 text-muted-foreground" />
              <h2 className="mt-4 font-display text-2xl leading-tight">{pkg.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pkg.tagline}</p>
              <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                What&apos;s included
              </p>
              <ul className="mt-2 flex-1 space-y-2">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-muted-foreground">
                Pricing: one fixed quote after a free consultation — no hourly surprises.
              </p>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${DATA.contact.email}&su=${encodeURIComponent(pkg.subject)}`} target="_blank" rel="noopener noreferrer"
                className="mt-3 inline-flex h-10 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-transform duration-200 hover:-translate-y-0.5"
              >
                Get a free quote
              </a>
            </article>
          </BlurFade>
        ))}
      </div>

      {/* All services */}
      <section className="mt-20">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h2 className="text-2xl font-bold">Everything I Can Do For You</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Beyond the packages — the full list of services from my teaching, enterprise IT and VA work.
          </p>
        </BlurFade>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.services.map((service, id) => (
            <BlurFade key={service.title} delay={BLUR_FADE_DELAY * 2 + id * 0.05} inView className="h-full">
              <article className="h-full rounded-2xl border border-border/60 bg-card/40 p-5">
                <service.icon className="size-6 text-muted-foreground" />
                <h3 className="mt-4 font-display text-xl leading-tight">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </article>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mt-20">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h2 className="text-2xl font-bold">How It Works</h2>
        </BlurFade>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DATA.processSteps.map((step, id) => (
            <BlurFade key={step.title} delay={BLUR_FADE_DELAY * 2 + id * 0.05} inView>
              <div className="h-full rounded-2xl border border-border/60 bg-card/40 p-5">
                <span className="font-display text-3xl text-muted-foreground/60">
                  {String(id + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-sm font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-20">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h2 className="text-2xl font-bold">Questions Clients Ask</h2>
        </BlurFade>
        <div className="mt-8 grid gap-3 lg:grid-cols-2">
          {DATA.faqs.map((faq, id) => (
            <BlurFade key={faq.question} delay={BLUR_FADE_DELAY * 2 + id * 0.05} inView>
              <div className="h-full rounded-2xl border border-border/60 bg-card/40 p-5">
                <h3 className="text-sm font-semibold">{faq.question}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="relative mt-20 overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-b from-card/60 via-card/40 to-card/20 py-12 text-center">
          <div className="relative z-10 flex flex-col items-center justify-center space-y-5 px-6">
            <h2 className="font-display text-3xl">Tell me about your project</h2>
            <p className="max-w-xl text-muted-foreground">
              A few sentences about your business, what you need, and your timeline is enough to start.
              The consultation and quote are free.
            </p>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${DATA.contact.email}&su=${encodeURIComponent("Project inquiry — from your portfolio")}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-transform duration-200 hover:-translate-y-0.5"
            >
              Email me — rayjoshua432@gmail.com
            </a>
          </div>
        </div>
      </BlurFade>
    </main>
  );
}
