<template>
  <div id="app">
      <div class="row">
          <zf-button>按钮</zf-button>
          <zf-button circle plain type="primary" icon="home-weixuanzhong" @click="getInfo" disabled>默认按钮</zf-button>
          <zf-button round plain type="success" disabled>成功按钮</zf-button>
          <zf-button round plain type="warning">警告按钮</zf-button>
          <zf-button round plain type="danger">危险按钮</zf-button>
          <zf-button round plain type="info">信息按钮</zf-button>
      </div>
  </div>
</template>

<script>
import ZfButton from '../packages/components/button.vue'

export default {
  name: 'App',
  components: {
      ZfButton
  },
  methods: {
      getInfo () {
          console.log('获取信息')
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
