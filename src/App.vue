<script setup lang="ts">
import { ref } from 'vue'
import RainbowSelector from './components/RainbowSelector.vue'
import Project from './components/Project.vue'

const selected = ref('none')
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

function select(c: string) {
  selected.value = c
  color.value = c
  project.value += 1
}

function hover(c: string) {
  if (selected.value == 'none') {
    color.value = c
    project.value += 1
  }
}

const year = new Date().getFullYear()
</script>

<template>
  <div class="layout">
    <h1>Fabcorp</h1>
    <RainbowSelector @color="select" @hover="hover" />
    <h2>Nos projets en : {{ names[color] }}</h2>
    <div class="projects">
      <Project :color="color" :key="project" />
    </div>
  </div>
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

.projects {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px 12px;
  flex-grow: 1;
}
</style>
