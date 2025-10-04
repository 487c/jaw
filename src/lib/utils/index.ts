import type { BlogPostMeta } from "./BlogPostMeta";

export async function fetchBlogPosts() {
  const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts: BlogPostMeta[] = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata }: any = await resolver();
      metadata.path = path.slice(11, -3);
      return metadata;
    })
  );

  return allPosts;
}
