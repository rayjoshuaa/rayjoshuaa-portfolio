import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { BlogExplorer, type BlogPostSummary } from "@/components/blog-explorer";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Blog",
  description:
    "Articles on teaching with AI, robotics in the classroom, building school software, and practical web development — by Ray Joshua, ICT & Robotics Teacher and developer in Bangkok.",
  metadataBase: new URL(DATA.url),
  alternates: {
    canonical: `${DATA.url}/blog`,
  },
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const rawPosts = (await getBlogPosts()).sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  const posts: BlogPostSummary[] = rawPosts.map((post) => ({
    slug: post.slug,
    title: post.metadata.title,
    summary: post.metadata.summary,
    publishedAt: post.metadata.publishedAt,
    readingTime: post.metadata.readingTime,
    tags: post.metadata.tags ?? [],
  }));

  return (
    <div
      className="relative min-h-screen bg-background"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23595959' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4h-6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "30px 30px",
      }}
    >
      <BreadcrumbJsonLd items={[{ name: "Blog", href: "/blog" }]} />
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>
        <h1 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">Blog</h1>
        <p className="mb-10 max-w-xl text-base leading-relaxed text-muted-foreground">
          Notes on teaching with AI, robotics, building school software, and the web —
          from my classroom and client work in Bangkok.
        </p>
      </BlurFade>

      <BlogExplorer posts={posts} />

    </div>
  );
}
