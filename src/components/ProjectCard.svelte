<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    name: string;
    href: string;
    desc: string;
    tags: string[];
    children: Snippet;
  }

  let { name, href, desc, tags, children }: Props = $props();
</script>

<a
  {href}
  class="card relative my-0.5 grid w-10/12 cursor-pointer bg-base-200
  md:my-3 md:w-64 md:transition-all md:ease-out-back md:hover:scale-[1.025] 2xl:w-72"
>
  <div class="card">
    <figure>
      {@render children?.()}
    </figure>
    <div class="card-body">
      <h2 class="card-title">{name}</h2>
      <p class="mb-1">{desc}</p>
      <div class="card-actions justify-end">
        {#each tags as tag}
          <div class="rounded-lg border border-base-content px-2">{tag}</div>
        {/each}
      </div>
    </div>
  </div>
</a>
