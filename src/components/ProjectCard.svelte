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
  class="card bg-base-200 cursor-pointer relative grid md:w-64 w-10/12
  2xl:w-72 md:my-3 my-0.5 md:hover:scale-[1.025] md:linear md:transition-all"
  target="_blank">
  <div class="card">
    <figure>
      {@render children?.()}
    </figure>
    <div class="card-body">
      <h2 class="card-title">{name}</h2>
      <p class="mb-1">{desc}</p>
      <div class="card-actions justify-end">
        {#each tags as tag}
          <div class="rounded-lg px-2 border-base-content border">{tag}</div>
        {/each}
      </div>
    </div>
  </div>
</a>
