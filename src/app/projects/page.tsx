import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ProjectCard } from "@/components/project-card";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects, school systems and UI/UX prototypes by Ray Joshua — ICT & Robotics Teacher and developer in Bangkok.",
  alternates: {
    canonical: `${DATA.url}/projects`,
  },
  openGraph: {
    title: "Projects | Ray Joshua Balingkit Portfolio",
    description: "Projects, school systems and UI/UX prototypes by Ray Joshua.",
    url: `${DATA.url}/projects`,
    images: [{ url: `${DATA.url}${DATA.avatarUrl}`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Ray Joshua Balingkit Portfolio",
    description: "Projects, school systems and UI/UX prototypes by Ray Joshua.",
    images: [`${DATA.url}${DATA.avatarUrl}`],
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
  return (
    <section>
      <BreadcrumbJsonLd items={[{ name: "Projects", href: "/projects" }]} />
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>
        <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl">Projects</h1>
      </BlurFade>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {DATA.projects.map((project, id) => (
          <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 2 + id * 0.05} className="h-full">
            <div className="relative h-full overflow-hidden rounded-xl">
              <BorderBeam
                duration={4}
                size={300}
                reverse
                className="from-transparent via-foreground/40 to-transparent"
              />
              <ProjectCard {...project} headingLevel="h2" />
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
