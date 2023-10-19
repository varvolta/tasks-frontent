import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/AuthView.vue'
import TasksView from '../views/TasksView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'auth',
			component: AuthView
		},
		{
			path: '/tasks',
			name: 'tasks',
			component: TasksView
		}
	]
})

export default router
