<script>
import ConsolasText from "@/components/util/ConsolasText.vue";

export default {
  components: { ConsolasText },
  props: {
    title: {
      type: String,
      required: true
    },
    textOne: {
      type: String,
      required: true
    },
    textTwo: {
      type: String,
      required: true
    }
  }
};
</script>

<template>
  <div class="text-div">
    <h2>{{ title }}</h2>
    <div class="text-p">
      <p>{{ textOne }}</p>
    </div>
    <div class="text-p">
      <p>{{ textTwo }}</p>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-family: Consolas, serif;
  font-weight: normal;
  margin-bottom: 10px;
}

.text-p {
  width: 100%; /* Ensure the div takes full width */
}

p {
  font-size: 20px;
  padding-top: 10px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word; /* Additional fallback for breaking long words */
}

@media (max-width: 1000px) {
  .text-div {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
    width: 100%; /* Ensure the container takes full width */
  }

  .text-div h2 {
    display: block;
    width: 90%; /* Ensure the title takes 90% width */
  }

  .text-div p {
    width: 90%; /* Ensure the paragraphs take 90% width */
    font-size: 18px;
  }
}
</style>
