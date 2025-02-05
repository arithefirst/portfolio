<script lang="ts">
  import type { image } from '../scripts/types';
  interface Props {
    images: image[];
    className: string;
  }

  const { images, className }: Props = $props();
  let counter: number = $state(0);
  let itemWidth: number = $state(0);
  let margin: number = $derived((itemWidth + 8) * counter);
</script>

<div class={`relative overflow-hidden rounded-md ${className}`}>
  <div class="absolute top-0 flex size-full gap-2 transition-all duration-300" style={`right: ${margin}px`}>
    {#each images as image}
      <div class="carousel-item relative size-full object-cover" bind:clientWidth={itemWidth}>
        <img src={image.src} alt={image.alt} class="absolute top-1/2 z-10 size-full -translate-y-1/2 object-contain" />
        <img src={image.src} alt={image.alt} class="absolute left-0 top-0 size-full object-cover blur-sm" />
        <div class="w-[200%] bg-base-100"></div>
      </div>
    {/each}
  </div>
  <div class="absolute left-5 right-5 top-1/2 z-20 flex -translate-y-1/2 transform justify-between">
    <button
      class={`btn btn-sm aspect-square ${counter <= 0 ? 'disabled cursor-default opacity-0' : ''}`}
      onclick={() => {
        if (counter > 0) counter -= 1;
      }}>❮</button
    >
    <button
      class={`btn btn-sm aspect-square ${counter === images.length - 1 ? 'disabled cursor-default opacity-0' : ''}`}
      onclick={() => {
        if (counter < images.length - 1) counter += 1;
      }}>❯</button
    >
  </div>
</div>
