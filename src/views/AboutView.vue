<script setup>
</script>

<template>
    <div class="about-container">
        <section class="about-hero">
            <img src="/images/fabcorp_logo_small_white.png" alt="Fabcorp Logo" class="about-logo" />
            <h1>Elevating Code to <span class="accent">Art</span></h1>
            <p class="hero-subtitle">
                Fabcorp is a boutique technical collective specializing in high-performance digital solutions.
                When dedication meets talent, we build the future.
            </p>
        </section>

        <section class="about-grid">
            <div class="grid-item main">
                <h2>Our Mission</h2>
                <p>
                    Founded on the principle of technical excellence, Fabcorp bridges the gap between
                    complex engineering and intuitive user experience. We don't just write scripts;
                    we architect systems that scale.
                </p>
            </div>

            <div class="grid-item">
                <h3>Precision</h3>
                <p>Every line of code is written with intent and optimized for speed.</p>
            </div>

            <div class="grid-item">
                <h3>Innovation</h3>
                <p>Staying ahead of the stack to provide modern solutions to modern problems.</p>
            </div>
        </section>

        <section class="banner">
            <div class="banner-content">
                <div class="stat">
                    <span class="stat-number">2</span>
                    <span class="stat-label">Core Developers</span>
                </div>
                <div class="stat">
                    <span class="stat-number">100%</span>
                    <span class="stat-label">Commitment</span>
                </div>
                <div class="stat">
                    <span class="stat-number">∞</span>
                    <span class="stat-label">Passion</span>
                </div>
            </div>
        </section>

        <section class="about-footer">
            <h2>Curious about who is behind the screen?</h2>
            <router-link to="/team" class="cta-button">Meet the Team</router-link>
        </section>
    </div>
</template>

<style scoped>
.about-container {
    line-height: 1.6;
}

.about-hero {
    padding: 100px 20px 60px;
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
}

.about-logo {
    max-width: 120px;
    margin-bottom: 2rem;
}

h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    letter-spacing: -1px;
}

.accent {
    color: #ff6d1f;
}

.hero-subtitle {
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
    border-color: #ff6d1f;
}

.grid-item.main {
    grid-column: span 2;
}

.grid-item h2,
.grid-item h3 {
    color: #ff6d1f;
    margin-bottom: 1rem;
}

.banner {
    background-color: #1a1a1a;
    padding: 60px 0;
    margin: 60px 0;
}

.banner-content {
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
    color: #ff6d1f;
}

.stat-label {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.8rem;
    color: #777;
}

.about-footer {
    text-align: center;
    padding: 80px 20px;
}

.cta-button {
    display: inline-block;
    margin-top: 2rem;
    padding: 12px 32px;
    background-color: #ff6d1f;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    transition: transform 0.2s ease, background-color 0.2s ease;
}

.cta-button:hover {
    background-color: #e55a10;
    transform: translateY(-2px);
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

    .banner-content {
        flex-direction: column;
        gap: 40px;
    }
}
</style>