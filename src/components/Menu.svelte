<script>
    let menuActive = false;
</script>
  
  <button on:click={() => (menuActive = !menuActive)}>
    x       
  </button>
  <nav>
    <ul>
      <li>test</li>
    </ul>
  </nav>
  
  <style>
    nav.menuActive{
    color: red;
}
  </style>
  