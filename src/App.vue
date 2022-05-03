<template>
  <div id="app">
    <Navbar />
    <router-view />
    <BottomMenu />
  </div>
</template>

<script>
import BottomMenu from '@/components/BottomMenu.vue';

export default {
  name: "App",
  components: { BottomMenu }
}
</script>