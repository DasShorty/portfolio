<script>

import ConsolasText from "@/components/util/ConsolasText.vue";
import AboutText from "@/components/about/AboutText.vue";

export default {
  components: {AboutText, ConsolasText}
}

</script>

<template>

  <div class="title">
    <ConsolasText text="About Me" size="38px"></ConsolasText>
  </div>

 <div class="data">
   <div class="even">
     <AboutText class="about" id="activity" title="What I'm doing?" text-one="🏢 I'm currently a trainee software engineer."
                text-two="🧑‍💼 Beyond my primary role, I manage projects or communities for content creators."></AboutText>
     <AboutText class="about"  id="languages" title="Which programming languages do I use?"
                text-one="🛜 For the entirely backend site i use Java with the Spring Framework but also for Discord Bots or Minecraft Plugins"
                text-two="🖼️ In the frontend (Websites) i use VueJS. This is a JavaScript Framework."></AboutText>
   </div>

   <div class="bottom">
     <AboutText class="about"  id="projects" title="What I’m using to run such projects"
                text-one="🧑‍💻 Since 2021 I had discovered Docker through DerBanko. Docker is an virtualization software that allows us to run programs that are isolated to other programs."
                text-two="🛡️ But also CloudFlare is a huge part of my daily development because it can link easily Docker Containers with the Internet just so that customers can use it."></AboutText>

   </div>
 </div>
</template>

<style scoped>

.title {
  display: flex;
  justify-content: center;
}

.data {
  margin-top: 120px;
}

.even {
  display: flex;
  justify-content: space-around;
}

.bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
}

#activity {
  width: 450px;
}

#languages {
  width: 671px;
}

#projects {
  width: 928px;
}

@media (max-width: 1000px) {

  .even {
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }

  .data {
    margin-top: 20px;
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
  }

  #activity, #languages, #projects {
    width: 100%;
  }

  .bottom {
    margin-top: 20px;
  }
}

</style>