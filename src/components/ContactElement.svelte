<script>
  const { href, name, className, children } = $props();
</script>

<a
  class="h-8 w-full min-w-48 btn relative btn-primary text-base-content border-transparent shadow-md {className}"
  {href}
  target="_blank"
>
  {@render children()}
  <p class="absolute text-l left-5">{name}</p>
</a>

<style>
  .btn {
    display: flex !important;
    height: 2rem !important;
  }
</style>
