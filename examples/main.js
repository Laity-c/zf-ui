import Vue from 'vue'
import App from './App.vue'

import '../packages/font_cy/iconfont.css'

// 第一步，导入button组件
import ZFButton from '../packages/components/button.vue'

Vue.config.productionTip = false

// 第二步，注册组件，设置（组件名，组件）
Vue.component(ZFButton.name, ZFButton)
new Vue({
  render: h => h(App)
}).$mount('#app')
