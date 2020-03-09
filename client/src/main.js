import Vue from 'vue'
import App from './App.vue'
import store from './store'

// import { ClientTable } from 'vue-tables-2';
import TableComponent from 'vue-table-component';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(TableComponent);
Vue.config.productionTip = false;
// Vue.use(ClientTable);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
