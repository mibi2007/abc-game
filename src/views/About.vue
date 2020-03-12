<template>
  <div class="about">
    <h3>Hướng dẫn</h3>
    <h4>Desktop:</h4>
    <p> - Bấm Space</p>
    <p></p>
    <hr>
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
  name: 'About',
  created() {
    console.log('created About')
    console.log(PageLayout)
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
