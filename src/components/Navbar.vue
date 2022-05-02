<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary py-0 fw-bold">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="#">
        <Logo />
        <span class="ms-2 fw-bold fs-6">Video Order</span>
      </router-link>
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
          <li
            class="nav-item"
            v-for="{ title, link } in menuItems"
            :key="title"
          >
            <router-link
              class="nav-link"
              aria-current="page"
              :to="link"
              active-class="active"
              exact
            >
              {{ title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "./Logo.vue";
/* eslint-disable */
export default {
  components: { Logo },
  name: "Navbar",
  data() {
    return {
      menuItems: [
        {
          title: "Home",
          link: "/",
        },
        {
          title: "Popular",
          link: "#",
        },
        {
          title: "About",
          link: "#",
        },
        {
          title: "Account",
          link: "#",
        },
      ],
    };
  },
};
</script>