import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import relativeImages from "mdsvex-relative-images";
import rehypeMermaid from 'rehype-mermaid'
import { join } from "path";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess(), mdsvex({
    extensions: ['.md'], layout: {
      blog: join(__dirname, './src/routes/blog/post.svelte')
    },
    highlight: {
      highlighter: (code, lang) => {
        if (lang === 'mermaid') {
          return {
            type: 'element',
            tagName: 'code',
            properties: { className: 'language-mermaid' },
            children: [{ type: 'text', value: code }],
          };
        }
        return code;
      },
    },
    rehypePlugins: [rehypeSlug, [rehypeMermaid, { strategy: 'img-svg', dark: true }]],
    remarkPlugins: [
      [relativeImages],
      [remarkToc, { tight: true, ordered: true }]]
  })],
  kit: { adapter: adapter() },
  extensions: ['.svelte', '.svx', '.md']
};

export default config;
