<script>
  let menuActive = false;
  export let menuData;
  export let soMeData;
  const primaryMenu = menuData.items;
  const contactInformation = soMeData.items;
</script>

<button class="burger-wrap" on:click={() => (menuActive = !menuActive)}>
  {#if !menuActive}
  <svg class="burger" viewBox="0 0 49 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 -0.000488281H48.223L46.0269 3.88848H10.8889L13.085 -0.000488281Z" fill="#000217"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M41.0704 12.4439H5.44409L7.92965 8.55493H43.556L41.0704 12.4439Z" fill="#000217"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M35.6766 20.9996H0.777344L3.21217 17.1106H38.1114L35.6766 20.9996Z" fill="#000217"/>
  </svg> 
  {:else}
  <span class="a close_menu">Tilbage</span>
  {/if}
</button>

<div class="menu-wrap" class:menuActive>
  <nav>
    <ul>
      {#each primaryMenu as menuItem}
        <li><a class="h1 menu_item" href={menuItem.url}>{menuItem.title}</a></li>  <!-- Change link in wordpress -->
      {/each}
    </ul>
  </nav> 

  <svg width="245" height="456" viewBox="0 0 245 456" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line opacity="0.1" x1="240.479" y1="2.31822" x2="4.42951" y2="453.407" stroke="#F9F9F9" stroke-width="10"/>
  </svg>
    
  <div class="contact">
      <h3>Følg os</h3>
      <ul>
        {#each contactInformation as item, index}
          {#if index <= 2}
            <li><a href={item.url}>{item.title} <span></span></a></li>
          {/if}
        {/each}
      </ul>
  </div>
  
</div>

<style lang="scss">
  .menu-wrap {
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
    display: flex;
    justify-content: center;
    align-items: center;

    &.menuActive {
      visibility: visible;
      opacity: 1;
      transition: 0.3s;
    }

    h3 {
       color: var(--clr-white);
    }

    ul {
      list-style-type: none;
      a {
        color: var(--clr-white);
      }
    }

    .menu_item{
      font-weight: 600;
      font-style: italic;
    }
  }

  .close_menu{
      color: var(--clr-white);
    }
  
  .burger-wrap{
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1;
  }

  .burger {
    width: 33px;
    @media (min-width: 1000px){
      width: 40px;
    }
  }

  .contact {
    li {
      margin: 0.3rem 0;
    }
  }

</style>
