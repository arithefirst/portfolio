<script lang="ts">
    export let name: string
    export let src: string
    export let alt: string
    export let href: string
    export let desc: string
    export let tags: string[]
    export let index: number
</script>

<div class="card bg-base-100 shadow-xl cursor-pointer mx-4 relative grid md:w-64 my-3"
     on:click={() => {window.location.replace(href);}}
     on:keypress={() => {window.location.replace(href);}}
     role="button"
     tabindex={index}
>
    <figure>
        <img {src} {alt} class="w-full"/>
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