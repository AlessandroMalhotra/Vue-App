import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventDetails from '../views/event/Details.vue'
import EventLayout from '../views/event/Layout.vue'
import EventRegister from '../views/event/Register.vue'
import EventEdit from '../views/event/Edit.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '../views/Notfound.vue'
import NetworkError from '../views/NetworkError.vue'

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
      name: 'EventLayout',
      props: true,
      component: EventLayout,
      children: [
        {
          path: '',
          name: 'event-details',
          component: EventDetails
        },
        {
          path: 'register',
          name: 'EventRegister',
          component: EventRegister
        },
        {
          path: 'edit',
          name: 'EventEdit',
          component: EventEdit
        }
      ]
    },
    {
      path: '/event/:afterEvent(.*)',
      redirect: to  => {
        return { path: '/events/' + to.params.afterEvent}
      }
    },
    {
      path: '/404/:resource',
      name: '404Resource',
      component: NotFound,
      props: true
    },
    {
      path: '/network-error',
      name: 'NetworkError',
      component: NetworkError
    }
  ],
})

export default router
