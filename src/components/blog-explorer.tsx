"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { ArrowUpRight, BookOpen, Clock, Wrench, X } from "lucide-react";

export interface BlogPostSummary {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  readingTime?: string;
  tags: string[];
}

const BLUR_FADE_DELAY = 0.04;

const FREE_TOOLS = [
  { name: "Cloudflare Pages", note: "Free hosting — this site runs on it" },
  { name: "Web3Forms", note: "Free contact forms, no backend" },
  { name: "GitHub API", note: "Pull live repos into a portfolio" },
  { name: "Pexels", note: "Free photos for posts & sites" },
];

function Explorer({ posts }: { posts: BlogPostSummary[] }) {
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic");

  const tagCounts = new Map<string, number>();
  posts.forEach((post) =>
    post.tags.forEach((tag) => tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1))
  );
  const topics = Array.from(tagCounts.entries()).sort((a, b) => b[1] - a[1]);
  const popular = posts.slice(0, 4);
  const filtered = topic ? posts.filter((p) => p.tags.includes(topic)) : posts;

  const PAGE_SIZE = 10;
  const [page, setPage] = useState(1);
  const [showAllTopics, setShowAllTopics] = useState(false);
  const listTopRef = useRef<HTMLElement>(null);
  useEffect(() => {
    setPage(1);
  }, [topic]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount);
  const paged = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);
  const goToPage = (n: number) => {
    setPage(Math.min(Math.max(1, n), pageCount));
    listTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
    <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
      {/* ─── Post list ─── */}
      <section ref={listTopRef} className="flex h-full scroll-mt-24 flex-col">
        {topic && (
          <div className="mb-6 flex flex-wrap items-center gap-3 rounded-xl border border-border/60 bg-card/50 px-4 py-3 text-sm">
            <span>
              Showing {filtered.length} post{filtered.length === 1 ? "" : "s"} about{" "}
              <strong className="font-semibold">{topic}</strong>
            </span>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-xs font-medium transition-colors hover:bg-accent"
            >
              <X className="size-3" />
              Clear filter
            </Link>
          </div>
        )}
        {filtered.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No posts under this topic yet.{" "}
            <Link href="/blog" className="font-medium text-foreground underline underline-offset-4">
              See all posts
            </Link>
          </p>
        ) : (
          paged.map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Link
                className="group -mx-3 mb-4 block rounded-xl px-3 py-3 transition-colors hover:bg-card/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                href={`/blog/${post.slug}`}
              >
                <p className="text-lg font-medium leading-snug tracking-tight transition-colors group-hover:text-primary">
                  {post.title}
                </p>
                <p className="mt-1 line-clamp-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {post.summary}
                </p>
                <p className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span>{post.publishedAt}</span>
                  <span aria-hidden>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-3" />
                    {post.readingTime}
                  </span>
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/60 bg-card/50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </p>
              </Link>
            </BlurFade>
          ))
        )}
        {pageCount > 1 && (
          <nav aria-label="Blog pages" className="mt-auto flex flex-wrap items-center gap-2 pt-8">
            <button
              onClick={() => goToPage(safePage - 1)}
              disabled={safePage === 1}
              className="inline-flex h-9 items-center rounded-full border border-border px-4 text-xs font-medium transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => goToPage(n)}
                aria-current={n === safePage ? "page" : undefined}
                className={
                  n === safePage
                    ? "inline-flex size-9 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background"
                    : "inline-flex size-9 items-center justify-center rounded-full border border-border text-xs font-medium transition-colors hover:bg-accent"
                }
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => goToPage(safePage + 1)}
              disabled={safePage === pageCount}
              className="inline-flex h-9 items-center rounded-full border border-border px-4 text-xs font-medium transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
            <span className="ml-1 text-xs text-muted-foreground">
              Page {safePage} of {pageCount} · {filtered.length} posts
            </span>
          </nav>
        )}
      </section>

      {/* ─── Sidebar ─── */}
      <aside className="space-y-5 self-start lg:sticky lg:top-24">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={DATA.avatarUrl}
                alt={DATA.name}
                className="size-12 rounded-full object-cover object-[50%_30%]"
              />
              <div>
                <p className="text-sm font-semibold">{DATA.name}</p>
                <p className="text-xs text-muted-foreground">
                  ICT Teacher · Web Developer · SMM
                </p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I teach ICT &amp; Robotics at SIAMIS and build websites, social media and
              software for clients. This blog is where I share what works.
            </p>
            <div className="mt-4 flex gap-2">
              <Link
                href="/services"
                className="inline-flex h-9 items-center rounded-full bg-foreground px-4 text-xs font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                Work with me
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-9 items-center rounded-full border border-border px-4 text-xs font-medium transition-colors hover:bg-accent"
              >
                See projects
              </Link>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
            <h2 className="flex items-center gap-2 text-sm font-semibold">
              <BookOpen className="size-4 text-muted-foreground" />
              Popular reads
            </h2>
            <ul className="mt-2 space-y-1">
              {popular.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group -mx-2 flex items-start justify-between gap-2 rounded-lg px-2 py-2 transition-all duration-200 hover:bg-accent/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  >
                    <span className="text-sm leading-snug">
                      <span className="font-medium transition-colors group-hover:text-primary">
                        {post.title}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">
                        {post.publishedAt} · {post.readingTime}
                      </span>
                    </span>
                    <ArrowUpRight className="mt-0.5 size-4 shrink-0 -translate-x-1 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:text-primary group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
            <h2 className="text-sm font-semibold">Topics</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Tap a topic to filter the posts.
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {(showAllTopics ? topics : topics.slice(0, 18)).map(([tag, count]) => {
                const active = topic === tag;
                return (
                  <Link
                    key={tag}
                    href={active ? "/blog" : `/blog?topic=${encodeURIComponent(tag)}`}
                    aria-pressed={active}
                    className={
                      active
                        ? "inline-flex min-h-8 items-center rounded-full border border-foreground bg-foreground px-3 py-1.5 text-[11px] font-medium text-background transition-colors"
                        : "inline-flex min-h-8 items-center rounded-full border border-border/60 bg-card/60 px-3 py-1.5 text-[11px] font-medium text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-foreground/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                    }
                  >
                    {tag} · {count}
                  </Link>
                );
              })}
            </div>
            {topics.length > 18 && (
              <button
                onClick={() => setShowAllTopics((v) => !v)}
                className="mt-3 text-xs font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                {showAllTopics ? "Show fewer topics" : `Show all ${topics.length} topics`}
              </button>
            )}
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="rounded-2xl bg-foreground p-5 text-background">
            <h2 className="text-sm font-semibold">Need a website or social media help?</h2>
            <p className="mt-1.5 text-sm leading-relaxed opacity-80">
              WordPress websites, social media management and custom web apps — fixed
              quote after a free consultation.
            </p>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${DATA.contact.email}&su=${encodeURIComponent("Project inquiry — from your blog")}`} target="_blank" rel="noopener noreferrer"
              className="mt-4 inline-flex h-9 items-center gap-1.5 rounded-full bg-background px-4 text-xs font-semibold text-foreground transition-transform hover:-translate-y-0.5"
            >
              Get a free quote
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </BlurFade>

      </aside>
    </div>
      {/* ─── Free tools strip (full width, under the columns) ─── */}
      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <div className="mt-14 rounded-2xl border border-border/60 bg-card/40 p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="flex items-center gap-2 text-sm font-semibold">
              <Wrench className="size-4 text-muted-foreground" />
              Free tools I recommend
            </h2>
            <Link
              href="/tools"
              className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              See the full list
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FREE_TOOLS.map((tool) => (
              <div key={tool.name} className="rounded-xl border border-border/50 bg-background/60 p-4">
                <p className="text-sm font-medium">{tool.name}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{tool.note}</p>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>
    </>
  );
}

export function BlogExplorer({ posts }: { posts: BlogPostSummary[] }) {
  return (
    <Suspense fallback={null}>
      <Explorer posts={posts} />
    </Suspense>
  );
}
