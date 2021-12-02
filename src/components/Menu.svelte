<script>
  let menuActive = false;
  export let menuData;

  console.log(menuData);
</script>

<button on:click={() => (menuActive = !menuActive)}> x </button>
<nav class:menuActive>
  <ul>
    <!-- {#each items as item}
      <li>{item.name}</li>
    {/each} -->
  </ul>
</nav>

<style>
  nav.menuActive {
    color: red;
  }
</style>
