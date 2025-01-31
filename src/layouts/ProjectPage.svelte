<script lang="ts">
  import Carousel from '../components/Carousel.svelte';
  import ProjectBadge from '../components/ProjectBadge.svelte';
  import type { image, badge } from '../components/types.ts';

  interface Props {
    title: string;
    desc: string;
    images: image[];
    badges: badge[];
  }

  const { title, desc, images, badges }: Props = $props();
</script>

<main class="custom-height mt-[84px] grid w1-full grid-cols-2 pb-3 pt-1 px-3 gap-3">
  <Carousel {images} className="size-full" />
  <div class="rounded-md bg-base-200 p-3">
    <h1 class="text-base-content text-3xl font-bold">{title}</h1>
    <h3 class="text-base-content text-lg mb-4">{desc}</h3>

    <h2 class="text-xl font-bold">Technologies</h2>
    <ProjectBadge {badges} />
  </div>
</main>

<style>
  .custom-height {
    height: calc(100vh - 84px);
  }
</style>
