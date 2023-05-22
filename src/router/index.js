import { createRouter, createWebHistory } from 'vue-router'
// View Imports
import HomeView from '../views/HomeView.vue'
import MainLandingView from '../views/MainLandingView.vue'
import SubscribeView from '../views/SubscribeView.vue'
import ContactView from '../views/ContactView.vue'
import ManageSubscriptionView from '../views/ManageSubscription.vue'
import GetUpdatesView from '../views/GetUpdatesView.vue'
import ThankYouView from '../views/ThankYouView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'welcome',
          component: MainLandingView
        },
        {
          path: 'subscribe',
          name: 'subscribe',
          component: SubscribeView
        },
        {
          path: 'contact',
          name: 'contact',
          component: ContactView
        },
        {
          path: 'managesubscription',
          name: 'managesubscription',
          component: ManageSubscriptionView
        },
        {
          path: 'getupdates',
          name: 'getupdates',
          component: GetUpdatesView
        },
        {
          path: 'thankyou',
          name: 'thankyou',
          component: ThankYouView
        }
      ]
    }
  ]
})

export default router
