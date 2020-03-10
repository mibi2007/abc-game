<template>
  <div class="flex" style="height: 100%">
    <div id="abcGameWrapper" ref="abcGameWrapper">
      <div id="text" ref="text"></div>
      <input id="inputText" name="inputText" type="text" ref="inputText" v-model="inputText" autocomplete="off" />
      <slot name="navbar"></slot>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { abcArr, colors } from './data'
import utils from '@/common/utils'

let countInit = 1
export default Vue.extend({
  name: 'AbcGame',
  data: () => ({
    colorsArr: [],
    inputText: ''
  }),
  created() {
    Object.keys(colors).map(color => {
      this.colorsArr.push({ name: color, color: colors[color] })
    })
    // console.log('created Game')
  },
  mounted: function() {
    this.$nextTick(function() {
      // Code that will run only after the
      // entire view has been rendered
      if (!countInit) {
        countInit++
        return
      }
      // console.log(this.$el)
      this.gameWrapper = document.getElementById('gameWrapper')
      let touchDevice = navigator.maxTouchPoints
      let vm = this
      if (touchDevice) {
        let timeout
        let lastTap = 0
        let events = ['click','touchend']
        events.forEach( (evt) => {
          vm.$refs.abcGameWrapper.addEventListener(evt, function(e) {
            var currentTime = new Date().getTime()
            var tapLength = currentTime - lastTap

            e.preventDefault()
            clearTimeout(timeout)

            if (tapLength < 500 && tapLength > 0) {
              //Double Tap/Click
              vm.$refs.inputText.focus()
            } else {
              //Single Tap/Click
              timeout = setTimeout(() => {
                //Single Tap/Click code here
                vm.$refs.inputText.blur()
                vm.press()
                clearTimeout(timeout)
              }, 500)
            }
            lastTap = currentTime
          })
        });
          
      } else {
        vm.$refs.inputText.focus()
        vm.$refs.abcGameWrapper.addEventListener('click', () => {
          vm.press()
          vm.$refs.inputText.focus()
        })
      }
      this.$refs.inputText.addEventListener(
        'keyup',
        utils.delay(function() {
          vm.press(vm.inputText)
          vm.inputText = ''
        }, 1000)
      )
      window.addEventListener('resize', () => {
        vm.$refs.text.style.fontSize = '20rem'
        vm.scaleText()
      })

      this.press()
    })
  },
  methods: {
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
      let ran = Math.floor(Math.random() * 148)
      // console.log(ran)
      // console.log(lightOrDark(this.colorsArr[ran].color.replace('tran','1')))
      if (utils.lightOrDark(this.colorsArr[ran].color.replace('tran', '1')) == 'light') {
        this.gameWrapper.style.backgroundColor = this.colorsArr[ran].color.replace('tran', '1')
        this.gameWrapper.style.color = 'rgba(0,0,0,0.5)'
        this.$refs.text.style.color = 'rgba(0,0,0,0.5)'
      } else {
        this.gameWrapper.style.backgroundColor = this.colorsArr[ran].color.replace('tran', '0.3')
        this.gameWrapper.style.color = this.colorsArr[ran].name
        this.$refs.text.style.color = this.colorsArr[ran].name
      }
      if (text && text.length) {
        this.$refs.text.innerText = text
      } else {
        let ranText = Math.floor(Math.random() * 125)
        this.$refs.text.innerText = abcArr[ranText]
      }
      this.$refs.text.style.fontSize = '20rem'
      this.scaleText()
    }
    // onClickWrapper() {
    //   this.press()
    //   this.$refs.inputText.focus()
    // }
  },
  destroyed() {
    // console.log('destroyed Game')
    countInit = 0
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
