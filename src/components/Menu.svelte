<script>
  import Line from "../assets/icons/Line.astro";
  import Facebook from "../assets/icons/Facebook.svelte";
  import Instagram from "../assets/icons/Instagram.svelte";
  import LinkedIn from "../assets/icons/LinkedIn.svelte";
  import Arrow from "../assets/icons/CircleWithArrow.svelte";
  import Menu from "../assets/icons/Menu.svelte";

  let menuActive = false;
  export let menuData;
  export let soMeData;
  const primaryMenu = menuData.items;
  const contactInformation = soMeData.items;
  
  const icons = {
    facebook: Facebook,
    instagram: Instagram,
    linkedin: LinkedIn,
  }
</script>

<button class="burger-wrap" on:click={() => (menuActive = !menuActive)}>
  {#if !menuActive}
  <Menu />
  {:else}
  <a class="a close_menu">Tilbage <span></span></a>
  <Arrow />
  {/if}
</button>

<div class="menu-container" class:menuActive>
  <div class="menu-wrap container container--small"> 
  <nav>
    <ul>
      {#each primaryMenu as menuItem}
        <li><a class="h1 menu_item" href={menuItem.url}>{menuItem.title}</a></li>  <!-- Change link in wordpress -->
      {/each}
    </ul>
  </nav> 

  <svg class="separation_line" width="245" height="456" viewBox="0 0 245 456" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line opacity="0.1" x1="240.479" y1="2.31822" x2="4.42951" y2="453.407" stroke="#F9F9F9" stroke-width="10"/>
  </svg>

  <div class="contact">
      <h3>Følg os</h3>
      <ul>
        {#each contactInformation as {title, url}, index}
          {#if index <= 2}
            <li><a href={url}>{title}</a></li>
            <svelte:component this={icons[title.toLowerCase()]}/>
          {/if}
        {/each}
      </ul>
  </div>
</div>
</div>

<style lang="scss">
  .menu-container {
    z-index:2;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    left: 0;
    background: var(--clr-secondary);

    visibility: hidden;
    opacity: 0;
    transition: 0.3s;

    overflow: auto;

    &.menuActive {
      visibility: visible;
      opacity: 1;
      transition: 0.3s;
    }

    .menu-wrap{
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media (min-width: 1000px) {
        align-items: center;
        flex-direction: row;
    }
      height: 100%;
      width: 100%;
    }

    h3, a {
       color: var(--clr-white);
    }

    
    nav {
      margin-bottom: 5rem;
      @media (min-width: 1000px) {
        margin-bottom: 0;
      }
      .menu_item{
        font-weight: 600;
        font-style: italic;
        font-size: 2.5rem; // change - global?
        @media (min-width: 768px) {
          font-size: 3.8rem; // change - global?
        }
      }
      ul {
        list-style-type: none;
        li{
          margin-bottom: 0.2rem;
        }
      }
    }

    .separation_line{
      display: none;
        @media (min-width: 1000px) {
        display: block;
      }
    }
  }

  .close_menu{
      color: var(--clr-white);
    }
  
  .burger-wrap{
    background: none;
    border: none;
    cursor: pointer;
    z-index: 3;
  }

  .contact {
    li {
      margin: 0.3rem 0;
    }
  }

</style>
