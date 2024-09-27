<script lang="ts">
    import "./app.css";
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
        "typescript":"lang", "vim":"tool", "vscodium":"tool",
        "webstorm":"tool"
    }

</script>

<Navbar />

<Techstack {items} />

<h1 class="text-3xl font-bold text-center md:mt-5 mt-5">Projects</h1>
<hr class="w-1/2 mx-auto my-3 border-base-content">
<div class="md:grid-cols-4 grid-cols-1 grid w-fit mx-auto">
    <!--  Add <Projectcard /> Components here  -->
    <Projectcard
            href="#"
            name="Card"
            src="https://arithefirst.com/images/pfp.png"
            alt="Card"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            tags={["tag1", "tag2"]} index={1}
    />
    <Projectcard
            href="#"
            name="Card"
            src="https://arithefirst.com/images/pfp.png"
            alt="Card"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            tags={["tag1", "tag2"]} index={2}
    />
    <Projectcard
            href="#"
            name="Card"
            src="https://arithefirst.com/images/pfp.png"
            alt="Card"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            tags={["tag1", "tag2"]} index={3}
    />
    <Projectcard
            href="#"
            name="Card"
            src="https://arithefirst.com/images/pfp.png"
            alt="Card"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            tags={["tag1", "tag2"]} index={4}
    />
    <Projectcard
            href="#"
            name="Card"
            src="https://arithefirst.com/images/pfp.png"
            alt="Card"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            tags={["tag1", "tag2"]} index={5}
    />
    <Projectcard
            href="#"
            name="Card"
            src="https://arithefirst.com/images/pfp.png"
            alt="Card"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            tags={["tag1", "tag2"]} index={6}
    />
</div>
