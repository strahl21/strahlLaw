import Vue from 'vue'
import App from './App'
import * as VueGoogleMaps from 'vue2-google-maps'
import router from './router'
import store from './store'

var googleKey = "AIzaSyC3n2P6_R_HTgmvGLzzlhhB7eeb_FdksTA";

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: googleKey,
    libraries: 'places',
  },
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
