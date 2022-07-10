<template>
  <div class="dashboard-layout">
    <Sidebar />

    <div class="dashboard-layout__right">
      <Header />

      <main class="dashboard-layout__main">
        <div class="dashboard-layout__container">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup() {},
};
</script>


<style scoped lang="scss">
.dashboard-layout {
  display: flex;
  height: 100vh;
  width: 100vw;
  &__right {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  &__main {
    display: flex;
    background: #fcfcfc !important;
    width: 100%;
    height: 100%;
  }
  &__container {
    display: flex;
    width: 100%;
    height: 100%;
  }
}
</style>
