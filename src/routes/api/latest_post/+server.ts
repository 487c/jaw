import type { BlogPostMeta } from '$lib/utils/BlogPostMeta';
import { fetchBlogPosts } from '$lib/utils/index';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  const allPosts: BlogPostMeta[] = await fetchBlogPosts();

  const sortedPosts: BlogPostMeta[] = allPosts.sort((a: BlogPostMeta, b: BlogPostMeta): number => {
    return new Date(b.date).valueOf() - new Date(a.date).valueOf();
  });

  return json(sortedPosts[0]);
};
