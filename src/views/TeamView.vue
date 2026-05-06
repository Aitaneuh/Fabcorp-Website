<script setup>
import TeamMember from '../components/TeamMember.vue'
</script>

<template>
    <div class="team-page">
        <header class="team-header">
            <h1>The Brains Behind <span class="accent">Fabcorp</span></h1>
            <p>
                Two developers, one vision. We combined our obsession for clean code to build a
                studio that prioritizes quality over quantity.
            </p>
        </header>

        <section class="team-list">
            <TeamMember
                name="Notbrioche"
                role="Founder"
                bio="You won't see him making two projects with the same stack. (He also hosts everything)"
                image="https://git.fabcorp.ch/avatars/571124f6d29c7c5747ac1a5720f3bcc3253a7d8830bbd39c34f56f32f3782634"
                :avatarLeft="true"
            />

            <TeamMember
                name="Aitaneuh"
                role="Co-Founder"
                bio='"Lazy genius", will sleep most of the time but will then eat chocolate and be more productive than an entire team.'
                image="https://git.fabcorp.ch/avatars/fff343f07e5eed4da52ebf0065c19c479a46deb885b0ba48ed1e75bd9644fde1"
                :avatarLeft="false"
            />
        </section>
    </div>
</template>

<style scoped>
.team-page {
    color: #fff;
    min-height: 100vh;
    padding-top: 80px;
}

.team-header {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 100px;
    padding: 60px 20px;
}

h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
}

.accent {
    color: #ff6d1f;
}

.team-header p {
    font-size: 1.2rem;
    color: #888;
}

.team-list {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px 100px;
}
</style>
