<template>
    <div class="sidebar">
       <router-link
           v-for="(item, index) in routes"
          :to="item.link"
        > <font-awesome-icon :icon="`fa-regular ${item.icon}`" :style="{ color: 'white' }"/>
        </router-link>
        <font-awesome-icon icon="fa-regular fa-house fa-4x" />
        <font-awesome-icon icon="fa-regular fa-grid-2" />
        <font-awesome-icon icon="fa-regular fa-user-group" />
        <font-awesome-icon icon="fa-regular fa-calender" />
        <font-awesome-icon icon="fa-regular fa-file" />
        <font-awesome-icon icon="fa-regular fa-gear"  />
    </div>
</template>
<script lang="ts">
import {  } from 'vue'

export default{
    setup() {
        const routes=[
            {
                link:"/",
                icon:"fa-hard-drive"
            },
            {
                link:"/home",
                icon:"fa-house"
            },
            {
                link:"/stats",
                icon:"fa-grid-2"
            },
            {
                link:"/employees",
                icon:"fa-user-group"
            },
            {
                link:"/calender",
                icon:"fa-calender"
            },
            {
                link:"/docs",
                icon:"fa-file"
            },
            {
                link:"/settings",
                icon:"fa-gear"
            },
        ]
        
    },
}
</script>

<style lang="scss" scoped>
.sidebar{
    display: flex;
    background: #222b49;
    width: 24px;
    height: 100vh;
}
</style>