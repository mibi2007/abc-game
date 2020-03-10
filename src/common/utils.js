let lightOrDark = function(color) {
  // Check the format of the color, HEX or RGB?
  let r, g, b
  if (color.match(/^rgb/)) {
    // If HEX --> store the red, green, blue values in separate variables
    color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/)
    r = color[1]
    g = color[2]
    b = color[3]
  } else {
    // If RGB --> Convert it to HEX: http://gist.github.com/983661
    color = +('0x' + color.slice(1).replace(color.length < 5 && /./g, '$&$&'))
    r = color >> 16
    g = (color >> 8) & 255
    b = color & 255
  }
  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  let hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))
  // Using the HSP value, determine whether the color is light or dark
  if (hsp > 127.5) {
    return 'light'
  } else {
    return 'dark'
  }
}
let delay = function(fn, ms) {
  let timer = 0
  return function(...args) {
    clearTimeout(timer)
    timer = setTimeout(fn.bind(this, ...args), ms || 0)
  }
}
export default {
  lightOrDark,
  delay
}
