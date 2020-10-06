<template>
    <div>
        <section class="border">
            <div class="flex w-full p-3 align-bottom bg-blue-500">
                <h1 class="self-end text-3xl leading-none text-white">{{ acao.nome }}</h1>
                <p class="self-end ml-3 font-bold text-white">(Preço: {{ acao.preco | currency }} | Qtd: {{ acao.quantidade }} )</p>
            </div>
            <div class="p-3">
                <p>Quantidade:</p>
                <div class="flex align-center">
                    <input
                            type="number"
                            class="h-6 w-full border-b focus:outline-none focus:border-blue-400"
                            :error="quantidade < 0 || quantidadeInsuficiente || !Number.isInteger(quantidade)"
                            v-model.number="quantidade"
                    />
                    <button class="h-6 mb-3 ml-3 bg-blue-600 hover:bg-blue-500 text-white text-left text-sm px-2 border-b-4 border-blue-800
                        hover:border-blue-700 rounded shadow-md"
                            :disabled="quantidade <= 0 || quantidadeInsuficiente || !Number.isInteger(quantidade)"
                            @click="vender"
                    >
                        {{ quantidadeInsuficiente ? 'Insuficiente' : 'Vender' }}
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'portfolio-card',
        props: {
            acao: {}
        },
        data() {
            return {
                quantidade: 0
            }
        },
        computed: {
            quantidadeInsuficiente() {
                return this.quantidade > this.acao.quantidade
            }
        },
        methods: {
            ...mapActions(['venderAcao']),
            vender(){
                const order = {
                    id: this.acao.id,
                    preco: this.acao.preco,
                    quantidade: this.quantidade
                }
                this.venderAcao(order)
                this.quantidade = 0
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
</style>
