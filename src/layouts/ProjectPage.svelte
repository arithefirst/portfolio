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

<main class="custom-height w1-full mt-[84px] grid grid-cols-1 gap-3 p-3 md:grid-cols-2">
  <Carousel {images} className="size-full" />
  <div class="rounded-md bg-base-200 p-3">
    <h1 class="text-3xl font-bold text-base-content">{title}</h1>
    <h3 class="mb-4 text-lg text-base-content">{desc}</h3>

    <h2 class="mb-1 text-xl font-bold">Technologies</h2>
    <ProjectBadge {badges} />

    <h2 class="mb-1 mt-4 text-xl font-bold">Links</h2>
    <div class="flex flex-col gap-1 md:flex-row">
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
