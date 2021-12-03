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

<div class="soMe-icons">
  {#each footerItems as footerItem}
    {#if footerItem.url !== "#"}
      <a target="_blank" href={footerItem.url}>
        <svg>{@html icons[footerItem.title.toLowerCase()]}</svg>
      </a>
    {/if}
  {/each}
</div>

{#each footerItems as footerItem}
  {#if footerItem.url === "#"}
    <p>{footerItem.title}</p>
  {/if}
{/each}

<style lang="scss">
  .soMe-icons {
    margin: 20px;
  }
  p {
    color: var(--clr-white);
    text-align: center;
    margin: 40px 80px 80px;
    @media (min-width: 1024px) {
      margin: 0;
    }
  }

  svg {
    width: 30px;
    height: 30px;
    color: var(--clr-primary);
  }

  a {
    color: var(--clr-white);
  }
</style>
