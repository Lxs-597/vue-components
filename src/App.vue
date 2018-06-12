<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import http from './utils/request'
import axios from 'axios'

export default {
  name: 'App',
  created() {
    http.get('/test/testget').then(
      res => console.log(res.data)
    )

    http.post('/test/testpost', {name: 'testname', pwd: '123'}).then(
      res => console.log(res.data)
    )
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
