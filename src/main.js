import './assets/main.css'

import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import RainbowSelector from './components/RainbowSelector.vue'

const Project = defineAsyncComponent(() => import('./components/Project.vue'))

const app = createApp(App)

app.component('RainbowSelector', RainbowSelector).component('Project', Project)

app.mount('#app')
