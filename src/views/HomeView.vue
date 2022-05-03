<template>
  <div class="container-fluid h-100">
    <div class="h-50">
      <div class="row h-100 align-items-end justify-content-center">
        <div class="col-sm-10 col-md-8 col-xl-6">
          <SearchBar />
        </div>
      </div>
    </div>
    <div class="h-50">
      <div class="row">
        <div class="text-center">
            <SearchImage class="mt-4" />
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import SearchImage from "@/components/SearchImage.vue";

export default {
  components: { SearchBar, SearchImage },
  name: "HomeView",
};
</script>
