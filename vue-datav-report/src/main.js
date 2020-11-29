import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/vcharts.js'

import ECharts from 'echarts'
import VueECharts from 'vue-echarts'

// 全局样式
import './style/index.css'

Vue.component('vue-chart', VueECharts)

Vue.prototype.$echarts = ECharts

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
