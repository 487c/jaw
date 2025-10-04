import type { BlogPostMeta } from "$lib/utils/BlogPostMeta";

export const load = async ({ fetch }): Promise<{ post: BlogPostMeta }> => {
  const response: Response = await fetch(`/api/latest_post`);

  return {
    post: await response.json()
  };
};
