<script lang="ts">
    import "./app.css";
    import Hero from "./lib/Hero.svelte"
    import Navbar from "./lib/Navbar.svelte";
    import Techstack from "./lib/Techstack.svelte";
    import Projectcard from "./lib/Projectcard.svelte";
    const items = {
        "arch":"other", "bash":"lang", "bootstrap":"framework",
        "bun":"tool", "css":"lang", "discordjs":"framework",
        "docker":"tool", "git":"tool", "github":"tool",
        "go":"lang", "html":"lang", "javascript":"lang",
        "jquery":"framework", "linux":"other", "mongodb":"other", "neovim":"tool",
        "nodejs":"tool", "npm":"tool", "python":"lang",
        "svelte":"framework", "tailwind":"framework", "threejs":"framework",
        "typescript":"lang", "vim":"tool", "vercel":"tool",
        "vite":"tool", "vscodium":"tool", "webstorm":"tool"
    }

</script>
<Navbar />

<Hero />
<div class="projects" id="projects">
    <h1 class="text-3xl font-bold text-center md:mt-5 mt-5">Projects</h1>
    <hr class="w-1/2 mx-auto my-3 border-base-content">
    <div class="md:grid-cols-4 grid-cols-1 w-fit mx-auto flex flex-wrap justify-center gap-4">
        <!--  Add <Projectcard /> Components here  -->
        <Projectcard
                href="https://github.com/arithefirst/now-playing-widget"
                name="Now Playing Widget"
                src="/now-playing-widget.png"
                alt="now playing widget preview"
                desc="A simple widget to show the current song playing on your spotify account. Useful for twitch streams and youtube videos"
                tags={["Golang", "Javascript", "HTML5", "CSS3"]} index={1}
        />
        <Projectcard
                href="https://github.com/arithefirst/valo-builder"
                name="Valo Builder"
                src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                alt="valo builder logo"
                desc="A website for building VALORANT skin collections without sending all of your money to Riot Games"
                tags={["Golang", "Svelte", "CSS3"]} index={2}
        />
        <Projectcard
                href="#hero"
                name="Portfolio"
                src="https://arithefirst.com/images/pfp.png"
                alt="cat from 2023 steam summer sale"
                desc="My portfolio website, the one you're on now!"
                tags={["DaisyUI", "Svelte", "Tailwind", "Typescript"]} index={3}
        />
    </div>
</div>

<Techstack {items} />
<div class="h-8"/>

<style>
    :root {
        scroll-behavior: smooth;
    }
</style>