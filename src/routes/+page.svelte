<script lang="ts">
  import type { BlogPostMeta } from "$lib/utils/BlogPostMeta";

  export let data: { post: BlogPostMeta };
</script>

<article>
  <div>
    <h1 class="text-2xl">Welcome</h1>
    <span>
      Feel free to get in <a
        class="text-sky-500 hover:underline"
        href="mailto:christian@hennings.digital">touch</a
      >
      or read my
      <a class="text-sky-500 hover:underline" href="/blog">blog</a>.</span
    >
  </div>

  <div class="mt-5">
    <h2 class="font-bold underline">Latest Blogpost</h2>
    <div class="flex">
      <div class="mr-5">{data.post.date}</div>
      <div class="text-sky-500 hover:underline">
        <a href={data.post.path}> {data.post.title}</a>
      </div>
    </div>
  </div>

  <div class="mt-5">
    <div>
      <h2 class="font-bold underline">MVS: Most Valuable Software</h2>
    </div>
    <div>
      <span
        >To the start of this website, the most used piece of software is the
        gnome extension <a
          class="text-sky-500 hover:underline"
          href="https://extensions.gnome.org/extension/1336/run-or-raise/"
          >run-and-raise</a
        >. The extension allows to run-or-raise instances of programms with
        configurable keybord shortcuts. My top five most used programms are
        mapped to easy reachable Alt combinations. This extension removed the
        need for a dropdown-terminal and it feels supersnappy...
      </span>
    </div>
  </div>
</article>
