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
    alt={`The logo for ${caps ? name.toUpperCase() : name.charAt(0).toUpperCase() + name.slice(1)} (${type})`}
    src={`/skillicons/${name}.svg`}
    class="m-0.5 inline-block w-16 rounded-icon border-2 md:m-1 2xl:w-[72px] {'type-' + type}"
  />
  <span class="sr-only">{`Click to visit ${name.toLocaleLowerCase()}'s website'`}</span>
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
  <div class="relative h-fit w-fit opacity-0 md:opacity-100">
    <div
      in:fade={{ duration: 150, delay: 250 }}
      out:fade={{ duration: 100, delay: 0 }}
      class="absolute z-10 inline-block rounded-lg border border-base-300 bg-base-100 text-sm text-base-content
            shadow-sm md:w-48 lg:w-64 2xl:w-72"
    >
      <div class="rounded-t-lg border-b border-base-300 bg-base-200 px-3 py-2">
        <img
          alt={`The logo for ${caps ? name.toUpperCase() : name.charAt(0).toUpperCase() + name.slice(1)} (${type})`}
          src={`/skillicons/${name}.svg`}
          class="mx-auto h-8 w-8"
        />
        <h3 class="text-center font-semibold text-white 2xl:text-xl">
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
