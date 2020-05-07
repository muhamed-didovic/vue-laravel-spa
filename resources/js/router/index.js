import Vue from 'vue'
import Router from 'vue-router'
// import { routes as routes } from '../app/index'
import routes  from '../app'//routes.js
console.log('ROUTES', routes);
import beforeEach from './beforeEach'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    // hash: false,
    routes: routes,
})

router.beforeEach(beforeEach)

export default router
