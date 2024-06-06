<script setup>

import WorkingComponent from "@/components/home/WorkingComponent.vue";
</script>

<template>
  <div class="head-line">
    <img src="@/assets/images/glowinglogo.png" alt="Glowing Logo">
    <div class="content">
      <p>Hey I'm Anthony.</p>
      <p>Fullstack Developer based in Germany.</p>
      <WorkingComponent></WorkingComponent>
    </div>
  </div>
</template>

<style scoped>


@media (max-width: 1000px) {

  .head-line {
    display: flex;
    flex-direction: column;
  }

  .head-line img {
    height: 100px;
    width: auto;
    overflow: clip;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }

  .content p {
    font-family: Consolas, sans-serif;
    font-size: 23px;
  }

}

.head-line {
  display: flex;
  align-items: center;
}

.content {
  display: flex;
  flex-direction: column;
}

img {
  height: 300px;
  width: auto;
  overflow: clip;
}

p {
  font-family: Consolas;
  font-size: 32px;
}
</style>