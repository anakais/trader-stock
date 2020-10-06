export default {
    state: {
        fundos: '10000',
        acoes: []
    },
    mutations: {
        comprarAcao(state, { id, preco, quantidade }) {
            const record = state.acoes.find(element => element.id == id)
            if (record) {
                record.quantidade += quantidade
            } else {
                state.acoes.push({
                    id,
                    quantidade
                })
            }
            state.fundos -= preco * quantidade
        },
        venderAcao(state, { id, preco, quantidade }) {
            const record = state.acoes.find(element => element.id == id)
            if (record.quantidade > quantidade) {
                record.quantidade -= quantidade
            } else {
                state.acoes.splice(state.acoes.indexOf(record), 1)
            }
            state.fundos += preco * quantidade
        },
        setPortfolio(state, portfolio) {
            state.fundos = portfolio.fundos
            state.acoes = portfolio.acoesPortfolio ? portfolio.acoesPortfolio : []
        }
    },
    actions: {
        venderAcao({ commit }, order) {
            commit('venderAcao', order)
        }
    },
    getters: {
        acoesPortfolio(state, getters) {
            return state.acoes.map(acoes => {
                const record = getters.acoes.find(element => element.id == acoes.id)
                return {
                    id: acoes.id,
                    quantidade: acoes.quantidade,
                    nome: record.nome,
                    preco: record.preco
                }
            })
        },
        fundos(state) {
            return state.fundos
        }
    }
}