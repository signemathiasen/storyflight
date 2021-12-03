<script>
  import LogoType from "../assets/LogoWithType.astro";
  export let footerData;

  // console.log(footerData.items);
</script>

<ul>
  <li><svg>{@html LogoType}</svg></li>
  {#each footerData.items as footerItem}
    <li>
      {#if footerItem.url !== "#"}
        <a target="_blank" href={footerItem.url}>{footerItem.title}</a>
      {:else}
        {footerItem.title}
      {/if}
    </li>
  {/each}
</ul>

<style>
</style>
