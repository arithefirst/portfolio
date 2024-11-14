<script>
  import ContactElement from '$lib/ContactElement.svelte';

  // Inject vercel speed insights
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
  injectSpeedInsights();
</script>

<svelte:head>
  <title>Contact</title>
  <meta name="description" content="Everywhere you can find April Hall" />
</svelte:head>

<div class="w-screen z-10 mt-[76px] md:absolute md:mt-0 top-[84px] md:left-1/2 md:-translate-x-1/2 custom-height">
  <div class="md:flex md:justify-center md:items-center md:w-full md:h-full">
    <div>
      <img
        alt="cat from 2023 steam summer sale"
        class="relative w-[15w] mx-auto aspect-square rounded-3xl"
        src="/pfp.png"
      />
      <h1 class="text-center relative font-bold md:text-3xl text-xl my-2 dark:text-white light:text-accent-content">
        @arithefirst (almost) everywhere
      </h1>
      <div
        class="relative mb-5 h-fit md:w-fit w-10/12 grid md:grid-cols-6 grid-cols-1 mx-auto justify-items-center gap-1"
      >
        <ContactElement
          className="col-span-2"
          href="https://www.amazon.com/hz/wishlist/ls/1F2RJS322A2NR?sort=price-asc"
          icon="simple-icons:amazon"
          name="Amazon Wishlist"
        />
        <ContactElement
          className="col-span-2"
          href="https://bsky.app/profile/arithefirst.com"
          icon="simple-icons:bluesky"
          name="Bluesky"
        />
        <ContactElement
          className="col-span-2"
          href="https://www.discogs.com/user/arithefirst/collection?header=1"
          icon="simple-icons:discogs"
          name="Discogs"
        />
        <ContactElement
          className="col-span-2"
          href="https://discord.com/users/613358761901424652"
          icon="simple-icons:discord"
          name="Discord"
        />
        <ContactElement className="col-span-2" href="mailto:ari@arithefirst.com" icon="uiw:mail" name="E-Mail" />
        <ContactElement
          className="col-span-2"
          href="https://github.com/arithefirst"
          icon="simple-icons:github"
          name="Github"
        />
        <ContactElement
          className="col-span-2"
          href="https://www.instagram.com/_arithefirst_/"
          icon="simple-icons:instagram"
          name="Instagram"
        />
        <ContactElement
          className="col-span-2"
          href="https://en.pronouns.page/@arithefirst"
          icon="simple-icons:pronounsdotpage"
          name="Pronouns.page"
        />
        <ContactElement
          className="col-span-2"
          href="https://www.reddit.com/user/PancakeAri"
          icon="simple-icons:reddit"
          name="Reddit"
        />
        <ContactElement
          className="col-span-2"
          href="https://stats.fm/arithefirst"
          icon="simple-icons:spotify"
          name="Spotify"
        />
        <ContactElement
          className="col-span-2"
          href="https://steamcommunity.com/id/arithefirst/"
          icon="simple-icons:steam"
          name="Steam"
        />
        <ContactElement
          className="col-span-2"
          href="https://www.tiktok.com/@arithefirst_"
          icon="simple-icons:tiktok"
          name="Tik-Tok"
        />
        <!-- Two item per row -->
        <ContactElement
          className="col-span-3"
          href="https://youtube.com/@arithefirst_"
          icon="simple-icons:youtube"
          name="Youtube"
        />
        <ContactElement className="col-span-3" href="/publickey.txt" icon="fa:lock" name="PGP Public Key" />
      </div>
    </div>
  </div>
</div>

<div class="w-screen h-screen fixed top-0 left-0 bg-accent"></div>

<style>
  .custom-height {
    height: calc(100vh - 84px);
  }
</style>
