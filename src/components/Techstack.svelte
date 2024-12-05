<script lang="ts">
  // See codepen.io/April-Hall/pen/ZEgEGEg
  // for my original concept for this
  import TechImg from './TechImg.svelte';
  import { items } from './techItems';
  let mode: number;
  function setOffset(m: number) {
    mode = m;
  }
</script>

<h1 class="text-3xl font-bold text-center mt-5">Technologies</h1>
<hr class="w-1/2 mx-auto my-3 border-base-content" />

<div id="techstack">
  <div class="w-fit mx-auto my-2">
    <button
      class="btn no-animation md:btn-sm btn-xs btn-primary mx-1"
      onmouseenter={() => {
        setOffset(1);
      }}
      onmouseleave={() => {
        setOffset(0);
      }}>Tools</button>
    <button
      class="btn no-animation md:btn-sm btn-xs btn-primary mx-1"
      onmouseenter={() => {
        setOffset(2);
      }}
      onmouseleave={() => {
        setOffset(0);
      }}>Frameworks & Libs</button>
    <button
      class="btn no-animation md:btn-sm btn-xs btn-primary mx-1"
      onmouseenter={() => {
        setOffset(3);
      }}
      onmouseleave={() => {
        setOffset(0);
      }}>Languages</button>
    <button
      class="btn no-animation md:btn-sm btn-xs btn-primary mx-1"
      onmouseenter={() => {
        setOffset(4);
      }}
      onmouseleave={() => {
        setOffset(0);
      }}>Other</button>
  </div>

  <div class="w-11/12 md:w-1/2 h-fit mx-auto relative img-container flex flex-wrap justify-center">
    {#each items as item}
      <TechImg type={item.type} name={item.name} description={item.description} caps={item.caps} />
    {/each}
  </div>
</div>

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
