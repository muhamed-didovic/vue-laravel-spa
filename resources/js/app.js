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

// Vue.component('app', App);
// Vue.component('navigation', Navigation);
// Vue.component('app', require('./components/App.vue').default);
// Vue.component('navigation', require('./components/Navigation.vue').default);

store.dispatch('auth/setToken').then(() => {
    store.dispatch('auth/fetchUser').catch(() => {
        store.dispatch('auth/clearAuth')
        router.replace({ name: 'login' })
    })
}).catch(() => {
    store.dispatch('auth/clearAuth')
})

Vue.config.productionTip = false

// const app = new Vue({
//     // router: router,
//     store: store,
//     el: '#app',
//     components: {App},
//     template: '<App/>'
// });

// new Vue({
//     el: '#app',
//     // router: router,
//     store: store,
//     render: h => h(app)
//     // created: () => http.init()
// })

// new Vue({
//     router,
//     store,
//     render: function(h) {
//         return h(App)
//     }
// }).$mount('#app')

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})

