import Vue from 'vue'

export default {
    carregaDados({ commit }) {
        Vue.prototype.$http.get('data.json').then(resp => {
            const data = resp.data
            if (data) {
                commit('carregaAcoes', data.acoes)
                commit('setPortfolio', {
                    fundos: data.fundos,
                    acoesPortfolio: data.acoesPortfolio
                })
            }
        })
    }
}