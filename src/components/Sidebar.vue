<template>
  <div class="sidebar">
    <q-img src="logo.jpg" class="sidebar__logo" />
    <router-link v-for="(item, index) in routes" :to="item.link">
      <font-awesome-icon
        class="sidebar__icon"
        :icon="`fa-regular ${item.icon}`"
        :style="{ color: 'white' }"
      />
    </router-link>
  </div>
</template>
<script lang="ts">
import {} from "vue";

export default {
  setup() {
    const routes = [
      {
        link: "/",
        icon: "fa-hard-drive",
      },
      {
        link: "/home",
        icon: "fa-building",
      },
      {
        link: "/stats",
        icon: "fa-bookmark",
      },
      {
        link: "/employees",
        icon: "fa-user",
      },
      {
        link: "/calender",
        icon: "fa-calender",
      },
      {
        link: "/docs",
        icon: "fa-file",
      },
      {
        link: "/settings",
        icon: "fa-chart-bar",
      },
    ];
    return {
      routes,
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  background: #222b49;
  height: 100vh;
  padding: 8px;
  &__logo {
    margin-bottom: 32px;
  }
  &__icon {
    padding: 8px 8px;
    border-radius: 2px;
    font-size: 18px;
    height: 18px;
    width: 18px;
    margin-bottom: 4px;
    &:hover {
      background: #7fa3ff;
    }
  }
}
</style>