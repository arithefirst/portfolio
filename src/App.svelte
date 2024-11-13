<script lang="ts">
  import "./app.css";
  import Hero from "./lib/Hero.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Techstack from "./lib/Techstack.svelte";
  import Projectcard from "./lib/Projectcard.svelte";

  // Inject vercel speed insights
  import { injectSpeedInsights } from "@vercel/speed-insights";
  injectSpeedInsights();
</script>

<Navbar />

<Hero />

<Techstack />

<div class="projects" id="projects">
  <h1 class="text-3xl font-bold text-center md:mt-5 mt-5">Projects</h1>
  <hr class="w-1/2 mx-auto my-3 border-base-content" />
  <div class="md:grid-cols-4 grid-cols-1 w-fit mx-auto flex flex-wrap justify-center gap-4">
    <!--  Add <Projectcard /> Components here  -->
    <Projectcard
      href="https://github.com/arithefirst/lockbox"
      name="Lockbox"
      src="/lockbox.svg"
      alt="valo builder logo"
      desc="A password protected dropbox where users given a password can upload a file "
      tags={["DaisyUI", "Docker", "Svelte", "Sveltekit", "Tailwind", "Typescript"]}
    />
    <Projectcard
      href="https://github.com/arithefirst/now-playing-widget"
      name="Now Playing Widget"
      src="/now-playing-widget.webp"
      alt="now playing widget preview"
      desc="A simple widget to show the current song playing on your spotify account. Useful for twitch streams and youtube videos"
      tags={["Golang", "Javascript", "HTML5", "CSS3"]}
    />
    <Projectcard
      href="https://github.com/arithefirst/portfolio"
      name="Portfolio"
      src="/pfp.png"
      alt="cat from 2023 steam summer sale"
      desc="My portfolio website, the one you're on now!"
      tags={["DaisyUI", "Svelte", "Tailwind", "Typescript", "Vercel"]}
    />
    <Projectcard
      href="https://github.com/arithefirst/valo-builder"
      name="Valo Builder"
      src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
      alt="valo builder logo"
      desc="A website for building VALORANT skin collections without sending all of your money to Riot Games"
      tags={["Golang", "Svelte", "CSS3"]}
    />
  </div>
</div>

<div class="h-8"></div>

<style>
  :root {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
</style>
