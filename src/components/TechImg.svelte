<script lang="ts">
  import { fade } from 'svelte/transition';
  interface Props {
    description: string;
    name: string;
    type: string;
    caps: boolean;
    href?: string | undefined;
  }

  let { description, name, type, caps, href }: Props = $props();
  let hover: boolean = $state(false);
</script>

{#snippet image()}
  <img
    onmouseenter={() => {
      hover = true;
    }}
    onmouseleave={() => {
      hover = false;
    }}
    alt={caps ? name.toUpperCase() : name.charAt(0).toUpperCase() + name.slice(1)}
    src={'/skillicons/' + name + '.svg'}
    class="border-2 rounded-[28.125%] w-16 2xl:w-[72px] inline-block m-0.5 md:m-1 {'type-' + type}" />
{/snippet}

{#if href}
  <a {href} target="_blank" rel="noreferrer noopener">
    {@render image()}
  </a>
{:else}
  {@render image()}
{/if}

<!-- Popover -->
{#if hover}
  <div class="w-fit h-fit relative opacity-0 md:opacity-100">
    <div
      in:fade={{ duration: 150, delay: 250 }}
      out:fade={{ duration: 100, delay: 0 }}
      class="absolute z-10 inline-block md:w-48 lg:w-64 2xl:w-72 text-sm text-base-content bg-base-100
            border border-base-300 rounded-lg shadow-sm">
      <div class="px-3 py-2 bg-base-200 border-b border-base-300 rounded-t-lg">
        <img
          alt={caps ? name.toUpperCase() : name.charAt(0).toUpperCase() + name.slice(1)}
          src={'/skillicons/' + name + '.svg'}
          class="h-8 w-8 mx-auto" />
        <h3 class="font-semibold text-center text-white 2xl:text-xl">
          {caps ? name.toUpperCase() : name.charAt(0).toUpperCase() + name.slice(1)}
        </h3>
      </div>
      <div class="px-3 py-2 2xl:text-[17px] 2xl:leading-[21px]">
        <p>{description}</p>
      </div>
    </div>
  </div>
{/if}

<style>
  .type-tool,
  .type-framework,
  .type-lang,
  .type-other {
    border-color: oklch(var(--b3));
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .absolute {
    top: 4px;
    transform: translateY(calc(-50% + 45px));
  }
</style>
