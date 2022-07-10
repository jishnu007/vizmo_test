import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import index from './components'
import router from "./router";
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import "@quasar/extras/mdi-v4/mdi-v4.css";
import DashboardLayout from './layouts/DashboardLayout.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faHardDrive, faFile, faCalendar, faUser,faBuilding,faChartBar,faBookmark,faBell,faMessage } from '@fortawesome/free-regular-svg-icons';

library.add(faHardDrive,faFile,faUser,faBuilding,faCalendar,faChartBar,faBookmark,faBell,faMessage )

export const app = createApp(App)
app.use(Quasar,  {
    plugins: {}, 
  })
app.use(router)
app.use(index)
app.component("default-layout", DashboardLayout);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

