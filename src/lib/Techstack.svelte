<script lang="ts">
    // See codepen.io/April-Hall/pen/ZEgEGEg
    // for my original concept for this
    export let items: {[key: string]: string}

    const tools = document.querySelector("#tl-btn")
    const langs = document.getElementById("ln-btn");
    const fws = document.getElementById("fw-btn");

    let lnmove: number;
    let fwmove: number;
    let tlmove: number;
    let omove: number;

    function setOffset(l: number,f: number,t: number, o: number) {
        lnmove = l;
        fwmove = f;
        tlmove = t;
        omove = o;
    }
</script>

<div id="techstack">
    <div class="w-fit mx-auto my-2">
        <button
            class="btn btn-sm btn-primary mx-1"
            on:mouseenter={() => {setOffset(0,30,0,0)}}
            on:mouseleave={() => {setOffset(0,0,0,0)}}
        >Frameworks & Libs</button>

        <button
            class="btn btn-sm btn-primary mx-1"
            on:mouseenter={() => {setOffset(0,0,30,0)}}
            on:mouseleave={() => {setOffset(0,0,0,0)}}
        >Tools</button>

        <button
            class="btn btn-sm btn-primary mx-1"
            on:mouseenter={() => {setOffset(30,0,0,0)}}
            on:mouseleave={() => {setOffset(0,0,0,0)}}
        >Languages</button>

        <button
                class="btn btn-sm btn-primary mx-1"
                on:mouseenter={() => {setOffset(0,0,0,30)}}
                on:mouseleave={() => {setOffset(0,0,0,0)}}
        >Other</button>
    </div>
    <div class="w-fit h-16 mx-auto relative img-container" style='--lnmove:{lnmove + "px"}; --fwmove:{fwmove + "px"};--tlmove:{tlmove + "px"};--omove:{omove + "px"}'>
        {#each Object.entries(items) as [item, type]}
            <img
                alt={item.charAt(0).toUpperCase() + item.slice(1)}
                src={"https://skillicons.dev/icons?i=" + item}
                class="w-16 h-16 inline-block mx-1 {'type-' + type}"
            >
        {/each}
    </div>
</div>

<style>
    .type-tool {
        transform: translate(0, var(--tlmove));
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .type-lang {
        transform: translate(0, var(--lnmove));
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .type-framework {
        transform: translate(0, var(--fwmove));
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .type-other {
        transform: translate(0, var(--omove));
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
</style>