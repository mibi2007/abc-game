<template>
  <div id="app">
    <!-- <keep-alive> -->
      <component :is="layout">
        <!-- <keep-alive> -->
          <router-view :layout="layout" :key="$route.fullPath"></router-view>
        <!-- </keep-alive> -->
      </component>
    <!-- </keep-alive> -->
  </div>
</template>
<script>
import Vue from 'vue'
// import { mapMutations } from 'vuex'
// import paths from './router/paths'

export default Vue.extend({
  beforeCreate() {
    console.log('very first')
    if(window.location.pathname != '/') window.location = '/';
  },
  created() {
    // console.log(this.$route.path);
    // console.log(paths);
    // paths.forEach((path) => {
    //   if(path.path == window.location.pathname){
    //     console.log(path.layout)
    //     this.setLayout(path.layout)
    //     return
    //   }
    // })
  },
  // methods: {
  //   ...mapMutations('app', ['setLayout'])
  // },
  computed: {
    layout: {
      get() {
        return this.$store.state.app.layout
      }
    }
  }
})
</script>
