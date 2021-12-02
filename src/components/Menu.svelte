<script>
  let menuActive = false;
  export let menuData;
  const primaryMenu = menuData.items;
  console.log(primaryMenu);
</script>

<button class="burger-wrap" on:click={() => (menuActive = !menuActive)}>
  <svg class="burger" viewBox="0 0 49 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.085 -0.000488281H48.223L46.0269 3.88848H10.8889L13.085 -0.000488281Z" fill="#000217"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M41.0704 12.4439H5.44409L7.92965 8.55493H43.556L41.0704 12.4439Z" fill="#000217"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M35.6766 20.9996H0.777344L3.21217 17.1106H38.1114L35.6766 20.9996Z" fill="#000217"/>
  </svg> 
</button>

<div class="menu-wrap" class:menuActive>
  <nav>
    <ul>
      {#each primaryMenu as menuItem}
        <li><a href={menuItem.url}>{menuItem.title}</a></li>  <!-- Change link in wordpress -->
      {/each}
    </ul>
  </nav> 
  <div class="contact">
      
  </div>
</div>

<style lang="scss">
  .menu-wrap {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    left: 0;

    visibility: hidden;
    opacity: 0;
    transition: 0.3s;

    &.menuActive {
      visibility: visible;
      opacity: 1;
      transition: 0.3s;
      pointer-events: none;
    }

    ul {
      list-style-type: none;
    }
  }

  .burger-wrap{
    background: none;
    border: none;
    cursor: pointer;
  }

  .burger {
    width: 33px;
    @media (min-width: 1000px){
      width: 40px;
    }
  }

</style>
