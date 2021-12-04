<script>
  export let KontaktForm;
</script>

<form name="contact" method="POST" data-netlify="true">
  <div class="name">
    <input type="text" id="name" name="name" required />
    <label class="subtitle" for="name">Navn</label>
  </div>
  <div class="email">
    <input type="text" id="email" name="email" required />
    <label class="subtitle" for="email">Email</label>
  </div>
  <div class="number">
    <input type="text" id="number" name="number" required />
    <label class="subtitle" for="number">Telefon</label>
  </div>
  <div class="desc">
    <input type="text" id="desc" name="desc" required />
    <label class="subtitle" for="desc">Beskrivelse</label>
  </div>
  <button type="submit" id="submit">Lad mig høre mere</button>
</form>

<style lang="scss">
  form {
    div {
      position: relative;
      display: flex;
      align-items: center;
      margin-top: 35px;
    }
    input {
      border: none;
      outline: none;
      border-bottom: 1px solid var(--clr-white);
      background: none;
      color: var(--clr-white);
      width: 100%;
      height: 50px;
      @media (min-width: 992px) {
        border-bottom: 1px solid var(--clr-secondary);
        color: var(--clr-secondary);
      }

      &:focus ~ label,
      &:valid ~ label {
        transform: translate(-12%, -100%) scale(0.75);
        opacity: 0.6;
      }
    }
    label {
      color: var(--clr-white);
      position: absolute;
      left: 0;
      transition: 0.2s;
      @media (min-width: 992px) {
        color: var(--clr-secondary);
      }
    }
    button {
      width: 100%;
      background: var(--clr-white);
      @media (min-width: 992px) {
        background: var(--clr-secondary);
        color: var(--clr-white);
      }
    }
  }
</style>
