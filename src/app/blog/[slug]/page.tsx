import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBlogPost, getAllSlugs, BLOG_POSTS } from "@/lib/blog-data";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Boncur Batu Koçluk`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      locale: "tr_TR",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // Find related posts (same category, exclude current)
  const related = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.slug !== post.slug
  ).slice(0, 2);

  // Convert markdown-like content to paragraphs and headings
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="text-xl font-bold text-[var(--text)] mt-10 mb-4"
          >
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("**") && block.endsWith("**")) {
        return (
          <p key={i} className="font-semibold text-[var(--text)] mt-4 mb-2">
            {block.replace(/\*\*/g, "")}
          </p>
        );
      }
      // Handle paragraphs with bold text
      const parts = block.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={i} className="text-[var(--text-muted)] leading-relaxed mb-4">
          {parts.map((part, j) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={j} className="text-[var(--text)] font-semibold">
                  {part.replace(/\*\*/g, "")}
                </strong>
              );
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors duration-200 mb-10"
          >
            <ArrowLeft size={16} />
            Tüm Yazılar
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 text-[10px] font-medium tracking-wider uppercase rounded-full border border-[var(--border-hover)] text-[var(--accent)]">
                {post.category}
              </span>
              <span className="text-xs text-[var(--text-dim)]">
                {post.readTime} okuma
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text)] leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-[var(--text-muted)]">{post.description}</p>
            <div className="mt-4 text-xs text-[var(--text-dim)]">
              {new Date(post.date).toLocaleDateString("tr-TR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[var(--border)] mb-10" />

          {/* Content */}
          <article className="text-base leading-relaxed">
            {renderContent(post.content)}
          </article>

          {/* CTA */}
          <div className="mt-16 p-8 card-gradient text-center">
            <h3
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              DÖNÜŞÜMÜNE{" "}
              <span className="text-[var(--accent)]">BAŞLA</span>
            </h3>
            <p className="text-sm text-[var(--text-muted)] mb-6">
              Kişiye özel antrenman ve beslenme programı ile hedeflerine ulaş.
            </p>
            <Link
              href="/#paketler"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[var(--accent)] text-white font-semibold text-sm tracking-wide uppercase hover:bg-[var(--accent-dark)] transition-colors duration-200"
            >
              Paketleri İncele
            </Link>
          </div>

          {/* Related Posts */}
          {related.length > 0 && (
            <div className="mt-16">
              <h3 className="text-lg font-bold text-[var(--text)] mb-6">
                Benzer Yazılar
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="card-gradient p-6 group"
                  >
                    <span className="text-[10px] font-medium tracking-wider uppercase text-[var(--accent)]">
                      {r.category}
                    </span>
                    <h4 className="mt-2 font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-200 leading-snug">
                      {r.title}
                    </h4>
                    <span className="mt-3 block text-xs text-[var(--text-dim)]">
                      {r.readTime} okuma
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
