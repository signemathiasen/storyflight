<script>
  export let filter;
  export let filterTypes = [];

  function setFilter(id) {
    filter = id;
  }
</script>

{#each filterTypes as { name, slug, id }}
  <button
    on:click={() => setFilter(id)} 
    class:selected={id === filter}>
    {name}
  </button>
{/each}

<style>

button.selected {
  color: orange;
}

</style>
