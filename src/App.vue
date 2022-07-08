<template>
 <!-- <DashboardLayout/> -->
  <component :is="layout">
    <router-view />
  </component>
</template>
<script lang="ts">
import { ref,computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'app',
  setup () {
    const { currentRoute } = useRouter()
    const defaultLayout = 'default-layout'
    const layout = computed(
      () => `${defaultLayout}`
    )
    return {
      defaultLayout,
      layout
    }
  }
}
</script>
