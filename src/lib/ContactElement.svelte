<script lang="ts">
    export let icon: string;
    export let name: string;
    export let href: string;
    export let className: string = "";
    import Icon from '@iconify/svelte';
</script>

<a
    class="h-8 w-full min-w-48 btn mx-1
    relative my-0.5 btn-primary
    light:text-accent-content
    dark:text-base-content
    border-transparent shadow-md
    {className}" {href}
    target="_blank"
>
    <Icon icon={icon} class="absolute right-5 text-xl"/>
    <p class="absolute text-l left-5">{name}</p>
</a>

<style>
    .btn {
        display: flex !important;
        height: 2rem !important;
    }
</style>