import type { Metadata } from "next";
import { InteriorPage, PageCta } from "../../components/InteriorPage";
import { urlFor } from "../../sanity/lib/image";
import { formatPostDate, getPosts } from "../../sanity/lib/posts";

export const metadata: Metadata = {
  title: "Blog | Bakersfield Doc Prep Co.",
  description:
    "Practical articles about California legal document preparation, court forms, and what to expect when working with a Legal Document Assistant.",
};

export default async function BlogIndexPage() {
  const posts = await getPosts();

  return (
    <InteriorPage
      eyebrow="Blog"
      title="Plain-language notes on legal paperwork."
      intro="Articles about California forms, filing procedures, and how document preparation works. General information only, never individual legal advice."
    >
      <section className="blog-section">
        <div className="shell">
          {posts.length === 0 ? (
            <div className="blog-empty">
              <p className="eyebrow">Coming soon</p>
              <h2>New articles are on the way.</h2>
              <p>Check back shortly, or call or text with any questions in the meantime.</p>
            </div>
          ) : (
            <div className="blog-grid">
              {posts.map((post) => (
                <a href={`/blog/${post.slug}`} className="blog-card" key={post._id}>
                  {post.coverImage ? (
                    <img
                      src={urlFor(post.coverImage).width(900).height(560).url()}
                      alt={post.coverImage.alt ?? ""}
                      loading="lazy"
                    />
                  ) : (
                    <div className="blog-card-placeholder" aria-hidden="true" />
                  )}
                  <div className="blog-card-body">
                    <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
                    <h2>{post.title}</h2>
                    {post.excerpt && <p>{post.excerpt}</p>}
                    <b>Read article ↗</b>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
      <PageCta copy="Once you have identified the documents you want prepared, call or text to discuss the next step." />
    </InteriorPage>
  );
}
