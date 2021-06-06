require('./bootstrap');

require('alpinejs');

import Vue from 'vue';
import App from './components/App.vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import {routes} from './routes';
import { Form, Errors } from 'vform';
// import AllDevelopers from './components/AllDevelopers.vue';
// import AddDeveloper from './components/AddDeveloper.vue';
// import EditDeveloper from './components/EditDeveloper.vue';

window.Form = Form;

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.prototype.$userName = document.querySelector("meta[name='user-name']").getAttribute('content');
Vue.component('navigation-bar-component', require('./components/NavigationBar.vue').default);
Vue.component('app-logo-component', require('./components/ApplicationLogo.vue').default);
Vue.component('dropdown-component', require('./components/Dropdown.vue').default);


// Vue.component('add-developer-component', require('./components/AddDeveloper.vue').default);
// Vue.component('edit-developer-component', require('./components/EditDeveloper.vue').default);
 
const router = new VueRouter({
    mode: 'history',
    routes: routes,
    linkExactActiveClass: "border-indigo-400 focus:outline-none focus:border-indigo-700 text-gray-900",
});
 
const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});