<script>
  export let title;
  export let date;
  export let subtitle;
  export let tldr;
</script>

<div class="flex justify-center">
  <div
    class="max-w-3xl rounded-xl bg-primary md:p-10 p-5 align-middle text-wrap justify-center"
  >
    <div class="mb-4">
      <h1 class="post-header text-4xl">
        {title}
      </h1>
      <div class="mt-2 text-2xl font-light">
        <h2>{subtitle}</h2>
      </div>
      <h2>Published: {date}</h2>
    </div>

    {#if tldr}
      <div class="ml w-fit rounded-t-md bg-secondary px-5 pt-1 text-xl">
        <span class="underline"> tldr: </span>
      </div>
      <div
        class="mb-5 rounded-tr-md rounded-br-md rounded-bl-md bg-secondary p-5"
      >
        <span class="tldr text-xl">
          {tldr}
        </span>
      </div>
    {/if}
    <article class="blogpost text-justify align-middle text-wrap">
      <slot />
    </article>
  </div>
</div>

<style>
  .tldr {
    font-family: Helvetica, serif;
    font-weight: 400;
    font-style: normal;
  }
  .post-header {
    font-family: JetBrains Mono;
    font-weight: 800;
    font-style: normal;
  }
  .blogpost :global {
    font-family: Helvetica;
    font-weight: 400;
    font-style: normal;

    [id^="mermaid"] {
      margin: auto;
      padding: 1rem;
    }

    h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      margin-top: 2rem;
      font-weight: bold;
      font-family: JetBrains Mono;
    }

    h2 {
      font-family: JetBrains Mono;
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
      margin-top: 1.5rem;
      font-weight: bold;
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
      font-family: JetBrains Mono;
    }

    /* Paragraphs */
    p {
      font-size: 1rem;
      line-height: 1.5;
      margin-bottom: 1rem;
    }

    /* Lists */
    ol {
      list-style: none;
      counter-reset: num;
    }

    ol li {
      counter-increment: num;
    }

    ol li::before {
      content: counter(num) ". ";
    }

    ul,
    ol {
      margin-bottom: 1rem;
      padding-left: 2rem;
    }

    li {
      margin-bottom: 0.5rem;
    }

    li:before {
      margin-right: 1rem;
    }

    /* Code */
    code {
      font-family: monospace;
      background-color: #f5f5f5;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
    }

    pre {
      background-color: #f5f5f5;
      padding: 1rem;
      border-radius: 4px;
      overflow-x: auto;
    }

    pre code {
      padding: 0;
      background-color: transparent;
    }

    /* Links */
    a {
      color: var(--color-sky-600);
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    /* Blockquotes */
    blockquote {
      border-left: 4px solid #ddd;
      padding-left: 1rem;
      margin-bottom: 1rem;
    }

    /* Horizontal Rules */
    hr {
      border: 0;
      border-top: 1px solid #ddd;
      margin: 2rem 0;
    }
  }
</style>
