<script setup>
import json from '../assets/projects.json'

const props = defineProps(['color'])

const filtered = json.filter((p) => p.color == props.color)

function visitWebsite(url) {
  window.open(url)
}
</script>

<template>
  <div v-for="p in filtered" class="project">
    <h1>{{ p.title }}</h1>
    <img :src="'/images/' + p.image" v-if="p.image" />
    <img src="/images/placeholder.png" v-else />
    <div class="contributors">
      <div>Contributors:</div>
      <img
        v-for="contributor in p.contributors"
        :src="'/images/contributors/' + contributor.toLowerCase() + '.jpg'"
        :alt="contributor"
        :title="contributor"
      />
    </div>
    <button @click="visitWebsite(p.url)">Visit</button>
  </div>
</template>

<style scoped>
.project {
  max-width: 60dvw;
  padding: 1em;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
}

.project img {
  max-height: 30dvh;
  margin: 0px auto;
}

.project button {
  max-width: 40%;
  margin: 1em auto;
  padding: 5px 20px;
  border-radius: 8px;
  border: 0px;
}

.contributors {
  margin: 8px 0px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0px 7px;
}

.contributors div {
  display: inline;
  padding: 0px 4px;
}

.contributors img {
  max-height: 35px;
  border-radius: 100%;
  display: inline;
  margin: 0px;
}
</style>
