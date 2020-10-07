<template>
    <nav class="relative w-full h-12 bg-gray-100 shadow-md select-none lg:flex lg:items-stretch">
        <div class="flex items-stretch flex-no-shrink">
            <p class="px-3 my-auto"><strong>STOCK</strong>TRADER</p>
            <router-link to="/" active-class="bg-gray-300" exact
                         class="relative flex items-center px-4 py-2 leading-normal no-underline flex-no-grow
                         flex-no-shrink hover:bg-gray-400"
            ><a>Início</a></router-link>
            <router-link to="/portfolio" active-class="bg-gray-300" exact
                         class="relative flex items-center px-4 py-2 leading-normal no-underline flex-no-grow
                         flex-no-shrink hover:bg-gray-400"
            ><a>Portfólio</a></router-link>
            <router-link to="/acoes" active-class="bg-gray-300" exact
                         class="relative flex items-center px-4 py-2 leading-normal no-underline flex-no-grow
                         flex-no-shrink hover:bg-gray-400"
            ><a>Ações</a></router-link>
            <button class="relative block w-12 h-12 p-4 ml-auto cursor-pointer lg:hidden">
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071
                    1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
                </svg>
            </button>
        </div>
        <div class="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
            <div class="ml-auto lg:flex lg:items-stretch lg:justify-end">
                <button
                   class="relative flex items-center px-4 py-2 leading-normal no-underline flex-no-grow flex-no-shrink
                   hover:bg-gray-400 focus:outline-none" @click="finalizarDia">Finalizar Dia</button>
                <div class="relative flex items-center group">
                    <button
                       class="h-12 px-4 py-2 leading-normal no-underline flex-no-grow flex-no-shrink
                       group-hover:bg-gray-400 focus:outline-none">
                        Salva & Carregar
                    </button>
                    <button
                            class="absolute bottom-0 w-full h-12 px-4 py-2 -mb-12 leading-normal no-underline flex-no-grow flex-no-shrink
                       hover:bg-gray-200 focus:outline-none scale-0 bg-gray-100 group-hover:scale-100"
                            @click="salvarDados"
                    >
                        Salvar Dados
                    </button>
                    <button
                            class="absolute bottom-0 w-full h-12 px-4 py-2 -mb-24 leading-normal no-underline flex-no-grow flex-no-shrink
                       hover:bg-gray-200 focus:outline-none scale-0 bg-gray-100 group-hover:scale-100"
                            @click="carregaDadosNav"
                    >
                        Carregar Dados
                    </button>
                </div>
            </div>
            <p class="relative flex items-center px-4 py-2 leading-normal no-underline flex-no-grow flex-no-shrink
            text-gray-500 font-bold">Saldo {{ fundos | currency }} </p>
        </div>
    </nav>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: 'NavBar',
        computed: mapGetters (['fundos']),
        methods: {
            ...mapActions(['randomizeAcoes', 'carregaDados']),
            finalizarDia() {
                this.randomizeAcoes()
            },
            salvarDados() {
                const { fundos, acoesPortfolio, acoes } = this.$store.getters
                this.$http.put('data.json', { fundos, acoesPortfolio, acoes })
            },
            carregaDadosNav() {
                this.carregaDados()
            }
        }
    }
</script>

<style scoped>
      /* since nested groupes are not supported we have to use
     regular css for the nested dropdowns
  */
  li>ul                 { transform: translatex(100%) scale(0) }
  li:hover>ul           { transform: translatex(101%) scale(1) }
  li > button svg       { transform: rotate(-90deg) }
  li:hover > button svg { transform: rotate(-270deg) }

  /* Below styles fake what can be achieved with the tailwind config
     you need to add the group-hover variant to scale and define your custom
     min width style.
  */
  .group:hover .group-hover\:scale-100 { transform: scale(1) }
  .group:hover .group-hover\:-rotate-180 { transform: rotate(180deg) }
  .scale-0 { transform: scale(0) }
  .min-w-32 { min-width: 8rem }
</style>