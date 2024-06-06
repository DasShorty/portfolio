<script>

export default {
  props: {
    text: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
    }
  },
  mounted() {
    document.getElementById("text").style.fontSize = this.size;
  }
}

</script>

<template>

  <p id="text">{{text}}</p>

</template>

<style scoped>

p {
  font-family: Consolas,serif;
  color: white;
}

</style>