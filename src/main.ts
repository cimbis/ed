import 'vuetify/styles'

import { router } from '@/router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import type { App as VueApp } from 'vue'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

import App from './App.vue'

const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    theme: {
        defaultTheme: 'dark',
    },
})

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export function registerPlugins (app: VueApp) {
    app
        .use(vuetify)
        .use(pinia)
}

const app = createApp(App)

registerPlugins(app)
app.use(router)
app.mount('#app')
