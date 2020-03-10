<template>
  <div id="app">
    <keep-alive include="PageLayout">
      <component :is="layout">
        <!-- <keep-alive> -->
          <router-view :layout="layout" :key="$route.fullPath"></router-view>
        <!-- </keep-alive> -->
      </component>
    </keep-alive>
  </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  computed: {
    layout: {
      get() {
        return this.$store.state.app.layout
      }
    }
  }
})
</script>
