<template>
  <nav class="flex" :class="{ open: open }">
    <a v-for="item in menu" v-bind:key="item.name" @click="goTo(item)" class="menuItem flex layout-column align-items-center" :class="{ active: item.path==active }">
      <svg-icon :icon-name="item.icon"></svg-icon>
      {{ item.name }}
    </a>
    <a id="toggleMenu" @click="toggleMenu" class="flex align-items-center">
      <div style="width: 24px; height: 24px; z-index: -1"></div>
      <svg-icon icon-name="menu" class="open" :class="{ show: !open }"></svg-icon>
      <svg-icon icon-name="close" class="close" :class="{ show: open }"></svg-icon>
    </a>
  </nav>
</template>

<script>
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

export default Vue.extend({
  name: 'Navbar',
  components: {
    SvgIcon
  },
  data: () => ({
    menu: [
      { name: 'Home', path: '', icon: 'home'},
      { name: 'About', path: 'about', icon: 'information-variant' }
    ],
    open: false,
    active: ''
  }),
  created(){
    console.log('run');
    this.active = this.$route.path.substr(1);
  },
  methods: {
    goTo(menuItem) {
      if (this.$route.path != '/' + menuItem.path){
        setTimeout(() => {
          this.$router.push('/' + menuItem.path)
        })
      }
    },
    toggleMenu() {
      this.open = !this.open
    }
  }
})
</script>

<style lang="scss">
header {
  overflow: hidden;
  background-color: #333;
  width: 100%;
}
header a {
  float: left;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  &#toggleMenu {
    display: none;
  }
}
nav a {
  color: #f2f2f2;
  background-color: #333;
  &:hover {
    background: #f1f1f1;
    color: black;
  }
  &.active {
    background-color: #4caf50;
    color: white;
  }
}
footer {
  nav {
    overflow: hidden;
    position: fixed;
    bottom: 0;
    right: 0;
    .menuItem {
      opacity: 0;
      visibility: hidden;
    }
    &.open .menuItem {
      opacity: 1;
      visibility: visible;
    }
    a {
      float: left;
      background-color: #333;
      color: #f2f2f2;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 17px;
      -webkit-transition: 0.25s ease-in-out;
      -moz-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-o;
    }
    #toggleMenu {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      .svg-icon {
        position: absolute;
        -webkit-transition: 0.25s ease-in-out;
        -moz-transition: 0.25s ease-in-out;
        -o-transition: 0.25s ease-in-out;
        &.open {
          font-size: 0;
          &.show {
            font-size: 30px;
          }
        }
        &.close {
          font-size: 0;
          &.show {
            font-size: 30px;
          }
        }
      }
    }
  }
}
</style>
