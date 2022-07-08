import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import index from './components'
import router from "./router";
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import DashboardLayout from './layouts/DashboardLayout.vue';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHardDrive } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faHardDrive)

export const app = createApp(App)
app.use(Quasar,  {
    plugins: {}, 
  })
app.use(router)
app.use(index)
app.component("default-layout", DashboardLayout);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

