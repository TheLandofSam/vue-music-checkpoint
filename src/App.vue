<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from './components/Home'
import Itunes from '@/components/itunes'
import Mytunes from '@/components/mytunes'

export default {
  name: 'app',
  components: {
    Home
  }
  

}
</script>

<style>
.patrick {
  font-family: 'Patrick Hand SC', cursive;
}
</style>
