<script lang="ts">
  import type { badge } from '../scripts/types';

  interface Props {
    badges: badge[];
  }

  const { badges }: Props = $props();
</script>

<div class="mt-1 flex w-full flex-wrap gap-1 text-center">
  {#each badges as tag}
    <a class="w-fit rounded-lg border border-base-content px-2" target="_blank" rel="noreferrer" href={tag.url}
      >{tag.content}</a
    >
  {/each}
</div>
