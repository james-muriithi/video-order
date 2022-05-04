<template>
  <div class="py-5 mx-auto mb-5">
    <Tweet
      :id="tweetId"
      class="py-5 px-2 d-flex justify-content-center"
      ref="tweet"
    >
      <div class="text-center">
        <span class="spinner-border text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </span>
      </div>
    </Tweet>
  </div>
</template>

<script>
import { Tweet } from "vue-tweet-embed";

export default {
  name: "Download",
  components: { Tweet },
  data() {
    return {
      tweetId: "",
    };
  },
  created() {
    this.tweetId = this.$route.params.tweetId;
  },
};
</script>

<style lang="scss" scoped>
.w-100 {
  width: 100vw;
}
</style>