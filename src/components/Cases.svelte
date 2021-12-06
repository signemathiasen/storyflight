<script>  
  import Filter from './Filter.svelte';
  import Case from './Case.svelte';

  export let cases;
  export let videoTypes;
  export let canonicalURL;

  let filter = 11; // 11 is the ID of "alle videoer" videotype from WP
  $: filteredCases = cases.filter(item => item.videotypes.find(id => id === filter));
</script>

<Filter 
  bind:filter={filter}
  filterTypes={videoTypes} 
/>

<section class="case-grid">
  {#each filteredCases as { 
    cases_title: title, 
    image: { guid: image }, 
    videotypes,
    slug
  }}
    <Case 
      title={title}
      imageSrc={image}
      videoTypes={videoTypes}
      slug={slug}
      canonicalURL={canonicalURL}
    />
  {/each}
</section>



<style>

  .case-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }

</style>
