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

<div class="md:grid-cols-4 grid-cols-2 flex flex-wrap w-fit mx-auto">
    <!--  Add <Projectcard /> Components here  -->
</div>
