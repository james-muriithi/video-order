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
    <div
      class="container-xl row justify-content-center mb-5"
      v-if="!fetching && variants.length > 0"
    >
      <div class="col-12 col-lg-6">
        <table class="table table-striped">
          <thead>
            <tr>
              <th class="text-center">Size</th>
              <th class="text-center">Type</th>
              <th class="text-center">Download</th>
            </tr>
          </thead>
          <tbody
            class="border border-top-1"
            v-for="(video, index) in variants"
            :key="index"
          >
            <tr>
              <td class="text-center">27.8 KB</td>
              <td class="text-center">
                {{ video.type == "video" ? "MP4" : "GIF" }}
              </td>
              <td class="text-center">
                <a :href="video.url" download="" class="btn btn-success btn-sm"
                  >Download</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/functions";
import { Tweet } from "vue-tweet-embed";

export default {
  name: "Download",
  components: { Tweet },
  data() {
    return {
      tweetId: "",
      fetching: false,
      videos: [],
    };
  },
  computed: {
    variants() {
      return this.videos[0].variants || [];
    },
  },
  methods: {
    async getVideoSize(url) {
      const response = await fetch(url)
      return Number(response.headers.get('Content-Length'))
    },
    bytesToSize(bytes, decimals = 1) {
      if (bytes === 0) return "0 Bytes";

      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

      const i = Math.floor(Math.log(bytes) / Math.log(k));

      return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
    },
  },
  async created() {
    this.tweetId = this.$route.params.tweetId;
    this.fetching = true;
    try {
      this.videos = (
        await firebase.functions().httpsCallable("getVideos")({
          tweetId: this.tweetId,
        })
      ).data;

      this.videos[0].variants.map(async variant => {
        const size = await this.getVideoSize(variant.ut)
        variant.size = size
        return variant
      })
    } catch (_) {
      this.error = "";
    } finally {
      this.fetching = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.w-100 {
  width: 100vw;
}
</style>