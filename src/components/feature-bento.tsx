import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

const FEATURES = [
  {
    kicker: "Experience",
    title: "6+ years in IT",
    body: "From freelance frontend work and CMS websites to business systems analysis for enterprise systems — plus 3+ years teaching in the academe.",
    className: "sm:col-span-2",
    stat: "6+ yrs",
  },
  {
    kicker: "Teaching",
    title: "K to College",
    body: "Scratch and Python for young learners, LEGO and Arduino robotics, and college-level programming and networking.",
    className: "",
    stat: "ICT",
  },
  {
    kicker: "Remote services",
    title: "VA for web & social",
    body: "CMS websites (WordPress, Elementor, Shopify) and social media management for schools and businesses.",
    className: "",
    stat: "VA",
  },
  {
    kicker: "Enterprise",
    title: "10+ systems delivered",
    body: "Process flows, BRDs, QA and UAT for HRIS, DMS, farm management systems and ERP at Lapanday Foods Corporation.",
    className: "sm:col-span-2",
    stat: "10+",
  },
] as const;

export function FeatureBento() {
  return (
    <section id="features" aria-labelledby="features-title">
      <div className="flex flex-col gap-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <div className="space-y-2">
            <span className="inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              At a glance
            </span>
            <h2
              id="features-title"
              className="font-display text-4xl leading-none tracking-[-0.02em] sm:text-5xl"
            >
              Educator. Developer. Systems thinker.
            </h2>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {FEATURES.map((f, i) => (
            <BlurFade
              key={f.title}
              delay={BLUR_FADE_DELAY * (8 + i)}
              className={f.className}
            >
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:bg-card/80 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {f.kicker}
                  </span>
                  <span className="rounded-full border border-border/70 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {f.stat}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl leading-tight tracking-[-0.01em]">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </article>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
