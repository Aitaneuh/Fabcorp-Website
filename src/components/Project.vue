<script setup>
import json from '../assets/projects.json'

const props = defineProps(['color'])

const filtered = json.filter((p) => p.color == props.color)
</script>

<template>
  <div>
    <div v-for="p in filtered" class="project">
      <h1>{{ p.title }}</h1>
      <img :src="'/images/' + p.image" />
      <div class="contributors">
        Contributors:
        <div v-for="contributor in p.contributors">{{ contributor }}</div>
      </div>
      <button>Visit</button>
    </div>
  </div>
</template>

<style scoped>
.project {
  max-width: 25dvw;
  padding: 1em;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
}

.project img {
  max-width: 30dvw;
}

.project button {
  max-width: 30%;
  margin: 1em auto;
  padding: 2px 12px;
}

.contributors div {
  display: inline;
  padding: 0px 4px;
}
</style>
