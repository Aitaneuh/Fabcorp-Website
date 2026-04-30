<script setup lang="ts">
import { ref, provide } from 'vue'

const key = ref(0)
const selectedColor = ref('none')
const activeColor = ref('none')

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

function select(color: string) {
  selectedColor.value = color
  activeColor.value = color
  key.value++
}

function hover(color: string) {
  if (selectedColor.value == 'none') {
    activeColor.value = color
    key.value++
  }
}

provide('selectedColor', activeColor)
</script>

<template>
  <div class="layout">
    <h1>Fabcorp</h1>
    <RainbowSelector @color="select" @hover="hover" />
    <h2>Nos projets en : {{ names[activeColor] }}</h2>
    <div class="projects">
      <Suspense>
        <Project :key="key" />
      </Suspense>
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
