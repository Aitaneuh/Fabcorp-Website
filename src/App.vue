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
          <div class="orange-text">fab</div>
          corp<nobr />
        </h1>
        <hr />
        <p class="quote">"Because we can code it"</p>
      </div>
    </div>
    <div class="page">
      <div class="rainbow-select-box">
        <RainbowSelector @color="select" @hover="hover" />
        <h2>Nos projets en : {{ names[activeColor] }}</h2>
        <div class="projects hero">
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  text-transform: uppercase;
  margin: 0px;
  text-align: center;
  font-weight: 800;
  font-size: 10rem;
  display: flex;
  justify-content: center;
  line-height: 0.9em;
}

hr {
  border-top: 1px solid white;
  margin: 1rem 0px 2rem 0px;
  width: 40rem;
}

.quote {
  margin: 0px;
  font-style: italic;
}

h2 {
  text-align: center;
  margin-top: 5dvh;
}

.projects {
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(4, 350px);
  gap: 24px 12px;
}

.projects div {
  align-self: center;
}

.orange-text {
  color: #ff6d1f;
}

.rainbow-select-box {
  padding-top: 5rem;
}
</style>
