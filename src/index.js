import firstNpmCom from './first-npm.vue'

const firstNpm = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('firstNpm', firstNpmCom)
  }
}

export default firstNpmCom