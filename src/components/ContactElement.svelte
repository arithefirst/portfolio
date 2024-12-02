<script>
const { href, icon, name, className, brand } = $props();
</script>

<a class="h-8 w-full min-w-48 btn relative btn-primary text-base-content border-transparent shadow-md {className}" {href} target="_blank">
  {#if brand}
    <img alt="{name} logo" class="absolute right-5 h-5 text-white" src="https://cdn.simpleicons.org/{icon}/white" />
  {:else}
    <img alt="{icon} image" class="absolute right-5 h-5 text-white" src="/images/{icon}.svg" />
  {/if}
  <p class="absolute text-l left-5">{name}</p>
</a>

<style>
  .btn {
    display: flex !important;
    height: 2rem !important;
  }
</style>
