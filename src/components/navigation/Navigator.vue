<script setup>

  import NavigatorItem from "@/components/navigation/NavigatorItem.vue";
</script>

<template>

  <div class="nav">

    <div class="nav-content">

      <div class="nav-left">

        <router-link to="/"><img src="../../assets/images/logo.png" alt="Logo"></router-link>
        <div class="nav-links">
          <NavigatorItem title="About Me" href="/about"></NavigatorItem>
          <NavigatorItem title="Projects" href="/projects"></NavigatorItem>
        </div>

      </div>

      <div class="nav-right">

      </div>

    </div>

  </div>

</template>

<style scoped>

  .nav-links {
    display: flex;
    margin-left: 10px;
  }

  .nav-left {
    display: flex;
    align-items: center;
  }

  .nav-left img {
    width: 60px;
    height: 60px;
    border-radius: 100px;
    margin-left: 10px;
  }

  .nav-content {
    margin-left: 10px;
    margin-right: 10px;
  }

  .nav {
    display: flex;
    flex-direction: column;
    transition: 1s;
    height: 90px;
    width: 100%;
    justify-content: center;
  }
</style>