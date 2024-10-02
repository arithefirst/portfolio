<script>
    import Navbar from "./lib/Navbar.svelte";
    import ContactElement from "./lib/ContactElement.svelte";
</script>

<Navbar />

<div class="bg-accent w-full h-full fixed"/>
<div class="container absolute left-1/2">
    <img alt="cat from 2023 steam summer sale" class="mx-auto md:w-1/6 aspect-square rounded-3xl" src="/pfp.png">
    <h1 class="text-center font-bold md:text-3xl text-xl my-2 dark:text-white light:text-accent-content">@arithefirst (almost) everywhere</h1>
    <div class="relative h-fit md:w-fit w-10/12 grid md:grid-cols-3 grid-cols-1 mx-auto justify-items-center">
        <ContactElement href="https://bsky.app/profile/arithefirst.com" icon="simple-icons:bluesky" name="Bluesky"/>
        <ContactElement href="https://www.discogs.com/user/arithefirst/collection?header=1" icon="simple-icons:discogs" name="Discogs"/>
        <ContactElement href="https://discord.com/users/613358761901424652" icon="simple-icons:discord" name="Discord"/>
        <ContactElement href="mailto:ari@arithefirst.com" icon="uiw:mail" name="E-Mail"/>
        <ContactElement href="https://github.com/arithefirst" icon="simple-icons:github" name="Github"/>
        <ContactElement href="https://www.instagram.com/_arithefirst_/" icon="simple-icons:instagram" name="Instagram"/>
        <ContactElement href="https://en.pronouns.page/@arithefirst" icon="simple-icons:pronounsdotpage" name="Pronouns.page" />
        <ContactElement href="https://www.reddit.com/user/PancakeAri" icon="simple-icons:reddit" name="Reddit" />
        <ContactElement href="https://stats.fm/arithefirst" icon="simple-icons:spotify" name="Spotify" />
        <ContactElement href="https://steamcommunity.com/id/arithefirst/" icon="simple-icons:steam" name="Steam" />
        <ContactElement href="https://www.tiktok.com/@arithefirst_" icon="simple-icons:tiktok" name="Tik-Tok" />
        <ContactElement href="https://youtube.com/@arithefirst_" icon="simple-icons:youtube" name="Youtube" />
    </div>
    <div class="h-8 md:hidden visible"/>
</div>

<style>
    .container {
        transform: translate(-50%, 80px);
    }

    @media (min-width: 768px) {
        .container {
            top: calc(50% + 64px);
            transform: translate(-50%, calc(-50% - 64px));
        }
    }

</style>