<script>

export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}

</script>

<template>

  <div class="footer">

    <div class="center">
      <p>©️ COPYRIGHT {{this.year}}</p>
      <router-link to="imprint" class="link"><p>Imprint</p></router-link>
    </div>

  </div>

</template>

<style scoped>

.footer {
  position: absolute;
  bottom: 10px;
  width: 100%;
}

.center {
  display: flex;
  font-size: 12px;
  justify-content: center;
}

.link {
  text-decoration: none;
}

p {
  padding: 5px;
  color: var(--passive-color);
}

</style>