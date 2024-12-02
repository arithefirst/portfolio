<script>
  const { href, icon, name, className, children } = $props();
</script>

<a
  class="h-8 w-full min-w-48 btn relative btn-primary text-base-content border-transparent shadow-md {className}"
  {href}
  target="_blank"
>
  <img alt="{icon} image" class="absolute right-5 h-5 text-white" src="/images/{icon}.svg" />
  <p class="absolute text-l left-5">{name}</p>
</a>

<style>
  .btn {
    display: flex !important;
    height: 2rem !important;
  }
</style>
