import { defineQuery } from "next-sanity";

export const postsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current) && defined(publishedAt) && publishedAt <= now()]
  | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    coverImage
  }
`);

export const postSlugsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current) && defined(publishedAt) && publishedAt <= now()].slug.current
`);

export const postBySlugQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug && defined(publishedAt) && publishedAt <= now()][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    coverImage,
    body
  }
`);
