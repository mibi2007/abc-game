<template>
  <!-- <keep-alive> -->
    <keep-alive><AbcGame></AbcGame></keep-alive>
  <!-- </keep-alive> -->
</template>

<script>
import Vue from 'vue'
import { mapMutations } from 'vuex'
// @ is an alias to /src
import AbcGame from '@/components/AbcGame/AbcGame.vue'
import GameLayout from '@/layouts/GameLayout.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    AbcGame
  },
  created() {
    console.log('created Home')
    this.setLayout(GameLayout)
  },
  methods: {
    ...mapMutations('app', ['setLayout'])
  },
  destroyed() {
    console.log('destroyed Home')
  }
})
</script>
