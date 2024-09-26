<script lang="ts">
    // See codepen.io/April-Hall/pen/ZEgEGEg
    // for my original concept for this
    export let items: {[key: string]: string}


    let mode: number;
    function setOffset(m: number) {
        mode = m
    }

</script>

<h1 class="text-3xl font-bold text-center md:mt-0 mt-5">Technologies</h1>
<hr class="w-1/2 mx-auto my-3 border-base-content">

<div id="techstack">
    <div class="w-fit mx-auto my-2">
        <button
            class="btn md:btn-sm btn-xs btn-primary mx-1"
            on:mouseenter={() => {setOffset(1)}}
            on:mouseleave={() => {setOffset(0)}}
        >Tools</button>
        <button
            class="btn md:btn-sm btn-xs btn-primary mx-1"
            on:mouseenter={() => {setOffset(2)}}
            on:mouseleave={() => {setOffset(0)}}
        >Frameworks & Libs</button>
        <button
            class="btn md:btn-sm btn-xs btn-primary mx-1"
            on:mouseenter={() => {setOffset(3)}}
            on:mouseleave={() => {setOffset(0)}}
        >Languages</button>
        <button
                class="btn md:btn-sm btn-xs btn-primary mx-1"
                on:mouseenter={() => {setOffset(4)}}
                on:mouseleave={() => {setOffset(0)}}
        >Other</button>
    </div>

    <div class="w-11/12 md:w-1/2 h-fit mx-auto relative img-container flex flex-wrap justify-center">
        {#each Object.entries(items) as [item, type]}
            <img
                alt={item.charAt(0).toUpperCase() + item.slice(1)}
                src={"https://skillicons.dev/icons?i=" + item}
                class="border-2 rounded-[18px] w-16 h-16 inline-block m-0.5 md:m-1 {'type-' + type}"
            >
        {/each}
    </div>
</div>

<style>
    .type-tool, .type-framework, .type-lang, .type-other {
        border-color: oklch(var(--b3));
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
</style>

{#if mode === 1}
    <style>
        .type-tool {
            border-color: oklch(var(--p)) !important;
            transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
    </style>
{/if}
{#if mode === 2}
    <style>
        .type-framework {
            border-color: oklch(var(--p)) !important;
            transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
    </style>
{/if}
{#if mode === 3}
    <style>
        .type-lang {
            border-color: oklch(var(--p)) !important;
            transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
    </style>
{/if}
{#if mode === 4}
    <style>
        .type-other {
            border-color: oklch(var(--p)) !important;
            transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
    </style>
{/if}