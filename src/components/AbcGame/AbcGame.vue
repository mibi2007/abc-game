<template>
  <div class="flex" style="height: 100%">
    <div id="abcGameWrapper" ref="abcGameWrapper">
      <div id="text" ref="text"></div>
      <input @keyup="onKeyup" id="inputText" name="inputText" type="text" ref="inputText" v-model="inputText" autocomplete="off" />
      <slot name="navbar"></slot>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { abcArr, colors } from './data'
import utils from '@/common/utils'

export default Vue.extend({
  name: 'AbcGame',
  data: () => ({
    colorsArr: [],
    inputText: '',
    timeout: null,
    lastTap: 0
  }),
  created() {
    Object.keys(colors).map(color => {
      this.colorsArr.push({ name: color, color: colors[color] })
    })
    console.log('created Game')
  },
  mounted: function() {
    console.log('mounted Game')
    let touchDevice = navigator.maxTouchPoints
    let vm = this
    if (touchDevice) {
      vm.$refs.abcGameWrapper.addEventListener('touchend', () => {
        vm.onTap()
      })
    }
    else{
      vm.$refs.inputText.focus()
      vm.$refs.abcGameWrapper.addEventListener('click', () => {
        vm.press()
        vm.$refs.inputText.focus()
      })
    }
    this.press()
    window.addEventListener('resize', this.doScale())
  },
  methods: {
    onTap() {
      var currentTime = new Date().getTime()
      var tapLength = currentTime - this.lastTap

      if (this.timeout) {
        clearTimeout(this.timeout)
      }

      if (tapLength < 500 && tapLength > 0) {
        //Double Tap/Click
        this.$refs.inputText.focus()
      } else {
        //Single Tap/Click
        this.timeout = setTimeout(() => {
          //Single Tap/Click code here
          // this.$refs.inputText.blur()
          this.press()
          clearTimeout(this.timeout)
        }, 500)
      }
      this.lastTap = currentTime
    },
    onKeyup() {
      let vm = this
      if (this.inputText == ' ') {
        vm.press()
      } else {
        if (this.timeout) {
          clearTimeout(this.timeout)
        }
        this.timeout = setTimeout(() => {
          this.press(this.inputText)
        }, 1000)
      }
    },
    doScale() {
      this.$refs.text.style.fontSize = '20rem'
      this.scaleText()
    },
    scaleText() {
      let textwidth = this.$refs.text.clientWidth
      let textHeight = this.$refs.text.clientHeight
      let bodyWidth = this.$refs.abcGameWrapper.clientWidth
      let bodyHeight = this.$refs.abcGameWrapper.clientHeight
      if (textwidth > bodyWidth || textHeight > bodyHeight) {
        let fontSize = parseInt(this.$refs.text.style.fontSize.replace('rem', ''))
        this.$refs.text.style.fontSize = fontSize / 2 + 'rem'
        this.scaleText()
      }
    },
    press(text) {
      // const gameWrapper = document.getElementById('gameWrapper');
      const wrapper = this.$refs.abcGameWrapper
      let ran = Math.floor(Math.random() * 148)
      // console.log(ran)
      // console.log(lightOrDark(this.colorsArr[ran].color.replace('tran','1')))
      if (utils.lightOrDark(this.colorsArr[ran].color.replace('tran', '1')) == 'light') {
        wrapper.style.backgroundColor = this.colorsArr[ran].color.replace('tran', '1')
        wrapper.style.color = 'rgba(0,0,0,0.5)'
        this.$refs.text.style.color = 'rgba(0,0,0,0.5)'
      } else {
        wrapper.style.backgroundColor = this.colorsArr[ran].color.replace('tran', '0.3')
        wrapper.style.color = this.colorsArr[ran].name
        this.$refs.text.style.color = this.colorsArr[ran].name
      }
      if (text && text.length) {
        this.$refs.text.innerText = text
      } else {
        let ranText = Math.floor(Math.random() * 125)
        this.$refs.text.innerText = abcArr[ranText]
      }
      this.inputText = ''
      this.$refs.text.style.fontSize = '20rem'
      this.scaleText()
    }
    // onClickWrapper() {
    //   this.press()
    //   this.$refs.inputText.focus()
    // }
  },
  destroyed() {
    console.log('destroyed Game')
  }
})
</script>

<style lang="scss">
#abcGameWrapper {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}
#text {
  text-transform: uppercase;
  text-align: center;
  padding: 20px;
}
#inputText {
  background: transparent;
  border: none;
  padding: 0;
  outline: none;
  color: transparent;
  height: 0;
}
</style>
