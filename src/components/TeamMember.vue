<script setup>
defineProps({
    name: String,
    role: String,
    bio: String,
    image: String,
    avatarLeft: {
        type: Boolean,
        default: true,
    },
})
</script>

<template>
    <div class="member-card" :class="{ 'row-reverse': !avatarLeft }">
        <div class="member-image">
            <img :src="image" :alt="name" />
            <div class="image-accent"></div>
        </div>

        <div class="member-info">
            <span class="role-tag">{{ role }}</span>
            <h2>{{ name }}</h2>
            <p>{{ bio }}</p>
            <div class="social-mini">
                <!-- Add small social icons or links here if needed -->
            </div>
        </div>
    </div>
</template>

<style scoped>
.member-card {
    display: flex;
    align-items: center;
    gap: 4rem;
    margin-bottom: 8rem;
    width: 100%;
}

.row-reverse {
    flex-direction: row-reverse;
}

.member-image {
    position: relative;
    flex: 1;
    max-width: 450px;
}

.member-image img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 20px;
    position: relative;
    z-index: 2;
    filter: grayscale(20%);
    border: 1px solid #333;
}

.image-accent {
    position: absolute;
    top: 20px;
    left: -20px;
    width: 100%;
    height: 100%;
    background-color: #ff6d1f;
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
    color: #ff6d1f;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 0.8rem;
}

h2 {
    font-size: 2.5rem;
    margin: 0.5rem 0 1.5rem;
    color: #fff;
}

p {
    font-size: 1.1rem;
    color: #bbb;
    line-height: 1.8;
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
