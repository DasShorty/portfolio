<script setup>
import PlatformItem from "@/components/PlatformItem.vue";
</script>

<template>
  <PlatformItem>

    <template #icon>
      <img src="../assets/github.svg" alt="Logo" width="40" height="40">
    </template>

    <template #heading><a href="https://github.com/DasShorty" target="_blank" rel="noopener" class="heading">Github</a></template>

    A lot of my projects that i did can be found on
    <a href="https://github.com/DasShorty" target="_blank" rel="noopener">Github</a>
  </PlatformItem>
  <PlatformItem>

    <template #icon>
      <img src="../assets/x.svg" alt="Logo" width="40" height="40" style="background-color: white">
    </template>

    <template #heading><a href="https://twitter.com/DasShorty" target="_blank" rel="noopener" class="heading">Twitter</a></template>

    You can contact me directly threw
    <a href="https://twitter.com/DasShorty" target="_blank" rel="noopener">Twitter</a>
  </PlatformItem>
  <PlatformItem>

    <template #icon>
      <img src="../assets/discord.svg" alt="Logo" width="40" height="40" >
    </template>

    <template #heading>
      <a href="#" class="heading">Discord</a>
    </template>

    currently no Community Discord Server is persistent
  </PlatformItem>
</template>
