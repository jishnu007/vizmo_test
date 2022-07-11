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
  background: #fcfcfc !important;
  overflow: hidden;
  &__right {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 60px;
  }
  &__main {
    display: flex;

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
