<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      I'm Anthony also known as DasShorty. <br><br>
      I'm an
      <a href="https://github.com/DasShorty" target="_blank" rel="noopener">Software Developer</a> and <br>
      <a href="https://twitch.tv/dasshortyy" target="_blank" rel="noopener">Streamer on Twitch</a>.

    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
