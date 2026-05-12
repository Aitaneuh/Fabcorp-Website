<script setup>
import Icon from './Icon.vue'

defineProps({
    name: String,
    role: String,
    bio: String,
    image: String,
    avatarLeft: {
        type: Boolean,
        default: true,
    },
    links: Array,
})
</script>

<template>
    <section :class="{ reverse: !avatarLeft }">
        <div class="member-image">
            <img :src="image" :alt="name" />
            <div class="image-accent background-accent"></div>
        </div>

        <div class="member-info">
            <h2>{{ name }}</h2>
            <p>{{ bio }}</p>
            <div class="social-mini">
                <Icon v-for="link in links" :url="link" />
            </div>
        </div>
    </section>
</template>

<style scoped>
h2 {
    font-size: 2.5rem;
    margin: 0.5rem 0 1.5rem;
}

p {
    font-size: 1.1rem;
    line-height: 1.8;
}

section {
    display: flex;
    align-items: center;
    gap: 4rem;
    margin-bottom: 8rem;
    width: 100%;
}

.reverse {
    flex-direction: row-reverse;
}

.member-image {
    position: relative;
    flex: 1;
    max-width: 450px;
}

.member-image img {
    width: 100%;
    /* object-fit: cover; */
    border-radius: 20px;
    position: relative;
    z-index: 2;
    border: 1px solid #333;
}

.member-image div {
    position: absolute;
    top: 20px;
    left: -20px;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    z-index: 1;
    opacity: 0.2;
}

.row-reverse .image-accent {
    left: 20px;
}

.member-info {
    flex: 1.2;
}

.role-tag {
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 0.8rem;
}

.social-mini {
    display: flex;
    gap: 1.5rem;
    margin-top: 2rem;
}

@media (max-width: 900px) {
    .member-card,
    .row-reverse {
        flex-direction: column;
        text-align: center;
        gap: 2rem;
    }

    .member-image {
        max-width: 300px;
    }
}
</style>
