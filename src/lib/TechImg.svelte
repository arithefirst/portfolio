<script lang="ts">
    import { fade } from 'svelte/transition';
    export let description: string;
    export let name: string;
    export let type: string;
    export let caps: boolean;
    let hover: boolean = false;
</script>

<img
    on:mouseenter={() => {hover = true}}
    on:mouseleave={() => {hover = false}}
    alt={caps ? name.toUpperCase() : name.charAt(0).toUpperCase() + name.slice(1)}
    src={"/skillicons/" + name + ".svg"}
    class="border-2 rounded-[18px] w-16 h-16 inline-block m-0.5 md:m-1 {'type-' + type}"
>
<!-- Popover -->
{#if hover}
    <div class="w-fit h-fit relative opacity-0 md:opacity-100">
        <div
            in:fade={{duration:150, delay:250}} out:fade={{duration:100, delay:0}}
            class="absolute z-10 inline-block md:w-48 lg:w-64 text-sm text-base-content bg-base-100
            border border-base-300 rounded-lg shadow-sm"
        >
            <div class="px-3 py-2 bg-base-200 border-b border-base-300 rounded-t-lg">
                <img
                        alt={caps ? name.toUpperCase() : name.charAt(0).toUpperCase() + name.slice(1)}
                        src={"/skillicons/" + name + ".svg"}
                        class="h-8 w-8 mx-auto"
                >
                <h3 class="font-semibold text-center dark:text-white">
                    {caps ? name.toUpperCase() : name.charAt(0).toUpperCase() + name.slice(1)}
                </h3>
            </div>
            <div class="px-3 py-2">
                <p>{description}</p>
            </div>
        </div>
    </div>
{/if}

<style>
    .type-tool, .type-framework, .type-lang, .type-other {
        border-color: oklch(var(--b3));
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .absolute {
        top: 4px;
        transform: translateY(calc(-50% + 45px));
    }
</style>