<template>
  <div>
    <HeaderPage />
    <router-view></router-view>
    <FooterPages />
  </div>
</template>

<script>

import HeaderPage from '@/components/Layout/HeaderPage'
import FooterPages from '@/components/Layout/FooterPages'

export default {
  components : {
    HeaderPage,
    FooterPages
  },
  name: 'App',
  
}
</script>

<style>

</style>
