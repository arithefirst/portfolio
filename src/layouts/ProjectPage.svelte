<script lang="ts">
  import Carousel from '../components/Carousel.svelte';
  import ProjectBadge from '../components/ProjectBadge.svelte';
  import type { image, badge, projectlinks } from '../scripts/types.ts';

  interface Props {
    title: string;
    desc: string;
    images: image[];
    badges: badge[];
    link: projectlinks;
  }

  const { title, desc, images, badges, link }: Props = $props();
</script>

<main class="custom-height mt-[84px] grid w1-full md:grid-cols-2 grid-cols-1 pb-3 pt-1 px-3 gap-3">
  <Carousel {images} className="size-full" />
  <div class="rounded-md bg-base-200 p-3">
    <h1 class="text-base-content text-3xl font-bold">{title}</h1>
    <h3 class="text-base-content text-lg mb-4">{desc}</h3>

    <h2 class="text-xl font-bold mb-1">Technologies</h2>
    <ProjectBadge {badges} />

    <h2 class="text-xl font-bold mt-4 mb-1">Links</h2>
    <div class="flex gap-1 md:flex-row flex-col">
      {#if link.external}
        <a class="btn btn-primary relative flex" href={link.external} target="_blank">
          <img src="/images/external.svg" alt="mingcute:external_link_line" class="h-5" />
          View Live Page
        </a>
      {/if}
      {#if link.source}
        <a class="btn btn-secondary relative flex" href={link.source} target="_blank">
          <img src="/images/braces.svg" alt="mingcute:braces_fill" class="h-5" />
          View Source Code
        </a>
      {/if}
    </div>
  </div>
</main>

<style>
  .custom-height {
    height: calc(100vh - 84px);
  }
</style>
