<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['color', 'hover'])
const color = ref('none')

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'cyan',
  'blue',
  'pink',
  'violet',
  'white',
  'black',
]

function setColor(c: string) {
  emit('color', c)
  color.value = c
}
</script>

<template>
  <div class="flex">
    <div
      v-for="c in colors"
      :id="c"
      @click="setColor(c)"
      class="color"
      :class="{ selected: c == color }"
      @mouseenter="$emit('hover', c)"
    ></div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  flex-direction: row;
  min-height: 160px;
  width: 80%;
  margin: 0px auto;
  gap: 0px 8px;
  transform: skew(-25deg);
}

.color {
  border: 1px solid black;
  transition: flex-grow 500ms;
  transition-delay: 50ms;
  flex-grow: 1;
  display: inline;
  min-height: 10%;
  /* background-blend-mode: multiply;
  background-size: 100% 100%;
  background-image: url('../assets/background.jpg'); */
}

.selected {
  flex-grow: 1.5;
}
.color:hover {
  flex-grow: 3;
  color: white;
  cursor: pointer;
}

#red {
  background-color: red;
}

#orange {
  background-color: orange;
}

#yellow {
  background-color: yellow;
}

#green {
  background-color: green;
}

#blue {
  background-color: blue;
}

#cyan {
  background-color: cyan;
}

#pink {
  background-color: violet;
}

#violet {
  background-color: purple;
}

#white {
  background-color: white;
}

#black {
  background-color: black;
}
</style>
