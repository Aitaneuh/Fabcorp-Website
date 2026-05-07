import './assets/main.css'

import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import router from './router'
import RainbowSelector from './components/RainbowSelector.vue'
import Navbar from './components/partials/Navbar.vue'
import Footer from './components/partials/Footer.vue'
import TeamMember from './components/TeamMember.vue'
import ProjectCard from './components/ProjectCard.vue'

const Project = defineAsyncComponent(() => import('./components/Project.vue'))

const app = createApp(App)

app.component('RainbowSelector', RainbowSelector)
    .component('Project', Project)
    .component('Navbar', Navbar)
    .component('Footer', Footer)
    .component('TeamMember', TeamMember)
    .component('ProjectCard', ProjectCard)

app.use(router)
app.mount('#app')
