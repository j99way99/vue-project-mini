import {
  createApp
} from 'vue'

import App from './App.vue'
import router from './router'
import mixins from './mixins'
import store from './store'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

axios.defaults.baseURL = 'http://localhost:3000';

// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App);
app.use(router);
app.mixin(mixins);
app.config.globalProperties.axios = axios;
app.use(store);
app.use(VueSweetalert2);
app.mount('#app');

window.Kakao.init("");