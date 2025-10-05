<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.png";

  import { ModeWatcher } from "mode-watcher";
  import { toggleMode } from "mode-watcher";

  import { Button } from "$lib/components/ui/button/index.js";
  import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
  import { navigationMenuTriggerStyle } from "$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte";
  import { env } from "$env/dynamic/private";
  import SunIcon from "@lucide/svelte/icons/sun";
  import MoonIcon from "@lucide/svelte/icons/moon";
  import Github from "@lucide/svelte/icons/github";

  import Mail from "@lucide/svelte/icons/mail";
  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <link
    href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
    rel="stylesheet"
  />
</svelte:head>
<ModeWatcher />

<div class="flex">
  <div class="basis-1/12"></div>
  <div class="basis-10/12 content-center justify-self-center">
    <div class="flex h-screen flex-col">
      <div class="z-50">
        <header class="mb-10 flex flex-grow flex-wrap justify-between">
          <a
            class="mt-5 flex content-center-safe font-bold tracking-wide underline decoration-foreground"
            href="j//aw/"
          >
            <img class="mr-1 h-5 w-5" src={favicon} alt="" />
            just another website</a
          >
          <div class="mt-5 flex rounded-md border">
            <NavigationMenu.Root>
              <NavigationMenu.List>
                <NavigationMenu.Item>
                  <NavigationMenu.Link>
                    {#snippet child()}
                      <a href="." class={navigationMenuTriggerStyle()}>Home</a>
                    {/snippet}
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <NavigationMenu.Link>
                    {#snippet child()}
                      <a href="blog" class={navigationMenuTriggerStyle()}
                        >Blog</a
                      >
                    {/snippet}
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <NavigationMenu.Link>
                    {#snippet child()}
                      <a href="about" class={navigationMenuTriggerStyle()}
                        >About</a
                      >
                    {/snippet}
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <Button onclick={toggleMode} variant="ghost" size="icon">
                    <SunIcon
                      class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 !transition-all dark:scale-0 dark:-rotate-90"
                    />
                    <MoonIcon
                      class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 !transition-all dark:scale-100 dark:rotate-0"
                    />
                    <span class="sr-only">Toggle theme</span>
                  </Button>
                </NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Root>
          </div>
        </header>
      </div>
      <main class="mb-auto md:mx-10">
        <div class="size-full">
          {@render children?.()}
        </div>
      </main>
      <div class="z-50">
        <footer
          class="sticky top-[100vh] my-5 flex w-full flex-wrap border-t-1 border-solid"
        >
          <div class="flex w-full pt-5">
            <div class="basis-1/12"></div>
            <div class="flex-wrap content-center text-xs md:w-2/5">
              <span
                >Made with
                <a
                  href="https://svelte.dev/"
                  class="text-sky-500 no-underline hover:underline"
                  target="_blank">svelte</a
                >
                and
                <a
                  href="https://shadcn-svelte.com/"
                  class="text-sky-500 no-underline hover:underline"
                  target="_blank">shadcn</a
                >
              </span>
            </div>
            <div class="w-1/5"></div>
            <div class="flex md:w-2/5 md:justify-end md:pr-10">
              <Button
                variant="outline"
                class="h-px-36"
                href="mailto:christian@hennings.digital"
              >
                <Mail />
                Contact me
              </Button>
              <Button
                variant="outline"
                size="icon"
                class="ml-3"
                href="https://github.com/487c"
                target="_blank"
              >
                <Github />
                <span class="sr-only">Goto Github</span>
              </Button>
            </div>
            <div class="basis-1/12"></div>
          </div>
        </footer>
      </div>
    </div>
  </div>
  <div class="basis-1/12"></div>
</div>
