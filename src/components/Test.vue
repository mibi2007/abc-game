<template>
  <div class="flex" style="height: 100%">Test
    <!-- <div id="abcGameWrapper" ref="abcGameWrapper">
      <div id="text" ref="text"></div>
      <input @keyup="onKeyup" id="inputText" name="inputText" type="text" ref="inputText" v-model="inputText" autocomplete="off" /> -->
      <Navbar></Navbar>
    <!-- </div> -->
  </div>
</template>

<script>
import Navbar from '@/views/layout/Navbar.vue'

export default {
  name: 'Test',
  components: {
    Navbar
  }
}
</script>
