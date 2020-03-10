<template>
  <div id="pageWrapper" class="flex layout-column">
    <header>
      <Navbar></Navbar>
    </header>
    <slot />
  </div>
</template>
<script>
import Navbar from '@/views/layout/Navbar.vue'

export default {
  name: 'PageLayout',
  components: {
    Navbar
  }
}
</script>
<style>
#pageWrapper{
  height: 100%
}
</style>