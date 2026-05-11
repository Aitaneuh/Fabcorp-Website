<template>
    <nav class="navbar">
        <div class="logo">
            <router-link to="/" class="logo-link">
                <img
                    src="/images/fabcorp_logo_small_white.png"
                    alt="Fabcorp logo"
                    width="30"
                    height="30"
                />
                <span>Fabcorp</span>
            </router-link>
        </div>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/team">Team</router-link></li>
        </ul>
        <div class="nav-right-placeholder"></div>
    </nav>
</template>

<script setup></script>

<style scoped>
ul {
    display: flex;
    list-style: none;
    gap: 50px;
    margin: 0 auto;
}

ul a {
    color: var(--text-color);
    text-decoration: none;
}

span {
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
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
    border-bottom: 2px solid var(--accent-color);
}
</style>
