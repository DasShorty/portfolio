<script>

import {computed} from "vue";

export default {
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    languages: {
      type: [],
      required: true
    },
    description: {
      type: String,
      required: true
    },
    linkText: {
      type: String,
      required: true
    },
    link: {
      type: String
    },
  },
  data() {
    return {
      imgUrl: computed(() => {
        return new URL(`../../assets/images/projects/${this.img}.png`, import.meta.url).href
      })
    }
  }
}

</script>

<template>

  <div class="project">

    <div class="title">
      <h2>{{ this.title }}</h2>
      <div class="languages">
        <div v-for="language in languages" class="language">
          <div class="language-container">
            <p>{{ language }}</p>
          </div>
        </div>
      </div>
    </div>

    <img :src="imgUrl" alt="Project Logo" class="image">

    <div class="text">

      <p class="description">
        {{ description }}
      </p>

      <div class="link">
        <a :href="link" target="_blank"><img class="link-img" src="@/assets/images/link.png"
                                                     alt="Link">{{ this.linkText }}</a>
      </div>

    </div>

  </div>

</template>

<style scoped>

.link-img {
  width: 20px;
  margin-right: 5px;
}

.text {
  margin: 30px 40px;
}

.link {
  display: flex;
  margin-top: 50px;
  align-items: center;
  flex-direction: column;
}

.link a {
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: var(--passive-color);
  color: black;
  font-weight: bolder;
  padding: 6px 10px;
  border-radius: 10px;
  text-transform: uppercase;
  text-decoration: none;
}

.project {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 10px 10px;
  padding: 30px 10px 10px;
  border-radius: 10px;
}

.title {
  display: flex;
  justify-content: center;
  font-family: Consolas, serif;
}

.languages {
  display: flex;
  align-items: center;
}

.language-container {
  background-color: var(--passive-color);
  border-radius: 4px;
  padding: 2px 6px;
  color: black;
  font-weight: bold;
  margin-left: 10px;
  font-family: Inter, serif;
}

.title {
  display: flex;
  margin-bottom: 60px;
}

.project {
  border: 1px solid var(--passive-color);
  width: 375px;
}

.image {
  width: 222px;
  height: 222px;
  text-align: center;
  border-radius: 10px;
}

@media (max-width: 1000px) {
  .project {
    margin: 20px 5px 5px;
  }
}
</style>