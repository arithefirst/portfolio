<script lang="ts">
  import Hero from '$lib/Hero.svelte';
  import Techstack from '$lib/Techstack.svelte';
  import Projects from '$lib/Projects.svelte';

  // Inject vercel speed insights
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
  injectSpeedInsights();
</script>

<svelte:head>
  <title>arithefirst</title>
  <meta name="description" content="The portfolio website for April Hall (arithefirst)" />
</svelte:head>

<Hero />
<Techstack />
<Projects />

<div class="h-8"></div>

<style>
  :root {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
</style>
