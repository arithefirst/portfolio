<script>
    import "./app.css";
    import Navbar from "./lib/Navbar.svelte";
    import Techstack from "./lib/Techstack.svelte";
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
<Techstack {items}/>