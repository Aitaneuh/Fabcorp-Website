<script setup>
import { ref, computed, onMounted } from 'vue'

const contributorsData = ref([])
const isLoading = ref(true)

onMounted(async () => {
    try {
        const res = await fetch('https://api.fabcorp.ch/webhook/contributors')
        const data = await res.json()

        contributorsData.value = data.map((contributor) => ({
            ...contributor,
            avatarLeft: contributor.id % 2 !== 0,
        }))
    } catch (error) {
        console.error('Failed to fetch contributors:', error)
    } finally {
        isLoading.value = false
    }
})

const contributors = computed(() => {
    return [...contributorsData.value].sort((a, b) => a.id - b.id)
})
</script>

<template>
    <div class="page">
        <header class="hero">
            <h1>The Brains Behind <span class="accent">Fabcorp</span></h1>
            <p>
                Two developers, one vision. We combined our obsession for clean code to build a
                studio that prioritizes quality over quantity.
            </p>
        </header>

        <section v-if="!isLoading">
            <TeamMember
                v-for="contributor in contributors"
                :key="contributor.id"
                :name="contributor.name"
                :bio="contributor.bio"
                :image="contributor.image_url"
                :avatarLeft="contributor.avatarLeft"
                :links="contributor.links"
            />
        </section>

        <section v-else>
            <p>Loading the team...</p>
        </section>
    </div>
</template>

<style scoped>
h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
}

header p {
    font-size: 1.25rem;
    color: #bbb;
    max-width: 700px;
    margin: 0 auto;
}

section {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px 100px;
}
</style>
