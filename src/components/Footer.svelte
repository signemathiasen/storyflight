<script>
  import LogoType from "../assets/LogoWithType.astro";
  import Logo from "../assets/logo.astro";
  import SoMeIcons from "./SoMeIcons.svelte";
  export let footerData;

</script>

<div>
  <svg>{@html LogoType}</svg>
  <SoMeIcons {footerData} />
  <svg class="footer-bg-logo">{@html Logo}</svg>
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 1024px) {
      flex-direction: row;
      justify-content: space-between;
    }

    svg {
      color: var(--clr-white);
      &.footer-bg-logo {
        position: absolute;
        opacity: 0.075;
        height: 900px;
        right: -5px;
        display: none;
        @media (min-width: 1024px) {
          display: block;
        }
      }
    }
  }
</style>
