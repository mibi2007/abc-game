<template>
  <div class="about">
    <p>Author: <b>Mibi</b></p>
    <p>Vuejs (babel, cypress, eslint, pwa, unit-jest, vuex, vuexfire, svg)</p>
    <p>Firebase (Cloud Database, Functions, Hosting, Storage, Emulator)</p>
    <a href="https://github.com/mibi2007/abc-game">Github repository</a>
  </div>
</template>
<script>
// import Vue from 'vue'
import { mapMutations } from 'vuex'

import PageLayout from '@/layouts/PageLayout.vue'

export default {
  name: 'Home',
  created() {
    this.setLayout(PageLayout)
  },
  methods: {
    ...mapMutations('app', ['setLayout'])
  }
}
</script>
<style lang="scss">
  .about{
    padding: 15px;
  }
</style>
