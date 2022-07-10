<template>
  <div class="header">
    <div class="header__title">
      {{ header }}
    </div>
    <div class="header__user-details">
      <font-awesome-icon
        class="header__notify-icon"
        :icon="`fa-regular fa-message`"
      />
      <font-awesome-icon
        class="header__notify-icon"
        :icon="`fa-regular fa-bell`"
      />
      <q-avatar size="18">
        <q-img src="person1.png" />
      </q-avatar>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, ref, watch } from "vue";
import router from "../router";
export default {
  setup() {
    const header = ref();
    watch(
      () => router.currentRoute.value,
      () => {
        header.value = router.currentRoute.value.path.replace("/", "");
      }
    );
    return {
      header,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  padding: 12px;
  background: #fff;
  &__title {
    font-size: 24px;
    font-weight: 600;
    text-transform: capitalize;
    color: #222b49;
  }
  &__notify-icon {
    width: 18px;
    height: 18px;
    color: #7fa3ff;
    padding: 4px;
    margin-right: 8px;
  }
  &__user-details {
    margin-left: auto;
    order: 2;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .q-avatar {
      font-size: 36px;
    }
  }
}
</style>