<template>
  <div id="app">
    <transition name="router-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import recalc from './assets/js/recalc'
  export default {
    name: 'app'
  }
</script>
<style lang="scss">
  @import '../src/style/reset';

  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }

  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>
