<script setup>

import ConsolasText from "@/components/util/ConsolasText.vue";
import ProjectComponent from "@/components/projects/ProjectComponent.vue";
</script>

<template>

  <div class="title">
    <ConsolasText text="Projects" size="38px"></ConsolasText>
  </div>

  <div class="projects">
    <ProjectComponent title="Teebot" link="https://laudymedia.de" link-text="LaudyMedia" description="A Discord Bot for the content creator LaudyTV. Stream and upload notifications as well as an integrated Twitch chat bot." :languages='["Java"]' img="teebot"></ProjectComponent>
    <ProjectComponent title="Special Events" link="https://shry.site/discord" link-text="Developer Discord" description="A Discord bot that was developed for community-connected events and is constantly being expanded." :languages='["Java"]' img="special-events"></ProjectComponent>
    <ProjectComponent title="Pridebot" link="https://shry.site/prideparty" link-text="PrideParty Discord" description="Discord Bot for the PrideParty Discord. Birthday, giveaway functions and much more." :languages='["Java"]' img="pridebot"></ProjectComponent>
    <ProjectComponent title="Portfolio" link="https://dasshorty.de" link-text="Website" description="This portfolio website" :languages='["VueJS"]' img="website"></ProjectComponent>
  </div>

</template>

<style scoped>
.title {
  display: flex;
  justify-content: center;
}

.projects {
  display: flex;
  justify-content: center;
}

@media (max-width: 1000px) {

  .projects {
    flex-direction: column;
    align-items: center;
    margin-left: 5px;
    margin-right: 5px;
  }

}
</style>