<script>
  export let imageSrc;
  export let title;
  export let videoTypes;
  export let slug;
  export let canonicalURL;

  console.log(canonicalURL);
</script>

<article>
  <a href={canonicalURL.pathname + slug}>
    <img src={imageSrc} alt="alt text"/>
    <h2>{title}</h2>
  </a>
</article>

<style></style>
