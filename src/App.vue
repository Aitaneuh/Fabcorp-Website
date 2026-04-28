<script setup lang="ts">
import { ref } from 'vue'
import RainbowSelector from './components/RainbowSelector.vue'
import Project from './components/Project.vue'

const color = ref('none')
const project = ref(0)

const names = {
  red: 'Rouge',
  orange: 'Orange',
  yellow: 'Jaune',
  green: 'Vert',
  cyan: 'Cyan',
  blue: 'Bleu',
  pink: 'Rose',
  violet: 'Violet',
  white: 'Blanc',
  black: 'Noir',
}

function update(c) {
  color.value = c
  project.value += 1
}
</script>

<template>
  <h1>Fabcorp</h1>
  <RainbowSelector @color="update" />
  <h2>Nos projets en : {{ names[color] }}</h2>
  <Project :color="color" :key="project" />
</template>

<style scoped>
h2 {
  text-align: center;
  margin-top: 5dvh;
}

h1 {
  text-align: center;
  font-size: 3rem;
}
</style>
