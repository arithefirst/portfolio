<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { legacyButton } from '../scripts/types';
  let banner: HTMLElement;

  interface Props {
    children: Snippet;
  }

  const { children }: Props = $props();

  const links: legacyButton[] = [
    {
      name: 'Amazon Wishlist',
      url: 'https://www.amazon.com/hz/wishlist/ls/1F2RJS322A2NR?sort=price-asc',
      icon: '#icon-baf4300f501aae4c1930e4344f77b381',
    },
    {
      name: 'Bluesky',
      url: 'https://bsky.app/profile/arithefirst.com',
      icon: '#icon-0c4db87eff374f0f1ef47f8f043f0132',
    },
    {
      name: 'Discogs',
      url: 'https://www.discogs.com/user/arithefirst/collection?header=1',
      icon: '#icon-2324cca7d3647d5d437815fe39f4cb67',
    },
    {
      name: 'Discord',
      url: 'https://discord.com/users/613358761901424652',
      icon: '#icon-discordapp',
    },
    {
      name: 'Email',
      url: 'mailto:ari@arithefirst.com',
      icon: '#icon-c3c8e1063e3b7f84f6b54712741de139',
    },
    {
      name: 'Github',
      url: 'https://github.com/arithefirst',
      icon: '#icon-8c4b37645de3c276d895d87df51ba614',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_arithefirst_/',
      icon: '#icon-85976685de3e4af37529a1ce5d57d2a7',
    },
    {
      name: 'Musescore',
      url: 'https://musescore.com/user/63121765',
      icon: '#icon-a63c85b2b6ee333b6d6753e57c8dfe0b',
    },
    {
      name: 'Pintrest',
      url: 'https://www.pinterest.com/arithefirst_/',
      icon: '#icon-950f35a71f420383dc2b54f8bf482185',
    },
    {
      name: 'Pronouns.Page',
      url: 'https://en.pronouns.page/@arithefirst',
      icon: '#icon-7b8b203a175397e05376f74d544a45d4',
    },
    {
      name: 'Reddit',
      url: 'https://www.reddit.com/user/PancakeAri',
      icon: '#icon-c83ee4da7ecbbbd33cd0166b89ce370f',
    },
    {
      name: 'Spotify',
      url: 'https://stats.fm/arithefirst',
      icon: '#icon-6f1173b99f06aa4855b8fd26db52c969',
    },
    {
      name: 'Steam',
      url: 'https://steamcommunity.com/id/arithefirst/',
      icon: '#icon-56a1e10494600ea42075d3aa573d5839',
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@arithefirst_',
      icon: '#icon-694b338299bf630d8d2ec9bd42d31dbe',
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@arithefirst_',
      icon: '#icon-a63c85b2b6ee333b6d6753e57c8dfe0a',
    },
  ];
</script>

{#snippet button(props: legacyButton)}
  <li>
    <a href={props.url} target="_blank" class="button">
      <svg>
        <use xlink:href={props.icon}></use>
      </svg>
      <span class="label">{props.name}</span>
    </a>
  </li>
{/snippet}

<div
  class="fixed left-0 top-0 z-50 flex w-full bg-warning px-4 py-2 align-middle text-warning-content"
  bind:this={banner}
>
  This is an old site, and is no longer maintained.
  <a class="link pl-1" href="https://www.arithefirst.com">View new site?</a>
  <button class="my-auto ml-auto h-full leading-none" onclick={() => banner.remove()} aria-label="Hide">
    <img src="/images/close.svg" class="my-auto size-5" alt="close div icon" />
  </button>
</div>

<main>
  <div id="background"></div>
  <!-- SVGs -->
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" display="none" width="0" height="0">
    <symbol id="icon-baf4300f501aae4c1930e4344f77b381" viewBox="0 0 40 40">
      <path
        d="M29.4,16.6c0,1.3,0,2.7,0,4c-0.1,1.5,0.4,2.8,1.4,4c0.1,0.1,0.2,0.3,0.3,0.4c0.3,0.5,0.3,0.9-0.2,1.3c-1,0.8-2,1.7-3,2.6 c-0.6,0.5-1,0.5-1.6,0c-0.8-0.7-1.5-1.5-2-2.4c-0.1-0.2-0.2-0.2-0.4,0c-1,1-2.1,1.9-3.4,2.4c-2.1,0.7-4.2,0.8-6.3,0.1 c-2-0.7-3.2-2.2-3.7-4.3c-0.5-2.3-0.2-4.5,1.2-6.5c1.1-1.5,2.6-2.4,4.3-2.9c1.8-0.5,3.6-0.8,5.5-0.9c0.5-0.1,1-0.1,1.6-0.2 c0.1,0,0.2,0,0.2-0.2c0-0.8,0.1-1.7-0.1-2.5c-0.3-1.1-1-1.7-2-1.9c-0.8-0.2-1.5-0.1-2.3,0.1c-1.1,0.4-1.8,1.2-2.1,2.3 c-0.2,0.6-0.4,0.9-1.1,0.8c-1.3-0.1-2.6-0.3-3.9-0.4c-0.5-0.1-0.8-0.5-0.7-1c0.7-3.3,2.9-5.2,6-6.1c2.4-0.7,4.9-0.7,7.3,0 c1.9,0.5,3.6,1.5,4.5,3.4c0.5,1.1,0.6,2.3,0.7,3.4C29.4,13.6,29.4,15.1,29.4,16.6C29.4,16.6,29.4,16.6,29.4,16.6z M23.1,19.1 c0-0.4,0-0.8,0-1.2c0-0.2-0.1-0.3-0.3-0.3c-0.6,0.1-1.2,0.1-1.8,0.1c-1.1,0.1-2.1,0.4-3,1.1c-1.3,1-1.5,2.3-1.3,3.8 c0.2,1.8,1.8,2.8,3.5,2.2c1.2-0.4,1.9-1.3,2.3-2.3C23.1,21.5,23.1,20.3,23.1,19.1z M20.2,37.2c-6.1,0-11.6-1.6-16.6-4.9 c-1-0.7-2-1.4-2.9-2.2c-0.1-0.1-0.2-0.1-0.2-0.2c-0.1-0.1-0.2-0.3,0-0.4c0.1-0.2,0.3-0.2,0.4-0.1c0.4,0.2,0.7,0.4,1,0.5 c3.2,1.7,6.5,2.9,10,3.6c3.2,0.7,6.3,1,9.6,0.9c4.6-0.1,9.1-1.1,13.4-2.8c0.2-0.1,0.4-0.2,0.6-0.2c0.3-0.1,0.6,0,0.7,0.3 c0.1,0.3,0,0.5-0.3,0.7c-0.2,0.1-0.3,0.2-0.5,0.4c-2.8,1.8-5.8,2.9-9,3.7C24.3,37,22.2,37.2,20.2,37.2z M35.6,30.1 c-0.9,0-1.8,0.1-2.7,0.2c-0.2,0-0.4,0.1-0.5-0.1c-0.1-0.2,0.1-0.3,0.2-0.4c1.1-0.8,2.4-1.1,3.8-1.1c0.9-0.1,1.8,0,2.7,0.3 c0.4,0.1,0.6,0.4,0.6,0.8c0,2.2-0.8,4.2-2.4,5.7c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0.1-0.3,0.2-0.5,0.1c-0.1-0.1-0.1-0.3,0-0.4 c0.5-1.2,1-2.3,1.2-3.6c0-0.2,0-0.3,0-0.5c0-0.5-0.2-0.7-0.7-0.9C36.7,30.1,36.1,30.1,35.6,30.1z"
      ></path>
    </symbol>
    <symbol id="icon-2324cca7d3647d5d437815fe39f4cb67" viewBox="0 0 40 40">
      <path
        d="M20,36c-2.8,0-5.4-0.7-7.7-2l1.1-2l0.1-0.1l0.9-1.6l1.7-3l1.2-2.1c0.8,0.4,1.8,0.7,2.7,0.7 c3.3,0,5.9-2.7,5.9-5.9c0-1.6-0.6-3-1.6-4.1l1-1.1l0,0l0.6-0.7L26,14v0l1.7-1.8v0l0.1-0.1l0,0l1.7-1.8c0,0,0,0,0,0l0.1-0.1 c0,0,0,0,0,0l1.5-1.7c3,2.9,4.8,7,4.8,11.5C36,28.8,28.8,36,20,36z M17.3,25.2L17.3,25.2C17.3,25.2,17.3,25.2,17.3,25.2L17.3,25.2z M21.2,20c0,0.6-0.5,1.1-1.1,1.1c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1C20.6,18.9,21.2,19.4,21.2,20z M27.4,6.9L26.7,8 c0,0,0,0,0,0l-0.1,0.1c0,0,0,0,0,0l-1.2,2.2l0,0l-0.1,0.1l0,0l-1.2,2.2h0l-0.1,0.1L23,14.9c-0.9-0.5-1.9-0.8-3-0.8 c-3.3,0-5.9,2.6-5.9,5.9c0,1.7,0.7,3.2,1.8,4.3c0,0,0,0,0,0l-0.6,0.6l0,0l-1,1.1l-0.1,0.1l-1.7,1.8v0L12.4,28l0,0l-1.7,1.8 c0,0,0,0,0,0l-0.1,0.1l0,0l-0.8,0.8l0,0L9,31.6c-3.1-2.9-5-7-5-11.6v-0.2l0,0C4.1,11.1,11.2,4,20,4h0.3c2.7,0,5.3,0.8,7.6,2 L27.4,6.9L27.4,6.9z"
      ></path>
    </symbol>
    <symbol id="icon-c3c8e1063e3b7f84f6b54712741de139" viewBox="0 0 40 40">
      <path
        d="M37.3,15.3v15.3c0,0.8-0.3,1.6-0.9,2.2c-0.6,0.6-1.4,0.9-2.2,0.9H5.8c-0.8,0-1.6-0.3-2.2-0.9s-0.9-1.4-0.9-2.2V15.3 c0.5,0.6,1.2,1.1,2,1.7c4.7,3.1,7.9,5.4,9.6,6.7c0.7,0.5,1.4,0.9,1.8,1.2c0.4,0.3,1,0.6,1.9,0.9c0.7,0.3,1.5,0.5,2.1,0.5l0,0 c0.6,0,1.4-0.2,2.1-0.5c0.7-0.3,1.4-0.6,1.9-0.9c0.4-0.3,1-0.7,1.8-1.2c2.2-1.6,5.4-3.8,9.6-6.7C36.1,16.5,36.7,15.9,37.3,15.3 L37.3,15.3z M37.3,9.6c0,1-0.3,2-0.9,2.9c-0.6,0.9-1.5,1.8-2.4,2.4c-4.9,3.3-7.9,5.4-9,6.2c-0.1,0.1-0.4,0.3-0.8,0.6 c-0.4,0.3-0.7,0.5-1,0.7c-0.3,0.2-0.6,0.4-1,0.6c-0.4,0.2-0.7,0.4-1.1,0.5c-0.4,0.1-0.6,0.2-0.9,0.2l0,0c-0.3,0-0.6-0.1-0.9-0.2 c-0.3-0.1-0.7-0.3-1.1-0.5c-0.4-0.2-0.7-0.4-1-0.6c-0.3-0.2-0.6-0.4-1-0.7c-0.4-0.3-0.7-0.5-0.8-0.6c-1.1-0.8-2.8-2-5.1-3.5 c-2.3-1.6-3.3-2.4-3.7-2.7c-0.8-0.5-1.6-1.2-2.3-2.2s-1-1.9-1-2.6c0-1,0.3-1.9,0.8-2.5c0.5-0.6,1.2-1,2.3-1h28.4 c0.8,0,1.6,0.3,2.2,0.9C37.1,8.1,37.3,8.8,37.3,9.6L37.3,9.6z"
      ></path>
    </symbol>
    <symbol id="icon-8c4b37645de3c276d895d87df51ba614" viewBox="0 0 40 40">
      <path
        d="M36,20.3c0,3.5-1,6.6-3.1,9.4c-2,2.8-4.7,4.7-7.9,5.8c-0.4,0.1-0.6,0-0.8-0.1c-0.2-0.2-0.3-0.4-0.3-0.6v-4.4 c0-1.3-0.4-2.3-1.1-3c0.8-0.1,1.5-0.2,2.1-0.4c0.6-0.2,1.3-0.4,2-0.8c0.7-0.4,1.2-0.8,1.7-1.4c0.5-0.5,0.8-1.3,1.1-2.2 s0.4-2,0.4-3.1c0-1.7-0.5-3.1-1.6-4.3c0.5-1.3,0.5-2.7-0.2-4.2c-0.4-0.1-1,0-1.7,0.2c-0.7,0.3-1.4,0.6-1.9,0.9L24,12.5 c-1.3-0.4-2.6-0.5-4-0.5s-2.7,0.2-4,0.5c-0.2-0.2-0.5-0.3-0.9-0.6c-0.4-0.2-0.9-0.5-1.7-0.8c-0.8-0.3-1.4-0.4-1.8-0.3 c-0.6,1.6-0.7,3-0.1,4.2c-1.1,1.2-1.6,2.6-1.6,4.3c0,1.2,0.1,2.2,0.4,3.1s0.6,1.6,1.1,2.2s1,1,1.7,1.4c0.7,0.4,1.3,0.6,2,0.8 c0.6,0.2,1.3,0.3,2.1,0.4c-0.6,0.5-0.9,1.2-1,2.1c-0.3,0.1-0.6,0.2-0.9,0.3c-0.3,0.1-0.7,0.1-1.2,0.1c-0.5,0-0.9-0.1-1.4-0.4 c-0.5-0.3-0.8-0.7-1.2-1.3c-0.3-0.4-0.6-0.8-1-1.1c-0.4-0.3-0.8-0.4-1-0.5L9,26.5c-0.3,0-0.5,0-0.6,0.1c-0.1,0.1-0.1,0.1-0.1,0.2 c0,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.2,0.2,0.3,0.2l0.1,0.1c0.3,0.1,0.6,0.4,0.9,0.8s0.5,0.7,0.7,1.1l0.2,0.5c0.2,0.5,0.5,1,0.9,1.3 c0.4,0.3,0.9,0.5,1.4,0.6c0.5,0.1,1,0.1,1.4,0.1c0.5,0,0.9,0,1.2-0.1l0.5-0.1c0,0.5,0,1.1,0,1.9c0,0.7,0,1.1,0,1.1 c0,0.2-0.1,0.5-0.3,0.6c-0.2,0.2-0.5,0.2-0.8,0.1c-3.2-1.1-5.8-3-7.9-5.8S4,23.8,4,20.3c0-2.9,0.7-5.6,2.1-8S9.5,7.8,12,6.4 s5.1-2.1,8-2.1s5.6,0.7,8,2.1s4.4,3.4,5.8,5.8S36,17.4,36,20.3L36,20.3z"
      ></path>
    </symbol>
    <symbol id="icon-85976685de3e4af37529a1ce5d57d2a7" viewBox="0 0 40 40">
      <path
        d="M20,7c4.2,0,4.7,0,6.3,0.1c1.5,0.1,2.3,0.3,3,0.5C30,8,30.5,8.3,31.1,8.9c0.5,0.5,0.9,1.1,1.2,1.8c0.2,0.5,0.5,1.4,0.5,3 C33,15.3,33,15.8,33,20s0,4.7-0.1,6.3c-0.1,1.5-0.3,2.3-0.5,3c-0.3,0.7-0.6,1.2-1.2,1.8c-0.5,0.5-1.1,0.9-1.8,1.2 c-0.5,0.2-1.4,0.5-3,0.5C24.7,33,24.2,33,20,33s-4.7,0-6.3-0.1c-1.5-0.1-2.3-0.3-3-0.5C10,32,9.5,31.7,8.9,31.1 C8.4,30.6,8,30,7.7,29.3c-0.2-0.5-0.5-1.4-0.5-3C7,24.7,7,24.2,7,20s0-4.7,0.1-6.3c0.1-1.5,0.3-2.3,0.5-3C8,10,8.3,9.5,8.9,8.9 C9.4,8.4,10,8,10.7,7.7c0.5-0.2,1.4-0.5,3-0.5C15.3,7.1,15.8,7,20,7z M20,4.3c-4.3,0-4.8,0-6.5,0.1c-1.6,0-2.8,0.3-3.8,0.7 C8.7,5.5,7.8,6,6.9,6.9C6,7.8,5.5,8.7,5.1,9.7c-0.4,1-0.6,2.1-0.7,3.8c-0.1,1.7-0.1,2.2-0.1,6.5s0,4.8,0.1,6.5 c0,1.6,0.3,2.8,0.7,3.8c0.4,1,0.9,1.9,1.8,2.8c0.9,0.9,1.7,1.4,2.8,1.8c1,0.4,2.1,0.6,3.8,0.7c1.6,0.1,2.2,0.1,6.5,0.1 s4.8,0,6.5-0.1c1.6-0.1,2.9-0.3,3.8-0.7c1-0.4,1.9-0.9,2.8-1.8c0.9-0.9,1.4-1.7,1.8-2.8c0.4-1,0.6-2.1,0.7-3.8 c0.1-1.6,0.1-2.2,0.1-6.5s0-4.8-0.1-6.5c-0.1-1.6-0.3-2.9-0.7-3.8c-0.4-1-0.9-1.9-1.8-2.8c-0.9-0.9-1.7-1.4-2.8-1.8 c-1-0.4-2.1-0.6-3.8-0.7C24.8,4.3,24.3,4.3,20,4.3L20,4.3L20,4.3z"
      ></path>
      <path
        d="M20,11.9c-4.5,0-8.1,3.7-8.1,8.1s3.7,8.1,8.1,8.1s8.1-3.7,8.1-8.1S24.5,11.9,20,11.9z M20,25.2c-2.9,0-5.2-2.3-5.2-5.2 s2.3-5.2,5.2-5.2s5.2,2.3,5.2,5.2S22.9,25.2,20,25.2z"
      ></path>
      <path d="M30.6,11.6c0,1-0.8,1.9-1.9,1.9c-1,0-1.9-0.8-1.9-1.9s0.8-1.9,1.9-1.9C29.8,9.7,30.6,10.5,30.6,11.6z"
      ></path>
    </symbol>
    <symbol id="icon-950f35a71f420383dc2b54f8bf482185" viewBox="0 0 40 40">
      <path
        d="M35.3,20c0,2.8-0.7,5.4-2.1,7.7c-1.4,2.4-3.3,4.2-5.6,5.6c-2.4,1.4-4.9,2.1-7.7,2.1c-1.5,0-2.9-0.2-4.4-0.6 c0.8-1.2,1.3-2.3,1.6-3.3c0.1-0.5,0.5-1.9,1.1-4.2c0.3,0.5,0.8,1,1.5,1.4c0.7,0.4,1.5,0.6,2.3,0.6c1.6,0,3.1-0.5,4.3-1.4 c1.3-0.9,2.3-2.2,3-3.8c0.7-1.6,1-3.4,1-5.4c0-1.5-0.4-3-1.2-4.3c-0.8-1.3-2-2.4-3.5-3.3c-1.5-0.8-3.2-1.3-5.1-1.3 c-1.4,0-2.7,0.2-3.9,0.6c-1.2,0.4-2.3,0.9-3.1,1.5c-0.9,0.6-1.6,1.4-2.2,2.2c-0.6,0.8-1.1,1.7-1.3,2.6c-0.3,0.9-0.4,1.8-0.4,2.7 c0,1.4,0.3,2.6,0.8,3.7c0.5,1.1,1.3,1.8,2.3,2.2c0.4,0.2,0.7,0,0.8-0.4c0-0.1,0.1-0.3,0.2-0.6c0.1-0.3,0.1-0.5,0.2-0.6 c0.1-0.3,0-0.6-0.2-0.9c-0.7-0.8-1-1.8-1-3c0-2,0.7-3.8,2.1-5.2c1.4-1.5,3.2-2.2,5.5-2.2c2,0,3.6,0.5,4.7,1.6 c1.1,1.1,1.7,2.5,1.7,4.3c0,2.3-0.5,4.2-1.4,5.8s-2.1,2.4-3.5,2.4c-0.8,0-1.5-0.3-2-0.9c-0.5-0.6-0.6-1.3-0.5-2.1 c0.1-0.5,0.3-1.1,0.5-1.9c0.2-0.8,0.4-1.5,0.6-2.1c0.2-0.6,0.2-1.1,0.2-1.5c0-0.7-0.2-1.2-0.5-1.7c-0.4-0.4-0.9-0.7-1.5-0.7 c-0.8,0-1.5,0.4-2.1,1.1c-0.6,0.8-0.9,1.7-0.9,2.9c0,1,0.2,1.8,0.5,2.5l-2,8.4c-0.2,0.9-0.3,2.1-0.3,3.6c-2.8-1.2-5-3.1-6.7-5.6 S4.4,23.1,4.4,20c0-2.8,0.7-5.4,2.1-7.7S9.7,8,12.1,6.6s4.9-2.1,7.7-2.1c2.8,0,5.4,0.7,7.7,2.1s4.2,3.3,5.6,5.6 C34.6,14.6,35.3,17.2,35.3,20L35.3,20z"
      ></path>
    </symbol>
    <symbol id="icon-7b8b203a175397e05376f74d544a45d4" viewBox="0 0 40 40">
      <path
        d="M25,8.3C25.1,8.1,25,8,24.8,8l-3.4,0c-0.2,0-0.4,0.1-0.5,0.3l-8.4,14.2c-1.2,1.9-2.8,2.4-4.4,2.2C5.4,24.3,4,22.3,4,19.7 c0-2.6,2.2-4.8,4.8-4.8h5.3c0.2,0,0.4-0.1,0.5-0.3l1.9-3.3c0.1-0.2,0-0.3-0.2-0.3H8.8C3.9,11,0,14.9,0,19.7c0,2.3,0.9,4.8,2.6,6.5 c1.6,1.6,3.8,2.2,6.1,2.3c1.3,0,4.9,0,6.6-3C17.2,22.1,25,8.3,25,8.3L25,8.3z M37.4,13.3c-1.6-1.6-3.8-2.2-6.1-2.3 c-1.3,0-4.9,0-6.6,3C22.8,17.4,15,31.2,15,31.2c-0.1,0.2,0,0.3,0.2,0.3l3.4,0c0.2,0,0.4-0.1,0.5-0.3L27.5,17 c1.2-1.9,2.8-2.4,4.4-2.2c2.7,0.3,4.1,2.3,4.1,4.9c0,2.6-2.2,4.8-4.8,4.8h-5.3c-0.2,0-0.4,0.1-0.5,0.3l-1.9,3.3 c-0.1,0.2,0,0.3,0.2,0.3h7.6c4.8,0,8.8-3.9,8.8-8.8C40,17.4,39.1,14.9,37.4,13.3L37.4,13.3z"
      ></path>
    </symbol>
    <symbol id="icon-c83ee4da7ecbbbd33cd0166b89ce370f" viewBox="0 0 40 40">
      <path
        d="M37.3,18.9c0,0.7-0.2,1.4-0.6,2c-0.4,0.6-0.9,1.1-1.5,1.4c0.2,0.6,0.2,1.2,0.2,1.9c0,2-0.7,3.8-2.1,5.5 c-1.4,1.7-3.2,3-5.6,4s-4.9,1.5-7.7,1.5c-2.8,0-5.4-0.5-7.7-1.5s-4.2-2.3-5.6-4c-1.4-1.7-2.1-3.6-2.1-5.5c0-0.6,0.1-1.2,0.2-1.8 c-0.7-0.3-1.2-0.8-1.6-1.4c-0.4-0.6-0.6-1.3-0.6-2.1c0-1.1,0.4-2,1.1-2.7c0.7-0.8,1.7-1.1,2.7-1.1c1.1,0,2,0.4,2.8,1.2 c2.8-2,6.1-3,10-3.1l2.2-10.1c0-0.2,0.1-0.3,0.3-0.4c0.2-0.1,0.3-0.1,0.5-0.1l7.1,1.6c0.2-0.5,0.6-0.9,1-1.2c0.5-0.3,1-0.4,1.5-0.4 c0.8,0,1.5,0.3,2,0.8c0.6,0.6,0.9,1.2,0.9,2c0,0.8-0.3,1.5-0.9,2c-0.6,0.6-1.3,0.9-2,0.9c-0.8,0-1.5-0.3-2-0.8s-0.8-1.2-0.8-2 L22.7,4l-2,9.1c3.9,0.1,7.2,1.1,10,3.1c0.7-0.8,1.7-1.2,2.8-1.2c1.1,0,2,0.4,2.7,1.1C36.9,16.9,37.3,17.9,37.3,18.9L37.3,18.9z M10.7,22.8c0,0.8,0.3,1.5,0.8,2c0.6,0.6,1.2,0.9,2,0.9c0.8,0,1.5-0.3,2-0.9c0.6-0.6,0.9-1.3,0.9-2c0-0.8-0.3-1.5-0.9-2 c-0.6-0.6-1.3-0.8-2-0.8c-0.8,0-1.5,0.3-2,0.9C11,21.3,10.7,22,10.7,22.8z M26.4,29.6c0.1-0.1,0.2-0.3,0.2-0.5 c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.4,0.1-0.5,0.2c-0.5,0.5-1.3,0.9-2.3,1.2c-1,0.3-2.1,0.4-3.1,0.4 c-1,0-2.1-0.1-3.1-0.4c-1-0.3-1.8-0.7-2.3-1.2c-0.1-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.4,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.5 c0,0.2,0.1,0.4,0.2,0.5c0.6,0.6,1.3,1,2.3,1.3c1,0.3,1.8,0.5,2.4,0.6c0.6,0.1,1.2,0.1,1.8,0.1s1.2,0,1.8-0.1 c0.6-0.1,1.4-0.2,2.4-0.6C25.1,30.6,25.8,30.2,26.4,29.6L26.4,29.6z M26.3,25.7c0.8,0,1.5-0.3,2-0.9c0.6-0.6,0.8-1.3,0.8-2 c0-0.8-0.3-1.5-0.9-2c-0.6-0.6-1.2-0.9-2-0.9c-0.8,0-1.5,0.3-2,0.8s-0.9,1.2-0.9,2c0,0.8,0.3,1.5,0.9,2 C24.9,25.4,25.5,25.7,26.3,25.7z"
      ></path>
    </symbol>
    <symbol id="icon-6f1173b99f06aa4855b8fd26db52c969" viewBox="0 0 40 40">
      <path
        d="M26.9,26.3c0-0.4-0.2-0.8-0.6-1c-2.6-1.5-5.6-2.3-9-2.3c-1.8,0-3.7,0.2-5.8,0.7c-0.6,0.1-0.8,0.5-0.8,1 c0,0.3,0.1,0.5,0.3,0.7c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.3-0.1,0.7-0.2c1.8-0.4,3.4-0.5,4.9-0.5c3,0,5.7,0.7,8,2.1 c0.3,0.1,0.5,0.2,0.7,0.2c0.3,0,0.5-0.1,0.7-0.3C26.8,26.8,26.9,26.6,26.9,26.3L26.9,26.3z M28.8,22c0-0.5-0.2-0.9-0.7-1.2 c-3.2-1.9-6.8-2.8-11-2.8c-2,0-4.1,0.3-6.1,0.8c-0.6,0.2-1,0.6-1,1.3c0,0.3,0.1,0.6,0.4,0.9c0.2,0.2,0.5,0.4,0.9,0.4 c0.1,0,0.3-0.1,0.7-0.2c1.6-0.4,3.3-0.7,5-0.7c3.7,0,7,0.8,9.8,2.5c0.3,0.2,0.6,0.3,0.8,0.3c0.3,0,0.6-0.1,0.9-0.4 C28.7,22.6,28.8,22.3,28.8,22L28.8,22z M31,17c0-0.6-0.3-1.1-0.8-1.4c-1.7-1-3.6-1.7-5.9-2.2c-2.2-0.5-4.5-0.8-6.9-0.8 c-2.7,0-5.2,0.3-7.3,0.9c-0.3,0.1-0.6,0.3-0.8,0.5c-0.2,0.2-0.3,0.6-0.3,1c0,0.4,0.1,0.8,0.4,1c0.3,0.3,0.6,0.4,1,0.4 c0.1,0,0.4-0.1,0.8-0.2c1.8-0.5,3.8-0.7,6.2-0.7c2.1,0,4.2,0.2,6.2,0.7c2,0.5,3.7,1.1,5.1,1.9c0.3,0.2,0.5,0.2,0.8,0.2 c0.4,0,0.7-0.1,1-0.4C30.8,17.8,31,17.4,31,17L31,17z M35.1,20c0,2.8-0.7,5.4-2.1,7.7c-1.4,2.4-3.3,4.2-5.6,5.6 c-2.4,1.4-4.9,2.1-7.7,2.1c-2.8,0-5.4-0.7-7.7-2.1c-2.4-1.4-4.2-3.3-5.6-5.6S4.2,22.8,4.2,20s0.7-5.4,2.1-7.7S9.5,8,11.9,6.6 s4.9-2.1,7.7-2.1c2.8,0,5.4,0.7,7.7,2.1s4.2,3.3,5.6,5.6C34.4,14.6,35.1,17.2,35.1,20z"
      ></path>
    </symbol>
    <symbol id="icon-56a1e10494600ea42075d3aa573d5839" viewBox="0 0 40 40">
      <path
        d="M32.3,14.4c0,1.2-0.4,2.2-1.3,3.1s-1.9,1.3-3.1,1.3s-2.2-0.4-3.1-1.3c-0.9-0.9-1.3-1.9-1.3-3.1s0.4-2.2,1.3-3.1 c0.9-0.9,1.9-1.3,3.1-1.3s2.2,0.4,3.1,1.3S32.3,13.2,32.3,14.4z M18.5,27.6c0-1.2-0.4-2.3-1.3-3.2c-0.9-0.9-1.9-1.3-3.2-1.3 c-0.3,0-0.6,0-1,0.1l1.9,0.8c0.9,0.4,1.6,1,2,1.9c0.4,0.9,0.4,1.8,0,2.7c-0.4,0.9-1,1.6-1.9,1.9c-0.9,0.4-1.8,0.4-2.7,0 c-0.3-0.1-0.6-0.2-1.1-0.4c-0.5-0.2-0.9-0.3-1.1-0.4c0.4,0.7,0.9,1.3,1.6,1.7c0.7,0.4,1.5,0.7,2.3,0.7c1.2,0,2.3-0.4,3.2-1.3 C18.1,29.9,18.5,28.9,18.5,27.6L18.5,27.6z M33.3,14.4c0-1.5-0.5-2.8-1.6-3.8C30.7,9.5,29.4,9,27.9,9c-1.5,0-2.8,0.5-3.9,1.6 c-1.1,1.1-1.6,2.3-1.6,3.8c0,1.5,0.5,2.8,1.6,3.9c1.1,1.1,2.4,1.6,3.9,1.6c1.5,0,2.8-0.5,3.8-1.6C32.8,17.2,33.3,15.9,33.3,14.4z M36,14.4c0,2.2-0.8,4.2-2.4,5.7c-1.6,1.6-3.5,2.4-5.7,2.4l-7.8,5.7c-0.1,1.5-0.8,2.8-1.9,3.9s-2.5,1.6-4.1,1.6 c-1.4,0-2.7-0.5-3.8-1.4s-1.8-2-2.1-3.4L4,27.3v-7.7l6.9,2.8c0.9-0.6,2-0.9,3.1-0.9c0.2,0,0.4,0,0.6,0l5.1-7.3 c0-2.2,0.8-4.1,2.4-5.7s3.5-2.4,5.7-2.4c2.2,0,4.2,0.8,5.7,2.4C35.2,10.3,36,12.2,36,14.4z"
      ></path>
    </symbol>
    <symbol id="icon-694b338299bf630d8d2ec9bd42d31dbe" viewBox="0 0 40 40">
      <path
        d="M36.1,11.7v5c-3.3,0-6.3-1-8.8-2.8v12.9c0,6.5-5.2,11.7-11.7,11.7c-2.4,0-4.6-0.7-6.5-2c0,0,0,0,0,0 c-3.1-2.1-5.2-5.7-5.2-9.7c0-6.5,5.2-11.7,11.7-11.7c0.5,0,1.1,0,1.6,0.1v1.4c0,0,0,0,0,0v5c-0.5-0.2-1.1-0.3-1.6-0.3 c-2.9,0-5.3,2.4-5.3,5.4c0,2.1,1.2,3.9,2.9,4.8c0.7,0.4,1.5,0.6,2.4,0.6c2.9,0,5.3-2.4,5.3-5.3V1.5h6.3v0.8c0,0.2,0.1,0.5,0.1,0.7 c0.4,2.5,1.9,4.7,4,6c0,0,0.1,0.1,0.1,0.1c0,0-0.1-0.1-0.1-0.1c1.4,0.9,3,1.3,4.7,1.3V11.7"
      ></path>
    </symbol>
    <symbol id="icon-0c4db87eff374f0f1ef47f8f043f0132" viewBox="0 0 502 497">
      <path
        d="M194.82 485.87C86.05 466.36 12.42 382.35 7.77 271.55c-2.27-53.88 6.51-107.82 33.51-155C96.06 20.8 209.82-6.39 311.94 13.57q43.79 8.56 81.59 31.59c85.13 51.87 115.81 153.5 96.7 248.08-6.42 31.76-22.22 62.26-54.72 73.76-36.46 12.91-89.23 9.48-116.75-21.5a.7.69 45.3 0 0-1.02-.01c-13.02 14.03-30.41 22.7-49.19 26.29-71.14 13.59-137.26-28.55-145.72-102.84-3.93-34.54 1.29-67.9 21.79-96.28 37.8-52.33 111.37-61.7 165.69-30.16a.54.54 0 0 0 .81-.43l.49-8a.74.74 0 0 1 .74-.7l51.03-.11a.62.61-90 0 1 .61.62c-.12 45.14-.85 77.99-.76 112.45q0 .09-.33 11.82c-.54 19.06 2.61 46.16 27.2 47.83 9.39.64 19.88-2.37 24.91-11.14q5.87-10.23 6.53-20.6 1.51-23.46.93-47c-2.28-92.18-64.09-142.38-151.14-151-10.49-1.04-22.42-.8-33.63-.73-5.42.04-10.89 1.21-16.43 1.76-55.21 5.5-104 37.05-126.33 88.91q-6.9 16.04-10.47 33.11c-10.77 51.46-6.05 110.74 22.96 155.78 28.93 44.92 80.6 65.52 132.01 67.83 18.87.84 37.11.06 55.62-3.87q11.79-2.5 23.23-5.8 2.34-.67 3.07 1.48l20.68 60.79a.86.85-17.9 0 1-.56 1.09q-72.27 22.62-146.66 9.28Zm.33-225.82c1.83 19.91 15.62 38.26 35.18 43.59 24.14 6.57 59.22-.63 66.72-28.63q6.1-22.72 1.12-47.1c-3.09-15.19-14.83-29.63-29.91-33.48q-10.45-2.67-22.18-1.83c-40.35 2.89-54.37 30.09-50.93 67.45Z"
      ></path>
    </symbol>
    <symbol id="icon-a63c85b2b6ee333b6d6753e57c8dfe0a" viewBox="0 0 40 40">
      <path
        d="M37.6,27.1c0,0-0.3,2.4-1.4,3.5c-1.4,1.4-2.9,1.4-3.6,1.5c-5,0.4-12.4,0.4-12.4,0.4s-9.2-0.1-12.1-0.4 c-0.8-0.1-2.6-0.1-3.9-1.5c-1.1-1.1-1.4-3.5-1.4-3.5s-0.4-2.9-0.4-5.7v-2.7c0-2.9,0.4-5.7,0.4-5.7s0.3-2.4,1.4-3.5 C5.5,8,7,8,7.7,7.9c5-0.4,12.4-0.4,12.4-0.4h0c0,0,7.5,0,12.4,0.4C33.3,8,34.8,8,36.2,9.4c1.1,1.1,1.4,3.5,1.4,3.5s0.4,2.9,0.4,5.7 v2.7C37.9,24.2,37.6,27.1,37.6,27.1z M16.5,14.6l0,9.9l9.6-5L16.5,14.6z"
      ></path>
    </symbol>
    <symbol id="icon-a63c85b2b6ee333b6d6753e57c8dfe0b" viewBox="0 0 40 40">
      <path
        d="M15.703 31.995c-4.635-0.083-9-2.172-11.974-5.729-1.51-1.807-2.609-3.927-3.208-6.203-0.635-2.448-0.693-5.005-0.156-7.474 0.422-1.938 1.198-3.771 2.292-5.422 1.385-2.083 3.234-3.818 5.411-5.063 1.698-0.974 3.568-1.625 5.505-1.922 1.63-0.245 3.292-0.245 4.922 0.010 2.276 0.359 4.406 1.188 6.333 2.464 1.167 0.771 2.26 1.719 3.182 2.771 1.745 1.979 2.974 4.359 3.573 6.932 0.536 2.286 0.557 4.74 0.052 7.052-0.755 3.464-2.646 6.583-5.365 8.859-1.807 1.51-3.927 2.609-6.208 3.208-0.99 0.26-1.995 0.422-3.052 0.49-0.359 0.021-0.719 0.031-1.078 0.036l-0.229-0.005zM6.469 23.083c0.12-0.031 0.224-0.089 0.307-0.177 0.089-0.083 0.151-0.193 0.188-0.307 0.016-0.057 0.016-0.24 0.021-3.151 0.005-2.828 0.010-3.104 0.026-3.25 0.042-0.401 0.104-0.682 0.193-0.964 0.135-0.401 0.302-0.688 0.542-0.938 0.188-0.193 0.349-0.313 0.578-0.422 0.214-0.099 0.443-0.167 0.672-0.198 0.156-0.021 0.51-0.031 0.661-0.016 0.714 0.083 1.349 0.474 1.745 1.078 0.219 0.333 0.359 0.703 0.432 1.156l0.026 0.141 0.005 3.25c0.005 3.099 0.005 3.25 0.021 3.313 0.036 0.115 0.099 0.219 0.182 0.302 0.073 0.078 0.161 0.135 0.266 0.172 0.068 0.021 0.089 0.026 0.224 0.026 0.182 0.010 0.365-0.057 0.49-0.193 0.115-0.109 0.182-0.25 0.203-0.401 0.005-0.057 0.010-1.031 0.010-3.208 0-2.057 0-3.167 0.010-3.24 0.063-0.641 0.297-1.182 0.698-1.63 0.24-0.276 0.615-0.521 0.969-0.646 0.281-0.099 0.526-0.135 0.839-0.125 0.406 0.016 0.734 0.089 1.068 0.25 0.375 0.177 0.682 0.453 0.891 0.792 0.234 0.396 0.37 0.885 0.396 1.448 0.005 0.068 0.016 0.651 0.031 1.297 0.031 1.333 0.031 1.417 0.052 1.651 0.099 1.047 0.411 1.901 0.948 2.578 0.12 0.146 0.417 0.443 0.557 0.557 0.578 0.458 1.26 0.74 2.042 0.844 0.234 0.031 0.677 0.042 0.906 0.016 1.063-0.109 2.042-0.615 2.688-1.396 0.5-0.599 0.807-1.318 0.938-2.182 0.063-0.406 0.057-0.193 0.063-3.344 0.005-3.224 0.010-2.964-0.073-3.13-0.089-0.172-0.25-0.292-0.443-0.333-0.188-0.042-0.385-0.016-0.552 0.083-0.135 0.078-0.255 0.24-0.297 0.401-0.010 0.042-0.016 0.641-0.021 2.964-0.005 3.219 0 2.974-0.073 3.344-0.24 1.224-1.078 2.031-2.307 2.214-0.224 0.021-0.453 0.021-0.682-0.010-0.615-0.094-1.12-0.339-1.505-0.74-0.443-0.464-0.708-1.089-0.802-1.911-0.021-0.203-0.031-0.516-0.057-1.615-0.021-1.141-0.031-1.401-0.063-1.656-0.172-1.495-0.906-2.641-2.063-3.224-0.464-0.234-0.974-0.365-1.495-0.391-0.734-0.047-1.516 0.161-2.229 0.589-0.417 0.245-0.781 0.568-1.083 0.943l-0.052 0.068-0.036-0.052c-0.094-0.125-0.198-0.24-0.313-0.349-0.609-0.578-1.469-0.964-2.375-1.068-0.286-0.021-0.578-0.026-0.865 0-0.849 0.094-1.521 0.38-2.078 0.891-0.641 0.578-1.063 1.469-1.219 2.568-0.073 0.521-0.073 0.578-0.073 3.885l0.005 2.911 0.031 0.083c0.073 0.224 0.25 0.391 0.479 0.453 0.099 0.026 0.25 0.026 0.354 0zM22.458 11.266c0.354-0.063 0.635-0.323 0.729-0.672 0.026-0.13 0.031-0.266 0.010-0.401-0.068-0.323-0.297-0.583-0.609-0.688-0.589-0.198-1.198 0.245-1.193 0.865 0 0.073 0.005 0.146 0.016 0.193 0.104 0.474 0.563 0.786 1.047 0.703zM18.901 11.083c0.188-0.052 0.344-0.177 0.427-0.354 0.063-0.125 0.078-0.208 0.089-0.458 0.016-0.74 0.313-1.448 0.823-1.984 0.406-0.427 0.943-0.703 1.526-0.781 0.198-0.031 0.583-0.036 0.776-0.010 0.411 0.057 0.776 0.193 1.099 0.401 0.323 0.214 0.63 0.536 0.844 0.885 0.271 0.443 0.432 1.016 0.438 1.505 0 0.13 0.016 0.245 0.047 0.344 0.182 0.583 0.984 0.641 1.25 0.089 0.073-0.146 0.083-0.198 0.083-0.464s-0.016-0.427-0.057-0.688c-0.292-1.729-1.557-3.057-3.234-3.391-0.276-0.063-0.557-0.083-0.833-0.073-1.536-0.026-2.948 0.823-3.651 2.182-0.307 0.589-0.474 1.245-0.49 1.906-0.016 0.354 0.047 0.557 0.224 0.724 0.172 0.167 0.411 0.229 0.641 0.167z"
      ></path>
    </symbol>
    <symbol id="icon-discordapp" viewBox="0 -28.5 256 256">
      <path
        d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
      ></path>
    </symbol>
  </svg>
  <div id="wrapper">
    <div id="main">
      <div class="inner">
        <div id="container02" class="default container">
          <div class="wrapper">
            <div class="inner">
              <div id="image01">
                <span class="frame">{@render children()}</span>
              </div>
              <h1 id="text01">April Hall</h1>
              <p id="text03">
                Putting the fun in dys<a style="text-decoration:none" href="https://arithefirst.com/bee">fun</a>ctional
                since 2009
              </p>
              <ul id="buttons02" class="buttons">
                {#each links as link}
                  {@render button({
                    name: link.name,
                    url: link.url,
                    icon: link.icon,
                  })}
                {/each}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v30/KFOkCnqEu92Fr1Mu51xIIzI.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329,
      U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329,
      U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  ul {
    list-style: none;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :root {
    --background-height: 100vh;
    --site-language-alignment: left;
    --site-language-direction: ltr;
    --site-language-flex-alignment: flex-start;
    --site-language-indent-left: 1;
    --site-language-indent-right: 0;
    --viewport-height: 100vh;
  }

  #wrapper {
    -webkit-overflow-scrolling: touch;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: var(--viewport-height);
    overflow: hidden;
    position: relative;
    z-index: 2;
  }

  #main {
    --alignment: center;
    --flex-alignment: center;
    --indent-left: 1;
    --indent-right: 1;
    --border-radius-tl: 0;
    --border-radius-tr: 0;
    --border-radius-br: 0;
    --border-radius-bl: 0;
    align-items: center;
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    justify-content: center;
    max-width: 100%;
    position: relative;
    text-align: var(--alignment);
    z-index: 1;
    transition:
      opacity 0.625s ease 0s,
      transform 0.625s ease 0s;
  }

  #main > .inner {
    --padding-horizontal: 4rem;
    --padding-vertical: 4rem;
    --spacing: 1rem;
    --width: 42rem;
    border-radius: var(--border-radius-tl) var(--border-radius-tr) var(--border-radius-br) var(--border-radius-bl);
    max-width: 100%;
    position: relative;
    width: var(--width);
    z-index: 1;
    padding: var(--padding-vertical) var(--padding-horizontal);
  }

  #main > .inner > * {
    margin-top: var(--spacing);
    margin-bottom: var(--spacing);
  }

  #main > .inner > :first-child {
    margin-top: 0 !important;
  }

  #main > .inner > :last-child {
    margin-bottom: 0 !important;
  }

  #image01 .frame {
    width: 9rem;
    border-radius: 100%;
    transition: none;
  }

  #text01 {
    color: #242f40;
    font-family: 'Roboto', sans-serif;
    font-size: 2.75em;
    line-height: 1.125;
    font-weight: 400;
  }

  #text03 {
    color: rgba(36, 47, 64, 0.565);
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    line-height: 1.875;
    font-weight: 400;
  }

  .buttons {
    cursor: default;
    display: flex;
    justify-content: var(--flex-alignment);
    letter-spacing: 0;
    padding: 0;
  }

  .buttons li {
    max-width: 100%;
  }

  .buttons li a {
    align-items: center;
    justify-content: center;
    max-width: 100%;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    white-space: nowrap;
  }

  #buttons02 {
    gap: 1.25rem;
    flex-direction: column;
    flex-wrap: nowrap;
  }

  #buttons02:not(:first-child) {
    margin-top: 2.5rem !important;
  }

  #buttons02:not(:last-child) {
    margin-bottom: 2.5rem !important;
  }

  #buttons02 li a {
    display: inline-flex;
    width: 30rem;
    height: 3.25rem;
    line-height: 3.25rem;
    vertical-align: middle;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.025rem;
    padding: 0 1.625rem 0 calc(0.025rem + 1.625rem);
    font-size: 1em;
    font-weight: 400;
    border-radius: 2rem;
    box-shadow: 0 0.5rem 0.5rem 0 rgba(38, 37, 37, 0.541);
    flex-direction: row-reverse;
    justify-content: flex-end;
    transition:
      transform 0.125s ease,
      color 0.125s ease,
      background-color 0.125s ease,
      border-color 0.125s ease;
  }

  #buttons02 li a svg {
    display: block;
    fill: #ffffff;
    flex-grow: 0;
    flex-shrink: 0;
    height: 100%;
    min-width: 16px;
    width: 1.5em;
    margin-left: 0.5em;
    margin-right: calc(-0.125em + 0.025rem);
    transition: fill 0.125s ease;
  }

  #buttons02 li a .label {
    direction: var(--site-language-direction);
    overflow: hidden;
    flex-grow: 1;
    flex-shrink: 1;
    text-align: left;
    width: 100%;
  }

  #buttons02 .button {
    background-color: #ef959c;
    color: #ffffff;
  }

  #buttons02 .button:hover {
    background-color: #d7868d !important;
  }

  #buttons02 li a:hover {
    transform: scale(0.975);
  }

  .container {
    position: relative;
  }

  .container > .wrapper {
    vertical-align: top;
    position: relative;
    max-width: 100%;
    border-radius: inherit;
  }

  .container > .wrapper > .inner {
    vertical-align: top;
    position: relative;
    max-width: 100%;
    border-radius: inherit;
    text-align: var(--alignment);
  }

  #container02 {
    --alignment: center;
    --flex-alignment: center;
    --indent-left: 1;
    --indent-right: 1;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: rgba(254, 225, 237, 0.271);
    box-shadow: 0 1.375rem 3.25rem 0 rgba(0, 0, 0, 0.239);
    border-radius: 0.625rem;
  }

  #container02 > .wrapper > .inner {
    --gutters: 12rem;
    --padding-horizontal: 4.25rem;
    --padding-vertical: 4.25rem;
    --spacing: 1.875rem;
    padding: var(--padding-vertical) var(--padding-horizontal);
  }

  #container02 > .wrapper {
    max-width: 100%;
    width: 100%;
  }

  #container02.default > .wrapper > .inner > * {
    margin-bottom: var(--spacing);
    margin-top: var(--spacing);
  }

  #container02.default > .wrapper > .inner > *:first-child {
    margin-top: 0 !important;
  }

  #container02.default > .wrapper > .inner > *:last-child {
    margin-bottom: 0 !important;
  }

  @media (max-width: 736px) {
    #main > .inner {
      --padding-horizontal: 1.5rem;
      --padding-vertical: 1.5rem;
      --spacing: 1rem;
    }

    #image01 .frame {
      width: 9rem;
    }

    #text01 {
      letter-spacing: 0;
      width: 100%;
      font-size: 2.75em;
      line-height: 1.125;
    }

    #text03 {
      letter-spacing: 0;
      width: 100%;
      font-size: 1em;
      line-height: 1.875;
    }

    #buttons02 {
      gap: 1.25rem;
    }

    #buttons02:not(:first-child) {
      margin-top: 1.875rem !important;
    }

    #buttons02:not(:last-child) {
      margin-bottom: 1.875rem !important;
    }

    #buttons02 li a {
      letter-spacing: 0.025rem;
      padding-left: calc(0.025rem + 1.625rem);
      font-size: 1em;
    }

    #buttons02 li a svg {
      width: 1.5em;
    }

    #container02 > .wrapper > .inner {
      --gutters: 6rem;
      --padding-horizontal: 1.375rem;
      --padding-vertical: 2rem;
      --spacing: 1.875rem;
    }
  }

  @media (max-width: 480px) {
    #main > .inner {
      --spacing: 0.875rem;
    }

    #buttons02 li a {
      max-width: 32rem;
      width: 100%;
    }

    #container02 > .wrapper > .inner {
      --spacing: 1.640625rem;
    }
  }

  @media (max-width: 360px) {
    #main > .inner {
      --padding-horizontal: 1.125rem;
      --padding-vertical: 1.125rem;
      --spacing: 0.75rem;
    }

    #text01 {
      font-size: 2em;
    }

    #text03 {
      font-size: 1em;
    }

    #buttons02 {
      gap: 0.9375rem;
    }

    #container02 > .wrapper > .inner {
      --gutters: 4.5rem;
      --padding-horizontal: 1.03125rem;
      --padding-vertical: 1.5rem;
      --spacing: 1.40625rem;
    }
  }

  #background {
    height: 100vh;
    width: 100vw;
    background: rgb(202, 160, 220);
    background: -moz-linear-gradient(315deg, rgba(202, 160, 220, 1) 0%, rgba(239, 149, 156, 1) 100%);
    background: -webkit-linear-gradient(315deg, rgba(202, 160, 220, 1) 0%, rgba(239, 149, 156, 1) 100%);
    background: linear-gradient(315deg, rgba(202, 160, 220, 1) 0%, rgba(239, 149, 156, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#caa0dc",endColorstr="#ef959c",GradientType=1);
    position: fixed;
  }
</style>
