<template>
  <div class="bottom-menu position-fixed bottom-0 w-100 d-block d-lg-none">
    <div class="row h-100">
      <div
        v-for="{ title, link, icon } in menuItems"
        :key="title"
        class="col h-100"
      >
        <router-link
          :to="link"
          class="text-decoration-none center h-100"
          active-class="active"
          exact
        >
          <div class="mb-0 d-flex flex-column text-center">
            <span class="material-icons d-block">{{ icon }}</span>
            <span>{{ title }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import menuItems from "@/utils/menu";

export default {
  name: "BottomMenu",
  computed: {
    menuItems() {
      return menuItems;
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom-menu {
  height: 60px;
  background-color: #f5f5f5;
  box-shadow: 0 1px 5px rgb(0 0 0 / 20%);
}
::v-deep {
  a {
    color: var(--bs-body-color);
    &.active {
      color: var(--bs-secondary);
      font-weight: 700;
    }
  }
}
</style>