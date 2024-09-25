import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue'
import router from './router'

// Tambahkan ikon ke library
library.add(faUserSecret);

createApp(App)

// Daftarkan FontAwesomeIcon sebagai komponen global
.component('font-awesome-icon', FontAwesomeIcon)
.use(createPinia())
.use(router)

.mount('#app')
