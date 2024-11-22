<script lang="ts">
  import Icon from '@iconify/svelte';
  interface Props {
    icon: string;
    name: string;
    href: string;
    className?: string;
  }

  let { icon, name, href, className = '' }: Props = $props();
</script>

<a
  class="h-8 w-full min-w-48 btn
    relative btn-primary
    text-base-content
    border-transparent shadow-md
    {className}"
  {href}
  target="_blank"
>
  <Icon {icon} class="absolute right-5 text-xl" />
  <p class="absolute text-l left-5">{name}</p>
</a>

<style>
  .btn {
    display: flex !important;
    height: 2rem !important;
  }
</style>
