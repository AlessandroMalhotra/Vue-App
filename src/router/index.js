import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventDetailsView from '../views/EventDetailsView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: route => ({ page: parseInt(route.query.page) || 1 })
    },
    {
      path: '/about-us',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/about',
      redirect: { name: "about"}
    },
    {
      path: '/events/:id',
      name: 'event-details',
      props: true,
      component: EventDetailsView
    },
    {
      path: '/event/:afterEvent(.*)',
      redirect: to  => {
        return { path: '/events/' + to.params.afterEvent}
      }
    }
  ],
})

export default router
