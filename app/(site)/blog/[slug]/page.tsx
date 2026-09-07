import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { PageCta } from "../../../../components/InteriorPage";
import { SiteFooter } from "../../../../components/SiteFooter";
import { SiteHeader } from "../../../../components/SiteHeader";
import { urlFor } from "../../../../sanity/lib/image";
import { formatPostDate, getPost, getPostSlugs } from "../../../../sanity/lib/posts";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Bakersfield Doc Prep Co.`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      images: post.coverImage ? [urlFor(post.coverImage).width(1200).height(630).url()] : undefined,
    },
  };
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="post-figure">
          <img src={urlFor(value).width(1200).url()} alt={value.alt ?? ""} loading="lazy" />
          {value.caption && <figcaption>{value.caption}</figcaption>}
        </figure>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      const href: string = value?.href ?? "#";
      const external = /^https?:\/\//.test(href);
      return (
        <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
          {children}
        </a>
      );
    },
  },
};

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <main>
      <SiteHeader />
      <article className="post" id="content">
        <header className="post-hero">
          <div className="shell post-hero-inner">
            <a className="post-back" href="/blog">← All articles</a>
            <p className="eyebrow">
              <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
            </p>
            <h1>{post.title}</h1>
            {post.excerpt && <p className="post-excerpt">{post.excerpt}</p>}
          </div>
        </header>
        {post.coverImage && (
          <div className="shell">
            <figure className="post-cover">
              <img
                src={urlFor(post.coverImage).width(1600).height(900).url()}
                alt={post.coverImage.alt ?? ""}
              />
            </figure>
          </div>
        )}
        <div className="shell post-body">
          <PortableText value={post.body} components={components} />
          <div className="scope-notice">
            <strong>Important scope notice</strong>
            <p>
              This article is general information, not legal advice. Bakersfield Doc Prep Co. is not a
              law firm. We are not attorneys and cannot advise about legal rights, remedies, options,
              form selection, or strategy.
            </p>
          </div>
        </div>
      </article>
      <PageCta />
      <SiteFooter />
    </main>
  );
}
