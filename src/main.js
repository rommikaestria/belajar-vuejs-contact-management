import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter } from 'vue-router'
import Layout from './components/layout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        component:Layout,
        children: [
            {
                path: '/register',
                component:
        
    },
    {
        path: '/dashboard',
    }
]})

createApp(App).mount('#app')
