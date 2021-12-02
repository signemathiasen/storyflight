<script>
  import LogoType from "../assets/LogoWithType.astro";
  import Logo from "../assets/logo.astro";
  export let footerData;

  console.log(footerData.items);
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
  <svg class="footer-bg-logo">{@html Logo}</svg>
</ul>

<style lang="scss">
  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    li {
      color: var(--clr-white);
      list-style-type: none;
    }

    a {
      color: var(--clr-white);
    }
    .footer-bg-logo {
      position: absolute;
      color: var(--clr-white);
      opacity: 0.075;
      height: 900px;
      right: -5px;
    }
  }
</style>
