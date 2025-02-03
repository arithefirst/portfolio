<script lang="ts">
  // See codepen.io/April-Hall/pen/ZEgEGEg
  // for my original concept for this
  import TechImg from './TechImg.svelte';
  import { items } from '../scripts/techItems';
  let mode: number;
  function setOffset(m: number) {
    mode = m;
  }
</script>

<section id="techstack">
  <h1 class="mt-5 text-center text-3xl font-bold">Technologies</h1>
  <hr class="mx-auto my-3 w-1/2 border-base-content" />

  <div>
    <div class="mx-auto my-2 w-fit">
      <button
        class="btn btn-primary no-animation btn-xs mx-1 md:btn-sm"
        onmouseenter={() => {
          setOffset(1);
        }}
        onmouseleave={() => {
          setOffset(0);
        }}>Tools</button
      >
      <button
        class="btn btn-primary no-animation btn-xs mx-1 md:btn-sm"
        onmouseenter={() => {
          setOffset(2);
        }}
        onmouseleave={() => {
          setOffset(0);
        }}>Frameworks & Libs</button
      >
      <button
        class="btn btn-primary no-animation btn-xs mx-1 md:btn-sm"
        onmouseenter={() => {
          setOffset(3);
        }}
        onmouseleave={() => {
          setOffset(0);
        }}>Languages</button
      >
      <button
        class="btn btn-primary no-animation btn-xs mx-1 md:btn-sm"
        onmouseenter={() => {
          setOffset(4);
        }}
        onmouseleave={() => {
          setOffset(0);
        }}>Other</button
      >
    </div>

    <div class="img-container relative mx-auto flex h-fit w-11/12 flex-wrap justify-center md:w-1/2">
      {#each items as item}
        <TechImg type={item.type} name={item.name} description={item.description} caps={item.caps} href={item.href} />
      {/each}
    </div>
  </div>
</section>

{#if mode === 1}
  <style>
    .type-tool {
      border-color: oklch(var(--p)) !important;
      transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
  </style>
{:else if mode === 2}
  <style>
    .type-framework {
      border-color: oklch(var(--p)) !important;
      transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
  </style>
{:else if mode === 3}
  <style>
    .type-lang {
      border-color: oklch(var(--p)) !important;
      transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
  </style>
{:else if mode === 4}
  <style>
    .type-other {
      border-color: oklch(var(--p)) !important;
      transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
  </style>
{/if}
