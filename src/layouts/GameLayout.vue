<template>
  <div id="gameWrapper" class="flex" style="height: 100%">
    <slot></slot>
    <footer>
      <Navbar></Navbar>
    </footer>
  </div>
</template>
<script>
import Navbar from '@/views/layout/Navbar.vue'

export default {
  name: 'GameLayout',
  components: {
    Navbar
  }
}
</script>
