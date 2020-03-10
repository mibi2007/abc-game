/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
// import Home from "@/views/Home.vue";
// import Test from "@/views/Test.vue";

export default [
  {
    path: '',
    // Relative to /src/views
    view: 'Home'
  },
  {
    path: '/about',
    view: 'About'
  }
]
