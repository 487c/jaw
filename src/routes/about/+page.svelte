<script lang="ts">
  import profilePic from "$lib/assets/profilePic.jpg";
  // @ts-ignore
  import timeline from "./timeline.md";
  import { Badge } from "$lib/components/ui/badge/index.js";
</script>

<div class="flex justify-center">
  <article class="max-w-3xl text-justify align-middle text-wrap">
    <h1 class="mb-5 text-3xl">Hello there,</h1>
    <img
      class="float-start mr-5 aspect-auto max-w-1/3 rounded-lg md:max-w-3xs"
      src={profilePic}
      alt=""
    />
    <p>
      my name is Christian from Bonn, Germany. I like tinkering with Software
      and trying new things (especially breaking stuff and not in a good way).
      Before I discovered my passion for IT, I studied Business Administration
      (for too long). The Covid-Pandemic opened the time for exploring areas
      like IoT and Smart Home as leaving home was restricted anyway. From there
      on out I discovered the vast universe in my computer. In the following you
      can learn some more about the stuff I like and do. Selfhosting with
      Proxmox/Docker, IoT (NodeRed etc.), and little Hardware Projects is in my
      main focus. My journey with Business Administration ended (luckily) a
      while ago and today I work as Fullstack Softwareengineer in a mid tier
      business for Software Services. Mainly I work with the <a
        class="text-sky-500"
        href="https://github.com/mozilla/rhino">Rhino Engine</a
      >, a JavaScript Engine, running in Java, creating customized software
      solutions in an DMS System. I really like the direct contact with
      customers and developing uncomplicated solutions for complicated
      processes. Also my interest for trying new things forces me to spend way
      to much time in front of the screen outside of work.
    </p>

    <p class="mt-5">
      Although my dabbling in the IT world is not as extensive, here is my
      development (careerwise) until now:

      <svelte:component this={timeline} />
    </p>

    <div class="mt-5">
      <h2>What is my forte?</h2>
      <p>
        As I am relatively new to the IT-Sector, my knowledge in programming
        languages and such is not as vast, but here are some framekworks,
        languages (I know SQL is not a programming language...) and other
        systems I know my way around or had contact with. The order from left to
        right indicates from expert level to just basic knowledge:
      </p>
      <div class="mt-2">
        <span class="underline">syntaxes</span>
        <div class="mt-2 flex-wrap">
          <Badge variant="outline">JavaScript</Badge>
          <Badge variant="outline">SQL</Badge>
          <Badge variant="outline">Python</Badge>
          <Badge variant="outline">Java</Badge>
          <Badge variant="outline">Bash</Badge>
          <Badge variant="outline">Powershell</Badge>
          <Badge variant="outline">C</Badge>
          <Badge variant="outline">Rust</Badge>
        </div>
      </div>
    </div>
    <div class="my-5">
      <span class="underline">framworks / systems / software</span>
      <div class="mt-2 flex-wrap">
        <Badge variant="outline">Vue(3)</Badge>
        <Badge variant="outline">Angular(Js)</Badge>
        <Badge variant="outline">bootstrap</Badge>
        <Badge variant="outline">Docker</Badge>
        <Badge variant="outline">Promox</Badge>
        <Badge variant="outline">Svelte</Badge>
        <Badge variant="outline">tailwindcss</Badge>
        <Badge variant="outline">Django</Badge>
      </div>
    </div>

    <p class="my-5">
      On a sidenote: I have a part-time self-employment going and on interest to
      hire me, <a
        href="mailto:christian@hennings.digital"
        class="text-sky-600 hover:underline">contact me</a
      >!
    </p>

    <h3>Self-hosting?</h3>
    <p>
      Every seasoned 'self-hoster' runs a homelab, which is 'absolutely'
      necessary to support your life (with additional sysadmin work). As such I
      started off with docker (for short duration podman) and finally arrived at
      Proxmox VE and lxc/vm technologies for hosting my services. And boy was
      that a change. Docker is "nice", but Proxmox is "great". Since then i
      cannot imagine to go back to docker. Especially the creation / restoring
      of backups, even more with the Proxmox Backup Server, is so fun to handle,
      that liked creating a backup strategy (3-2-1).
    </p>

    <!-- <h2 class="mt-5">Hobbies away from screens</h2> -->
    <!-- <p class="mt-2"></p> -->
  </article>
</div>

<style>
  h2 {
    font-size: var(--text-xl);
    font-weight: var(--font-weight-bold);
  }
</style>
