import Vue from 'vue'
import Vuex from 'vuex'

import actions from "./actions"

import acoes from "./modules/acoes"
import portfolio from "./modules/portfolio"

Vue.use(Vuex)

export default new Vuex.Store ({
    actions,
    modules: {
        acoes,
        portfolio
    }
})
