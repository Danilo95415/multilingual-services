<template>
  <div>
    <HeaderPage />
    <router-view></router-view>
  </div>
</template>

<script>

import HeaderPage from '@/components/Layout/HeaderPage'

export default {
  components : {
    HeaderPage,
  },
  name: 'App',
  
}
</script>

<style>

</style>
