<script>
  import Instagram from "../assets/icons/Instagram.astro";
  import Facebook from "../assets/icons/Facebook.astro";
  import LinkedIn from "../assets/icons/LinkedIn.astro";

  export let footerData;
  export let SoMeIcons;

  let footerItems = footerData.items;
  const icons = {
    facebook: Facebook,
    instagram: Instagram,
    linkedin: LinkedIn,
  };

  console.log(footerItems);
</script>

{#each footerData.items as footerItem}
  <li>
    {#if footerItem.url !== "#"}
      <a target="_blank" href={footerItem.url}>
        <svg>{@html icons[footerItem.title.toLowerCase()]}</svg>
      </a>
    {:else}
      {footerItem.title}
    {/if}
  </li>
{/each}

<style lang="scss">
  li {
    color: var(--clr-white);
    list-style-type: none;

    svg {
      width: 30px;
      height: 30px;
      color: var(--clr-primary);
    }

    a {
      color: var(--clr-white);
    }
  }
</style>
