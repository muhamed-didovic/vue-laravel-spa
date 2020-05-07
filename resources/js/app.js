import router from './router'
import store from './vuex'
import localforage from 'localforage'
import App from './components/App.vue'

localforage.config({
    driver: localforage.LOCALSTORAGE,
    storeName: 'codecourse'
})

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

store.dispatch('auth/setToken')
    .then(() => {
        console.log('111');
    store.dispatch('auth/fetchUser').catch(() => {
        console.log('222');
        store.dispatch('auth/clearAuth')
        router.replace({ name: 'login' })
    })
}).catch(() => {
    console.log('333');
    store.dispatch('auth/clearAuth')
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
