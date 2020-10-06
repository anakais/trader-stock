import Vue from 'vue'
import Router from 'vue-router'

import Inicio from "./components/Inicio"
import Acoes from "./components/Acoes/Acoes"
import Portfolio from "./components/Portfolio/Portfolio"

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: Inicio
    }, {
        path: '/acoes',
        component: Acoes
    }, {
        path: '/portfolio',
        component: Portfolio
    }]

})

export default router