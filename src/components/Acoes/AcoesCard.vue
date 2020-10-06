<template>
    <div>
        <section class="border">
            <div class="flex w-full p-3 align-bottom bg-green-500">
                <h1 class="self-end text-3xl leading-none text-white">{{ acao.nome }}</h1>
                <p class="self-end ml-3 font-bold text-white">(Preço: {{ acao.preco | currency }})</p>
            </div>
            <div class="p-3">
                <p :error="fundosInsuficientes">Quantidade:</p>
                <div class="flex align-center">
                    <input
                            type="number"
                            class="h-6 w-full border-b focus:outline-none focus:border-green-400"
                            :error="fundosInsuficientes || quantidade < 0 || !Number.isInteger(quantidade)"
                            v-model.number="quantidade" />
                    <button class="h-6 mb-3 ml-3 bg-green-500 hover:bg-green-400 text-white text-left text-sm px-2 border-b-4 border-green-800
                        hover:border-green-700 rounded shadow-md"
                            :disabled="fundosInsuficientes || quantidade <= 0 || !Number.isInteger(quantidade)"
                            @click="comprar"
                    >
                        {{ fundosInsuficientes ? 'Insuficiente' : 'Comprar' }}
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'acoes-card',
        props: {
            acao: {
                type: Object
            }
        },
        data() {
            return {
                quantidade: 0
            }
        },
        computed: {
            fundos() {
                return this.$store.getters.fundos
            },
            fundosInsuficientes() {
                return this.quantidade * this.acao.preco > this.fundos
            }
        },
        methods: {
            ...mapActions(['comprarAcao']),
            comprar(){
                const order = {
                    id: this.acao.id,
                    preco: this.acao.preco,
                    quantidade: this.quantidade
                }
                this.$store.dispatch('comprarAcao', order)
                this.quantidade = 0

                // this.comprarAcao(portfolio)
                // console.log(portfolio)
            }
        }
    }
</script>

<style scoped>
    button[disabled] {
        @apply bg-gray-300 text-gray-600 border-none cursor-default
    }
    input[error] {
        @apply border-red-600
    }
    p[error] {
        @apply text-red-600
    }
</style>