import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//
import 'nprogress/nprogress.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faArrowLeft);

createApp(App)
  .component('fa-icon', FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount('#app');
