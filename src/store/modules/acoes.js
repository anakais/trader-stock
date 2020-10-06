import acoes from '../../data/acoes'

export default {
    state: {
        acoes: []
    },
    mutations: {
        carregaAcoes(state, acoes) {
            state.acoes = acoes
            state.fundos = state.fundos - (acoes.quantidade * acoes.preco)
        },
        randomizeAcoes(state) {
            state.acoes.forEach(acao => {
                acao.preco = Math.round(acao.preco * (1 + Math.random() -0.45))
            })
        }
    },
    actions: {
        comprarAcao({ commit }, order) {
            commit('comprarAcao', order)
        },
        initAcoes({ commit }) {
            commit('carregaAcoes', acoes)
        },
        randomizeAcoes({ commit }) {
            commit('randomizeAcoes')
        }
    },
    getters: {
        acoes(state ) {
            return state.acoes
        },
    }
}