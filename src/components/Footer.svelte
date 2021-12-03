<script>
  import LogoType from "../assets/LogoWithType.astro";
  import Logo from "../assets/logo.astro";
  import SoMeIcons from "./SoMeIcons.svelte";
  export let footerData;

  //   console.log(footerData.items);
</script>

<ul>
  <li><svg>{@html LogoType}</svg></li>
  <SoMeIcons {footerData} />
  <svg class="footer-bg-logo">{@html Logo}</svg>
</ul>

<style lang="scss">
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 1024px) {
      flex-direction: row;
    }

    li {
      color: var(--clr-white);
      list-style-type: none;
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
