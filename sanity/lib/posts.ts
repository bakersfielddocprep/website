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

export async function getPosts(): Promise<PostSummary[]> {
  if (!isSanityConfigured) return [];
  return client.fetch<PostSummary[]>(postsQuery, {}, fetchOptions);
}

export async function getPostSlugs(): Promise<string[]> {
  if (!isSanityConfigured) return [];
  return client.fetch<string[]>(postSlugsQuery, {}, fetchOptions);
}

export async function getPost(slug: string): Promise<Post | null> {
  if (!isSanityConfigured) return null;
  return client.fetch<Post | null>(postBySlugQuery, { slug }, fetchOptions);
}

export function formatPostDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Los_Angeles",
  });
}
