/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */

import GameLayout from '@/layouts/GameLayout.vue'
import PageLayout from '@/layouts/PageLayout.vue'

export default [
  {
    path: '/',
    // Relative to /src/views
    view: 'Home',
    layout: GameLayout
  },
  {
    path: '/about',
    view: 'About',
    layout: PageLayout
  }
]
