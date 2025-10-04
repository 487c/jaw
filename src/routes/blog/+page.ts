import type { BlogPostMeta } from "$lib/utils/BlogPostMeta";

export const load = async ({ fetch }) => {
  const response: Response = await fetch(`/api/posts`);
  const posts: BlogPostMeta[] = await response.json();
  const tags: string[] = Array.from(new Set(posts.reduce((tags: string[], post: BlogPostMeta) => tags.concat(post.tags)
    , [])));


  return {
    posts,
    tags
  };
};
