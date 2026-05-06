<template>
    <nav class="navbar">
        <div class="logo">
            <router-link to="/" class="logo-link">
                <img src="/images/fabcorp_logo_small_white.png" alt="Fabcorp logo" width="30" height="30">
                <span class="fabcorp-text">Fabcorp</span>
            </router-link>
        </div>
        <ul class="nav-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
        </ul>
        <div class="nav-right-placeholder"></div>
    </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #111111;
    color: white;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 50px;
    margin: 0 auto;
}

.nav-links a {
    color: white;
    text-decoration: none;
}

.logo {
    flex: 1;
}

.logo-link {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    transition: 300ms;
}

.logo-link:hover {
    opacity: 0.8;
}

.logo .router-link-active {
    border-bottom: none;
}

.nav-right-placeholder {
    flex: 1;
}

.router-link-active {
    border-bottom: 2px solid #ff6d1f;
}

.fabcorp-text {
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
}
</style>