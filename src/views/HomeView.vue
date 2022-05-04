<template>
  <div class="container-fluid h-100">
    <div class="h-50">
      <div class="row h-100 align-items-end justify-content-center">
        <div class="col-sm-10 col-md-8 col-xl-6">
          <SearchBar v-model="url" @search="search" />
          <small class="text-danger mt-1 ps-3" v-if="error">
            {{ error }}
          </small>
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
import { parseTweetUrl } from "@/utils/functions";
import SearchBar from "@/components/SearchBar.vue";
import SearchImage from "@/components/SearchImage.vue";

export default {
  components: { SearchBar, SearchImage },
  name: "HomeView",
  data() {
    return {
      url: "",
      error: "",
    };
  },
  methods: {
    search() {
      this.error = "";
      const { tweetId } = parseTweetUrl(this.url);
      if (!tweetId) {
        this.error = "Invalid tweet url";
      }
    },
  },
  created() {
    this.url = this.$route.query.url ? this.$route.query.url : "";
  },
};
</script>
