<script>
  const { href, name, className, children } = $props();
</script>

<a
  class="btn btn-primary relative h-8 w-full min-w-48 border-transparent text-base-content shadow-md {className}"
  {href}
  target="_blank"
>
  {@render children()}
  <p class="text-l absolute left-5">{name}</p>
</a>

<style>
  .btn {
    display: flex !important;
    height: 2rem !important;
  }
</style>
