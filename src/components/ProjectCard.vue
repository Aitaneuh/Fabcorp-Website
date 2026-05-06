<script setup>
import { computed } from 'vue'

const props = defineProps({
    project: {
        type: Object,
        required: true
    },
    color: {
        type: String,
        required: true
    }
})

const bgColor = computed(() => props.color)

const textColor = computed(() => {
    const currentBg = bgColor.value.toLowerCase();

    const darkColors = ['pink', 'orange', 'red', 'black', 'blue', 'green', 'purple', 'navy'];
    if (darkColors.includes(currentBg)) return 'white';

    const lightColors = ['white', 'yellow', 'lime', 'cyan'];
    if (lightColors.includes(currentBg)) return 'black';

    return currentBg === 'white' ? 'black' : 'white';
})

const maxContributors = 4

function visitWebsite(url) {
    window.open(url)
}
</script>

<template>
    <div class="project-card">
        <div class="image-container">
            <img :src="project.image_url || '/images/placeholder.png'" :alt="project.title" />
            <div class="overlay">
                <button @click="visitWebsite(project.url)" v-if="project.url" class="visit-btn">
                    Visit Project
                </button>
            </div>
        </div>

        <div class="card-content">
            <h3 class="project-title">{{ project.title }}</h3>

            <div class="card-footer">
                <p>{{ project.contributors.length !== 1 ? 'Contributors:' : 'Contributor:' }}</p>
                <div class="contributors-stack">
                    <img v-for="contributor in project.contributors.slice(0, maxContributors)" :key="contributor.name"
                        :src="contributor.image_url" :alt="contributor.name" :title="contributor.name" class="avatar" />
                    <span v-if="project.contributors.length > maxContributors" class="more-count">
                        +{{ project.contributors.length - maxContributors }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.project-card {
    width: 350px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.project-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.image-container {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.project-card:hover .image-container img {
    transform: scale(1.15);
}

.overlay {
    position: absolute;
    inset: 0px;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.project-card:hover .overlay {
    opacity: 1;
}

.card-content {
    padding: 1.5rem;
}

.project-title {
    color: #fff;
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0px;
    margin-bottom: 1rem;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.contributors-stack {
    display: flex;
    align-items: center;
}

.avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid #1c1c1c;
    margin-left: -8px;
    transition: transform 0.2s ease;
}

.avatar:first-child {
    margin-left: 0px;
}

.avatar:hover {
    transform: translateY(-4px);
    z-index: 1;
}

.more-count {
    font-size: 0.8rem;
    color: #888;
    margin-left: 8px;
}

.visit-btn {
    background: v-bind(bgColor);
    color: v-bind(textColor);
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transform: translateY(10px);
    transition: all 0.3s ease;
}

.project-card:hover .visit-btn {
    transform: translateY(0);
}

.visit-btn:hover {
    background: v-bind(bgColor);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
}
</style>