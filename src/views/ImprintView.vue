<script setup>

import ConsolasText from "@/components/util/ConsolasText.vue";
</script>

<template>

  <div class="center">
    <ConsolasText size="30px" text="Imprint"></ConsolasText>

    <div class="data">
      <p>Angaben gemäß §5 TMG</p>
      <p>Anthony Timmel</p>
      <p>Ostring 22</p>
      <p>02828 Görlitz</p>
      <p>Tel: +49 0179 4588074</p>
      <p>Mail: management@dasshorty.de</p>
    </div>

  </div>

</template>

<style scoped>

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.data {
  margin-top: 20%;
  font-weight: normal;
  margin-left: 50px;
  margin-right: 50px;
}

p {
  margin: 5px;
}

</style>