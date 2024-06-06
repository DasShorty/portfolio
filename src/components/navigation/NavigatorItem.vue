<script>
  import {useRoute} from "vue-router";
  import {computed} from "vue";

  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      href: {
        type: String,
        required: true
      }
    },
    setup(props) {
      const route = useRoute()
      const isActive = computed(() => route.path === props.href)
      return {isActive}
    }
  }
</script>

<template>


  <router-link class="item" :to="href">
    <h2 class="text" :class="{ active: this.isActive}">{{title}}
      <hr :class="{'active-line': this.isActive}">
    </h2>
  </router-link>


</template>

<style scoped>



  hr {
    opacity: 0;
    width: 0;
    margin-left: -1px;
    transition: 1s ease-in-out;
    color: var(--passive-color);
  }

  .item:hover hr {
    width: 100%;
    opacity: 100%;
  }

  .item {
    text-decoration: none;
    margin-left: 30px;
    color: var(--passive-color);
    font-weight: lighter;
    text-transform: uppercase;
  }

  .text {
    transition: 1s;
    font-size: 18px;
    font-weight: normal;
    color: var(--passive-color);
  }

  .active {
    color: var(--agressive-color);
  }

  .active-line {
    width: 100%;
    opacity: 100%;
  }

  .item:hover h2 {
    color: var(--agressive-color);
  }

</style>