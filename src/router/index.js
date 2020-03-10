import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
import paths from './paths'

function route(path, view, name) {
  return {
    name: name || view,
    path,
    component: resolve => import(`@/views/${view}.vue`).then(resolve)
  }
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: paths
    .map(path => route(path.path, path.view, path.name))
    .concat([{ path: '*', redirect: '/' }])
})

export default router
