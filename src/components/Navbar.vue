<template>
    <nav class="navbar">
        <div class="logo">Fabcorp</div>
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

.nav-right-placeholder {
    flex: 1;
}

.router-link-active {
    border-bottom: 2px solid #ff6d1f;
}
</style>