<script lang="ts">
   interface Props {
      name: string;
      src: string;
      alt: string;
      href: string;
      desc: string;
      tags: string[];
   }

   let {
      name,
      src,
      alt,
      href,
      desc,
      tags
   }: Props = $props();
</script>

<a {href}
   class="card bg-base-200 cursor-pointer relative grid w-11/12
   md:w-64 my-3 md:hover:scale-[1.025] md:linear md:transition-all"
   target="_blank"
>
    <div class="card">
        <figure>
            <img {src} {alt} class="object-cover w-full h-full bg-base-300"/>
        </figure>
        <div class="card-body">
            <h2 class="card-title">{name}</h2>
            <p>{desc}</p>
            <div class="card-actions justify-end">
                {#each tags as tag}
                    <div class="badge badge-outline">{tag}</div>
                {/each}
            </div>
        </div>
    </div>
</a>