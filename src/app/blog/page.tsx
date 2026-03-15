import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/lib/blog-data";

export const metadata = {
  title: "Blog | Boncur Batu Koçluk",
  description:
    "Fitness, beslenme ve antrenman hakkında bilimsel temelli yazılar. Online koçluk, kas kazanımı, yağ yakma ve daha fazlası.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            BLOG
          </h1>
          <p className="text-[var(--text-muted)] mb-14 max-w-xl">
            Fitness, beslenme ve antrenman hakkında bilimsel temelli yazılar.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-gradient p-7 flex flex-col justify-between group hover:border-[var(--border-hover)] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-[10px] font-medium tracking-wider uppercase rounded-full border border-[var(--border-hover)] text-[var(--accent)]">
                      {post.category}
                    </span>
                    <span className="text-xs text-[var(--text-dim)]">
                      {post.readTime} okuma
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-200 leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>
                <div className="mt-6 text-xs text-[var(--text-dim)]">
                  {new Date(post.date).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
