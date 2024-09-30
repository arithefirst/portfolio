<script lang="ts">
    export let icon: string;
    export let name: string;
    export let href: string;
    import Icon from '@iconify/svelte';

    function openTab() {
        window.open(href, '_blank');
    }
</script>

<div
    class="h-8 md:w-48 w-full btn mx-1
    relative my-1 btn-primary
    text-primary-content
    border-transparent shadow-md"
    on:click={openTab}
    on:keypress={openTab}
    tabindex={0}
    role="button"
>
    <Icon icon={icon} class="absolute right-5 text-xl"/>
    <p class="absolute text-l left-5">{name}</p>
</div>

<style>
    .btn {
        display: flex !important;
        height: 2rem !important;
    }
</style>