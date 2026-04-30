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
    <div class="hero page">
      <div class="title-box">
        <h1>
          <div class="orange-text">FAB</div>
          CORP
        </h1>
        <hr class="separator" />
        <p class="quote">"Code is poetry, performance is our passion."</p>
      </div>
    </div>
    <div class="page">
      <div class="rainbow-select-box">
        <RainbowSelector @color="select" @hover="hover" />
        <h2>Nos projets en : {{ names[activeColor] }}</h2>
        <div class="projects">
          <Suspense>
            <Project :key="key" />
          </Suspense>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  height: 100vh;
}
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
}

.title-box {
  width: min-content;
  padding: 3rem;
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  margin: 0;
  text-align: center;
  font-weight: 800;
  font-size: 10rem;
  display: flex;
  justify-content: center;
  line-height: 0.9;
}

.separator {
  border: 0;
  border-top: 1px solid white;
  margin: 1rem 0 2rem 0;
  width: 40rem;
}

.quote {
  margin: 0;
  font-style: italic;
  white-space: nowrap;
}

h2 {
  text-align: center;
  margin-top: 5dvh;
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

.orange-text {
  color: #ff6d1f;
}

.rainbow-select-box {
  padding-top: 5rem;
}
</style>
