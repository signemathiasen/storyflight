<script>
  import { cursorHover } from "../helpers/cursorHover";

  function cursorMove(e) {
    let cursor = document.querySelector("#cursor");
    cursor.style.left = e.pageX - 10.7 + "px";
    cursor.style.top = e.pageY - 10.5 + "px";
  }
  function mouseDown() {
    console.log("clicked");
    let cursor = document.querySelector("#cursor");
    cursor.style.transform = "scale(1.5)";
  }
  function mouseUp() {
    console.log("up");
    let cursor = document.querySelector("#cursor");
    cursor.style.transform = "scale(1)";
  }
</script>

<svelte:window on:mousemove={cursorMove} on:mousemove={cursorHover} on:mousedown={mouseDown} on:mouseup={mouseUp} />

<div id="cursor" />

<style>
  #cursor {
    width: 30px;
    height: 30px;
    border: 1px solid var(--clr-primary);
    border-radius: 100%;
    position: absolute;
    /* transition: 0.1s ease-out; */
    transition: transform 0.25s;
    z-index: 2;
    pointer-events: none;
  }
</style>
