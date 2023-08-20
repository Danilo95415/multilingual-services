<template>
  <div>
    <HelloWorld />
    <FooterPages />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FooterPages from './components/FooterPages.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    FooterPages
  }
}
</script>

<style>

</style>
