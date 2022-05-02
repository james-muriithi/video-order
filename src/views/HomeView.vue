<template>
  <div class="container-fluid h-100">
    <div class="row h-100 align-items-center justify-content-center">
      <div class="col-sm-10 col-md-8 col-xl-6">
        <SearchBar />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'

export default {
  components: { SearchBar },
  name: 'HomeView',
}
</script>
