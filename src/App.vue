<script setup>
import { RouterView } from 'vue-router'
import Navigator from "@/components/navigation/Navigator.vue";
import Footer from "@/components/footer/Footer.vue";
</script>

<template>
  <div class="page">
    <Navigator class="navigator"></Navigator>
    <RouterView class="view" />
    <Footer class="footer"></Footer>
  </div>
</template>

<style scoped>

</style>
