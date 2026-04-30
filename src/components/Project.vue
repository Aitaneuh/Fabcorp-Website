<script setup>
import { inject } from 'vue'

const res = await fetch('https://n8n.fabcorp.ch/webhook/projects')

const projects = await res.json()
const selectedColor = inject('selectedColor', 'none')

const filtered = projects.filter((project) =>
  project.colors.find((color) => {
    return color.color == selectedColor._value
  }),
)

function visitWebsite(url) {
  window.open(url)
}
</script>

<template>
  <div v-for="project in filtered" class="project">
    <h1>{{ project.title }}</h1>
    <img :src="project.image_url" v-if="project.image_url" />
    <img src="/images/placeholder.png" v-else />
    <div class="contributors">
      <div v-if="project.contributors.length != 1">Contributors:</div>
      <div v-else>Contributor:</div>
      <img
        v-for="contributor in project.contributors"
        :src="contributor.image_url"
        :alt="contributor.name"
        :title="contributor.name"
      />
    </div>
    <button @click="visitWebsite(project.url)" v-if="project.url">Visit</button>
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
