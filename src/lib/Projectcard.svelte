<script lang="ts">

    import { onMount} from "svelte";

    export let name: string
    export let src: string
    export let alt: string
    export let href: string
    export let desc: string
    export let tags: string[]
    export let index: number



    let rotateX: string
    let rotateY: string
    let cardW: number
    let cardH: number
    let component: Element
    let componentTop: number
    let componentLeft: number

    function openTab() {
        if (href != "#") {
            window.open(href, '_blank');
        }
    }

    document.addEventListener("mousemove", (e) => {
        rotateElement(e);
    });

    // Get the corner of the component once it loads in
    onMount(() => {componentLeft = component.getBoundingClientRect().left;
                   componentTop = component.getBoundingClientRect().top})

    // Im gonna be so fr i fucked up some math in here
    // and idk what's going on in this function anymore
    function rotateElement(event: MouseEvent) {
        // Find mouse x and y relative to the container
        const x = event.clientX - componentLeft;
        const y = event.clientY - componentTop;

        // Find the offset and tone it down
        const offsetX = ((x - (cardW / 2)) / (cardW / 2)) * 25;

        // Use a lower offset here bc there is always more
        // vertical space than horizontal space
        const offsetY = ((y - (cardH / 2)) / (cardH / 2)) * -15;

        // set rotation
        rotateY = offsetX + "deg";
        rotateX =- -1 * offsetY + "deg";
    }

</script>

<div class="card bg-base-200 cursor-pointer relative grid w-11/12 md:w-64 my-3
     md:hover:scale-[1.025] md:linear md:transition-all"
     on:click={openTab} on:keypress={openTab}
     role="button" tabindex={index} bind:this={component}
     bind:clientWidth={cardW} bind:clientHeight={cardH}
     style="--rotateX: {rotateX}; --rotateY: {rotateY};"
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

<style>
    .card:hover {
        transform:
            perspective(5000px)
            rotateY(var(--rotateY))
            rotateX(var(--rotateX))
    }
</style>