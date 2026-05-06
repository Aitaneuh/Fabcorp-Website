<script setup>
import { inject, computed } from 'vue'
import ProjectCard from './ProjectCard.vue'

const res = await fetch('https://n8n.fabcorp.ch/webhook/projects')
const projects = await res.json()
const selectedColor = inject('selectedColor', 'none')

const filtered = computed(() => {
  return projects.filter((project) =>
    project.colors.some((color) => color.color === selectedColor._value)
  )
})
</script>

<template>
  <div class="projects-grid">
    <ProjectCard v-for="project in filtered" :key="project.id" :project="project" :color="selectedColor" />
  </div>
</template>

<style scoped>
.projects-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
</style>