import type { PortableTextBlock } from "@portabletext/react";
import type { SanityImageSource } from "@sanity/image-url";
import { isSanityConfigured } from "../env";
import { client } from "./client";
import { postBySlugQuery, postSlugsQuery, postsQuery } from "./queries";

export type PostImage = SanityImageSource & { alt?: string };

export type PostSummary = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt?: string;
  coverImage?: PostImage;
};

export type Post = PostSummary & {
  body: PortableTextBlock[];
};

/** Pages are revalidated on this schedule and immediately by the Sanity webhook. */
const fetchOptions = { next: { revalidate: 3600, tags: ["post"] } };

/**
 * Runs a Sanity query but never throws: if Sanity is unreachable (during a build
 * or an outage) the site keeps rendering with the fallback instead of failing.
 */
async function safeFetch<T>(label: string, fallback: T, query: string, params: Record<string, unknown> = {}): Promise<T> {
  if (!isSanityConfigured) return fallback;
  try {
    return await client.fetch<T>(query, params, fetchOptions);
  } catch (error) {
    console.warn(`[sanity] ${label} failed:`, error instanceof Error ? error.message : error);
    return fallback;
  }
}

export function getPosts() {
  return safeFetch<PostSummary[]>("getPosts", [], postsQuery);
}

export function getPostSlugs() {
  return safeFetch<string[]>("getPostSlugs", [], postSlugsQuery);
}

export function getPost(slug: string) {
  return safeFetch<Post | null>("getPost", null, postBySlugQuery, { slug });
}

export function formatPostDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Los_Angeles",
  });
}
