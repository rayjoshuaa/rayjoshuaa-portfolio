import React, { Suspense } from 'react';
import { hardware, type HardwareItem } from '@/data/products';
import { DATA } from '@/data/resume';
import BlurFade from '@/components/magicui/blur-fade';
import { GadgetSkeleton } from "@/components/skeletons/gadget-skeleton";
import { Cpu, Smartphone, Headphones, Wrench, ArrowUpRight, Laptop, Monitor, HardDrive, Bot, Tablet, Sparkles } from 'lucide-react';

const hardwareIcons: Record<HardwareItem["icon"], React.ElementType> = {
  laptop: Laptop,
  monitor: Monitor,
  "hard-drive": HardDrive,
  bot: Bot,
  cpu: Cpu,
  smartphone: Smartphone,
  tablet: Tablet,
  headphones: Headphones,
};

const hardwareCategoryIcons: Record<string, React.ElementType> = {
  Workstation: Laptop,
  "Robotics Classroom": Bot,
  "Everyday Tech": Smartphone,
};
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GadgetsFilter } from '@/components/gadgets/gadgets-filter';
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import type { Metadata } from "next";

/**
 * Tools page — showcase of hardware, software and free resources.
 * Template by Mynd Labs — https://myndlabs.tech
 */
export const metadata: Metadata = {
  title: "Tools",
  description: "The hardware, software and free tools I use daily as an ICT & Robotics teacher, developer and virtual assistant — plus free resources anyone can use.",
  alternates: {
    canonical: `${DATA.url}/tools`,
  },
  openGraph: {
    title: "Tools & Setup | Ray Joshua Balingkit Portfolio",
    description: "The hardware and tools I use daily as an ICT & Robotics teacher, developer and virtual assistant.",
    url: `${DATA.url}/tools`,
    images: [{ url: `${DATA.url}${DATA.avatarUrl}`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tools & Setup | Ray Joshua Balingkit Portfolio",
    description: "The hardware and tools I use daily as an ICT & Robotics teacher, developer and virtual assistant.",
    images: [`${DATA.url}${DATA.avatarUrl}`],
  },
};

const freeTools = [
  { name: "Cloudflare Pages", category: "Hosting", tag: "Free", href: "https://pages.cloudflare.com", description: "Free hosting with SSL and a global CDN — this portfolio runs on it. Perfect for static sites and school projects." },
  { name: "Cloudflare Web Analytics", category: "Analytics", tag: "Free", href: "https://www.cloudflare.com/web-analytics/", description: "Privacy-friendly visitor stats with no cookies and no cost — know how many people view your portfolio." },
  { name: "Web3Forms", category: "Forms API", tag: "Free tier", href: "https://web3forms.com", description: "A free contact-form API for static sites. Add a working 'hire me' form to a portfolio with no backend code." },
  { name: "GitHub API", category: "API", tag: "Free", href: "https://docs.github.com/en/rest", description: "Free public API to pull your live repositories, stars and latest projects straight into your portfolio pages." },
  { name: "OpenWeather API", category: "API", tag: "Free tier", href: "https://openweathermap.org/api", description: "Free weather data for widgets and classroom apps — great first API for students learning to fetch data." },
  { name: "Public APIs Directory", category: "API", tag: "Free", href: "https://github.com/public-apis/public-apis", description: "A huge community list of free APIs — jokes, quotes, books, space, animals and more for small useful apps." },
  { name: "Pexels", category: "Design Assets", tag: "Free", href: "https://www.pexels.com", description: "Free stock photos and videos for blog posts, landing pages and client websites — no attribution required." },
  { name: "Unsplash", category: "Design Assets", tag: "Free", href: "https://unsplash.com", description: "High-quality free images that make any portfolio or classroom material look professional." },
  { name: "Lucide Icons", category: "Design Assets", tag: "Free", href: "https://lucide.dev", description: "Clean open-source icons — the same icon set used across this website." },
  { name: "Favicon.io", category: "Design Assets", tag: "Free", href: "https://favicon.io", description: "Generate a full favicon set from a photo, emoji or your initials in seconds." },
  { name: "shadcn/ui", category: "Dev Essentials", tag: "Free", href: "https://ui.shadcn.com", description: "Free, copy-paste React UI components for building polished apps fast." },
  { name: "Google Fonts", category: "Dev Essentials", tag: "Free", href: "https://fonts.google.com", description: "1,500+ free fonts to give any website its own personality." },
];

export default function ToolsPage() {
  const hardwareCategories = Array.from(new Set(hardware.map((item) => item.category)));

  const hardwareContent = (
    <div className="space-y-16">
      {hardwareCategories.map((category, categoryIndex) => {
        const CategoryIcon = hardwareCategoryIcons[category] ?? Cpu;
        const items = hardware.filter((item) => item.category === category);

        return (
          <BlurFade key={category} delay={0.1 * categoryIndex}>
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <CategoryIcon className="size-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{category}</h2>
                  <p className="text-sm text-muted-foreground">
                    {items.length} {items.length === 1 ? 'item' : 'items'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((item, index) => {
                  const ItemIcon = hardwareIcons[item.icon];
                  return (
                    <BlurFade key={item.title} delay={0.05 * index} inView className="h-full">
                      <div className="h-full rounded-xl border border-border/60 bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                        <div className="mb-3 inline-flex rounded-lg border border-border/50 bg-muted/50 p-2.5">
                          <ItemIcon className="size-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-sm mb-1.5">{item.title}</h3>
                        <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                      </div>
                    </BlurFade>
                  );
                })}
              </div>
            </section>
          </BlurFade>
        );
      })}
    </div>
  );

  const softwareContent = (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 rounded-xl bg-primary/10">
          <Wrench className="size-5 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Tools & Software</h2>
          <p className="text-sm text-muted-foreground">
            Apps and software I use to code and stay productive.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {DATA.tools.map((tool, index) => (
          <BlurFade key={tool.name} delay={0.04 * index} inView className="h-full">
            <a
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full items-start gap-4 rounded-xl border border-border/60 bg-card p-4 shadow-sm dark:border-border/40 dark:bg-zinc-900/90 transition-all duration-200 hover:-translate-y-0.5 hover:border-border hover:shadow-md dark:hover:bg-zinc-800/90"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border/50 bg-muted/50 [&_svg]:h-[18px] [&_svg]:w-[18px]">
                {"customIcon" in tool ? (
                  <tool.customIcon className="text-muted-foreground group-hover:text-primary transition-colors" />
                ) : (
                  <FontAwesomeIcon icon={tool.icon} className="text-muted-foreground group-hover:text-primary transition-colors" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>
              </div>
              <ArrowUpRight className="size-4 shrink-0 mt-0.5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          </BlurFade>
        ))}
      </div>
    </div>
  );

  return (
    <main className="w-full py-12">
      <BreadcrumbJsonLd items={[{ name: "Tools", href: "/tools" }]} />
      <Suspense fallback={<GadgetSkeleton />}>
        <BlurFade>
          <div className="max-w-3xl mx-auto mb-12 text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Tools &amp; Setup</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The hardware and software I use daily — plus a hand-picked list of free tools,
              resources and APIs that anyone building a portfolio, website or small app can use.
            </p>
          </div>
        </BlurFade>

        <GadgetsFilter
          hardware={hardwareContent}
          software={softwareContent}
        />
      </Suspense>

        {/* Free tools & APIs — curated by Ray */}
        <section className="mt-20">
          <BlurFade delay={0.1}>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Sparkles className="size-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Free Tools &amp; APIs</h2>
                <p className="text-sm text-muted-foreground">Free resources I recommend for portfolios, websites, teaching and small apps.</p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {freeTools.map((tool, index) => (
              <BlurFade key={tool.name} delay={0.04 * index} inView className="h-full">
                <a
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-xl border border-border/60 bg-card p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-border hover:shadow-md"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-medium text-sm group-hover:text-primary transition-colors">{tool.name}</h3>
                    <span className="shrink-0 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">{tool.tag}</span>
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{tool.description}</p>
                  <p className="mt-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/70">{tool.category}</p>
                </a>
              </BlurFade>
            ))}
          </div>
        </section>
      </main>
  );
}
