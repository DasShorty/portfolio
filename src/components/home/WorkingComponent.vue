<script setup>

</script>

<template>
  <div class="no-empty-space">
    <div class="working">
      <p>Working for</p>
      <div class="profiles">
        <a href="https://twitch.tv/alterrativ" target="_blank"><img src="@/assets/images/profiles/alterrativ.jpg"
                                                                    alt="Alterrativ Logo"></a>
        <a href="https://twitch.tv/laudytv" target="_blank"><img src="@/assets/images/profiles/laudytv.jpg"
                                                                 alt="LaudyTV Logo"></a>
        <a href="https://twitter.com/NurKai_" target="_blank"><img src="@/assets/images/profiles/nurkai.jpg"
                                                                   alt="NurKai Logo"></a>
      </div>
    </div>
  </div>
</template>

<style scoped>

@media (max-width: 1000px) {
  .working {
    display: flex;
    align-items: center;
    flex-direction: row;
    border: 1px solid var(--agressive-color);
    border-radius: 10px;
    justify-content: center;
    margin-top: 10px;
    padding: 10px 20px;
  }

  .working p {
    font-family: Inter,serif;
    font-size: 18px;
    color: var(--passive-color);
    text-transform: uppercase;
  }

  .profiles img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin-left: 20px;
    transition: 0.2s;
  }
}

.no-empty-space {
  display: flex;
}

.working {
  display: flex;
  align-items: center;
  flex-direction: row;
  border: 1px solid var(--agressive-color);
  border-radius: 10px;
  justify-content: flex-start;
  margin-top: 40px;
  padding: 10px 20px;
}

p {
  font-family: Inter,serif;
  font-size: 23px;
  color: var(--passive-color);
  text-transform: uppercase;
}

.profiles img {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  margin-left: 20px;
  transition: 0.2s;
}


.profiles img:hover {
  transform: scale(1.1);
}

</style>