<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h3 class="brand-name">Fabcorp</h3>
                <p>When dedication meets skill.</p>
            </div>

            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/team">Team</router-link></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Connect</h4>
                <div class="social-links">
                    <a href="https://git.fabcorp.ch/Fabcorp" target="_blank" aria-label="Git"
                        >Git</a
                    >
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; {{ currentYear }} Fabcorp. All rights reserved.</p>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background-color: #1a1a1a;
    color: #ffffff;
    padding: 3rem 1rem 1rem;
}

.footer-content {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
}

.footer-section h3 {
    margin-bottom: 1rem;
    color: #ff6d1f;
}

.footer-section h4 {
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.footer-section ul {
    list-style: none;
    padding: 0;
}

.footer-section ul li {
    margin-bottom: 0.5rem;
}

.footer-section a {
    color: #bbb;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-section a:hover {
    color: #ffffff;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.footer-bottom {
    margin-top: 3rem;
    padding-top: 1.5rem;
    border-top: 1px solid #333;
    text-align: center;
    font-size: 0.9rem;
    color: #777;
}

.brand-name {
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
}

@media (max-width: 600px) {
    .footer-content {
        text-align: center;
    }

    .social-links {
        justify-content: center;
    }
}
</style>
