<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <foot></foot>
    <modal></modal>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import foot from '@/view/common/footer'
import modal from '@/components/modal'
export default {
  name: 'app',
  components: {
      foot,
      navbar,
      modal
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
