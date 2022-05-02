<template>
  <div class="container-fluid h-100">
    <div class="row h-100 align-items-center justify-content-center pt-5">
      <div class="col-sm-10 col-md-8 col-xl-6">
        <SearchBar />
        <div class="text-center">
        <SearchImage class="mt-4" />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import SearchImage from '@/components/SearchImage.vue'

export default {
  components: { SearchBar, SearchImage },
  name: 'HomeView',
}
</script>
