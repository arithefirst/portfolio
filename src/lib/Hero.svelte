<div id="hero" class="hero min-h-screen">
    <div class="hero-content text-center">
        <div class="my-auto">
            <h1 class="w-fit font-bold lg:text-[14.0625em] text-[20vw] text-neutral dark:text-white mx-auto">HELLO!</h1>
            <p class="my-3 max-w-md dark:text-white mx-auto font-normal text-4xl">
                I'm <strong class="font-black">April Hall</strong>
            </p>
            <hr class="w-3/5 mx-auto border-2 border-neutral dark:border-white">
            <p class="my-3 max-w-md dark:text-white mx-auto font-medium text-4xl">
                Fullstack Developer
            </p>
        </div>
    </div>
</div>

<style>

    @keyframes animateBackground {
        from {
            background-position: 0 0;
        }
        to {
            background-position: 10000px 0;
        }
    }

    :global(.light) {
        background-image: linear-gradient(oklch(var(--a)) 2px, transparent 2px), linear-gradient(to right, oklch(var(--a)) 2px, transparent 2px);
        background-size: 32px 32px;
        background-color: oklch(var(--p));
        animation: animateBackground 500s linear infinite;
    }

    :global(.dark) {
        background-image: linear-gradient(oklch(var(--p)) 2px, transparent 2px), linear-gradient(to right, oklch(var(--p)) 2px, transparent 2px) !important;
        background-size: 32px 32px;
        background-color: oklch(var(--a));
        animation: animateBackground 500s linear infinite;
    }

    h1 {
        font-family: "Silkscreen", sans-serif;
    }
</style>