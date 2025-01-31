<script lang="ts">
  import type { badge } from './types';

  interface Props {
    badges: badge[];
  }

  const { badges }: Props = $props();
</script>

<div class="flex gap-1 w-full text-center mt-1 flex-wrap">
  {#each badges as tag}
    <a class="rounded-lg px-2 border-base-content border w-fit" target="_blank" rel="noreferrer" href={tag.url}
      >{tag.content}</a
    >
  {/each}
</div>
