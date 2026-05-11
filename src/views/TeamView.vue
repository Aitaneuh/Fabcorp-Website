<template>
    <div class="page">
        <header class="hero">
            <h1>The Brains Behind <span class="accent">Fabcorp</span></h1>
            <p>
                Two developers, one vision. We combined our obsession for clean code to build a
                studio that prioritizes quality over quantity.
            </p>
        </header>

        <section>
            <TeamMember
                name="Lead Developer One"
                role="System Architect"
                bio="With over 10 years of experience in backend infrastructure, [Name] ensures that every Fabcorp project is built on a foundation of iron-clad logic and scalable code."
                image="https://git.fabcorp.ch/avatars/571124f6d29c7c5747ac1a5720f3bcc3253a7d8830bbd39c34f56f32f3782634"
                :avatarLeft="true"
            />

            <TeamMember
                name="Lead Developer Two"
                role="Frontend Specialist"
                bio="A master of user experience and modern frameworks. [Name] turns complex data into beautiful, interactive interfaces that feel as good as they look."
                image="https://git.fabcorp.ch/avatars/fff343f07e5eed4da52ebf0065c19c479a46deb885b0ba48ed1e75bd9644fde1"
                :avatarLeft="false"
            />
        </section>
    </div>
</template>

<style scoped>
h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
}

header p {
    font-size: 1.25rem;
    color: #bbb;
    max-width: 700px;
    margin: 0 auto;
}

section {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px 100px;
}
</style>
