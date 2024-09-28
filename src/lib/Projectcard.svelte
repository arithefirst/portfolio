<script lang="ts">
    import { onMount} from "svelte";
    export let name: string
    export let src: string
    export let alt: string
    export let href: string
    export let desc: string
    export let tags: string[]
    export let index: number

    // Open tab in new window if href is not to the same page
    function openTab() {
        (href === "#hero") ? window.location.href = "#hero" : window.open(href, '_blank');
    }
</script>

<div class="card bg-base-200 cursor-pointer relative grid w-11/12 md:w-64 my-3
     md:hover:scale-[1.025] md:linear md:transition-all"
     on:click={openTab} on:keypress={openTab}
     role="button" tabindex={index}
>
    <figure>
        <img {src} {alt} class="object-cover w-full h-full bg-base-300"/>
    </figure>
    <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{desc}</p>
        <div class="card-actions justify-end">
            {#each tags as tag}
                <div class="badge badge-outline">{tag}</div>
            {/each}
        </div>
    </div>
</div>