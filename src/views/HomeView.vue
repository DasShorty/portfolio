<script setup>
import HomeTitle from "@/components/HomeTitle.vue";
</script>

<template>
  <div class="frame-fill">
    <div class="frame-center">
      <HomeTitle></HomeTitle>
    </div>
  </div>

</template>

<style scoped>

.frame-fill {
  height: 85%;
  width: 100%;
  position: absolute;
}

.frame-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

</style>