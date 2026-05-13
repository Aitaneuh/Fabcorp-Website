<script setup>
import { ref, onMounted } from 'vue'

const devCount = ref(0)

onMounted(async () => {
    try {
        const res = await fetch('https://api.fabcorp.ch/webhook/contributors')
        const data = await res.json()

        if (Array.isArray(data)) {
            devCount.value = data.length
        }
    } catch (error) {
        console.error('Failed to fetch developer count:', error)
    }
})
</script>

<template>
    <header class="hero">
        <img src="/images/fabcorp_logo_small_white.png" alt="Fabcorp Logo" />
        <h1>Because coding is <span class="accent">Fun</span></h1>
        <p>
            Fabcorp is a fictive company made by {{ devCount }} students so they can build things
            together under a team name.
        </p>
    </header>

    <section class="about-grid">
        <div class="grid-item main">
            <h2 class="accent">Our Goal</h2>
            <p>
                As a student project, Fabcorp aims to do various projects using a huge set of
                different technos to gather as much experience as possible and to learn a complete
                palette of skills.
            </p>
        </div>

        <div class="grid-item">
            <h3 class="accent">Productivity</h3>
            <p>We try to code a bit everyday to have a kind of stable rythm.</p>
        </div>

        <div class="grid-item">
            <h3 class="accent">Innovation</h3>
            <p>There is no innovation here but at least we have a great time coding.</p>
        </div>
    </section>

    <section class="banner">
        <div>
            <div class="stat">
                <span class="stat-number accent">{{ devCount }}</span>
                <span class="stat-label">Student Developers</span>
            </div>
            <div class="stat">
                <span class="stat-number accent">+200%</span>
                <span class="stat-label">Learning Curve</span>
            </div>
            <div class="stat">
                <span class="stat-number accent">enough</span>
                <span class="stat-label">Passion</span>
            </div>
        </div>
    </section>

    <section class="hero">
        <h2>Curious about who is behind the screen?</h2>
        <router-link to="/team" class="button background-accent"> Meet the team </router-link>
    </section>
</template>

<style scoped>
h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    letter-spacing: -1px;
}

header img {
    max-width: 120px;
    margin-bottom: 2rem;
}

header p {
    font-size: 1.25rem;
    color: #bbb;
    max-width: 700px;
    margin: 0 auto;
}

.about-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    max-width: 1100px;
    margin: 40px auto;
    padding: 0 20px;
}

.grid-item {
    background: #1a1a1a;
    padding: 40px;
    border-radius: 16px;
    border: 1px solid #333;
    transition: border-color 0.3s ease;
}

.grid-item:hover {
    border-color: var(--accent-color);
}

.grid-item.main {
    grid-column: span 2;
}

.grid-item h2,
.grid-item h3 {
    margin-bottom: 1rem;
}

.banner {
    background-color: #1a1a1a;
    padding: 60px 0;
    margin: 60px 0;
}

.banner > div {
    display: flex;
    justify-content: space-around;
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: bold;
}

.stat-label {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.8rem;
    color: #777;
}

.button {
    color: var(--text-color);
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 8px;
    display: inline-block;
}

.button:hover {
    background-color: var(--accent-hover-color);
}

@media (max-width: 768px) {
    .about-grid {
        grid-template-columns: 1fr;
    }

    .grid-item.main {
        grid-column: span 1;
    }

    h1 {
        font-size: 2.5rem;
    }

    .banner > div {
        flex-direction: column;
        gap: 40px;
    }
}
</style>
