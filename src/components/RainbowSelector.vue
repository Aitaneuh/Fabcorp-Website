<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['color', 'hover'])
const activeColor = ref('none')

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

function setColor(color: string) {
    emit('color', color)
    activeColor.value = color
}
</script>

<template>
    <div class="colors-row">
        <div
            v-for="color in colors"
            :id="color"
            @click="setColor(color)"
            class="color"
            :class="{ selected: color == activeColor }"
            @mouseenter="$emit('hover', color)"
        ></div>
    </div>
</template>

<style scoped>
.colors-row {
    display: flex;
    flex-direction: row;
    min-height: 160px;
    width: 80%;
    margin: 0px auto;
    gap: 0px 8px;
    transform: skew(-25deg);
}

.color {
    border-radius: 10px;
    transition: flex-grow 500ms;
    transition-delay: 50ms;
    flex-grow: 1;
    display: inline;
    min-height: 10%;
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
