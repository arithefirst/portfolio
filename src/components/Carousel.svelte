<script lang="ts">
  import type { image } from './types';
  interface Props {
    images: image[];
    className: string;
  }

  const { images, className }: Props = $props();
  let counter: number = $state(0);
  $effect(() => {
    // Update the image in the gallery on counter change
    window.location.hash = `slide${counter}`;
  });
</script>

<div class={`relative ${className}`}>
  <div class="carousel">
    {#each images as image, i}
      <div id={`slide${i}`} class="carousel-item relative size-full">
        <img src={image.src} alt={image.alt} class="size-full object-cover" />
      </div>
    {/each}
  </div>
  <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    <button
      class={`btn btn-sm ${counter <= 0 ? 'opacity-0 disabled:' : ''}`}
      onclick={() => {
        if (counter >= 0) counter -= 1;
      }}>❮</button
    >
    <button
      class={`btn btn-sm ${counter === images.length - 1 ? 'opacity-0 disabled:' : ''}`}
      onclick={() => {
        if (counter < images.length - 1) counter += 1;
      }}>❯</button
    >
  </div>
</div>
