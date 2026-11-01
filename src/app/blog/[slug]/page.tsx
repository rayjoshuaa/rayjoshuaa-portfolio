import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { BlogInteractions } from "@/components/blog-interactions";
import { BlogArticle } from "@/components/blog-article";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}${DATA.avatarUrl}`;

  return {
    title,
    description,
    alternates: {
      canonical: `${DATA.url}/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@ry_devs",
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getBlogPosts();
  const morePosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 4);
  const tags: string[] = (post.metadata as { tags?: string[] }).tags ?? [];

  return (
    <section id="blog">
      <BreadcrumbJsonLd items={[{ name: "Blog", href: "/blog" }, { name: post.metadata.title, href: `/blog/${post.slug}` }]} />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/api/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      <div className="lg:grid lg:grid-cols-[minmax(0,820px)_320px] lg:items-start lg:justify-center lg:gap-14">
        <div>
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to blog
          </Link>
          <h1 className="title text-3xl font-bold tracking-tight sm:text-4xl">
            {post.metadata.title}
          </h1>
          <div className="mt-2 mb-8 flex items-center justify-between text-sm">
            <Suspense fallback={<p className="h-5" />}>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {formatDate(post.metadata.publishedAt)} &middot; {post.metadata.readingTime}
              </p>
            </Suspense>
          </div>
          {post.metadata.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.metadata.image}
              alt={post.metadata.title}
              className="mb-10 aspect-[3/2] w-full rounded-xl object-cover"
            />
          )}
          <BlogArticle html={post.source} />
          <BlogInteractions slug={params.slug} />
        </div>
        <aside className="mt-14 space-y-6 lg:sticky lg:top-24 lg:mt-2">
          <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={DATA.avatarUrl}
                alt={DATA.name}
                className="size-14 shrink-0 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold leading-tight">{DATA.name}</p>
                <p className="mt-0.5 text-sm leading-snug text-muted-foreground">
                  ICT &amp; Robotics Teacher · Bangkok
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              I teach ICT and robotics, and build tools for classrooms. Every
              article here starts as one of my LinkedIn posts — expanded, with
              its source cited.
            </p>
            <Link
              href="/services"
              className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Work with me
            </Link>
          </div>
          <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-wide">
              Share this article
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${DATA.url}/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors hover:bg-muted"
              >
                LinkedIn
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${DATA.url}/blog/${post.slug}`)}&text=${encodeURIComponent(post.metadata.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors hover:bg-muted"
              >
                X
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${DATA.url}/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors hover:bg-muted"
              >
                Facebook
              </a>
            </div>
          </div>
          {morePosts.length > 0 && (
            <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide">
                More from the blog
              </h2>
              <ul className="mt-4 space-y-4">
                {morePosts.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="group block">
                      <p className="text-sm font-medium leading-snug group-hover:underline">
                        {p.metadata.title}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {formatDate(p.metadata.publishedAt)} &middot;{" "}
                        {p.metadata.readingTime}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/blog"
                className="mt-5 inline-block text-sm font-medium hover:underline"
              >
                View all articles →
              </Link>
            </div>
          )}
          {tags.length > 0 && (
            <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide">
                Topics in this article
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href="/blog"
                    className="rounded-full border px-3 py-1 text-xs font-medium capitalize transition-colors hover:bg-muted"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}
          <div className="rounded-xl bg-neutral-900 p-6 text-white shadow-sm dark:bg-neutral-100 dark:text-neutral-900">
            <h2 className="text-sm font-semibold uppercase tracking-wide">
              Need a website?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-300 dark:text-neutral-600">
              I build CMS websites, manage social media, and develop custom web
              apps for schools and small businesses — fixed quote after a free
              consultation.
            </p>
            <Link
              href="/services"
              className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-700"
            >
              See my services
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
