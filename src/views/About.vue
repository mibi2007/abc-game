<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" name="check">
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
