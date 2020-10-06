<template>
    <section class="container mx-auto mt-10">
        <div class="flex flex-wrap">
            <portfolio-card
                    v-for="(acao) in acoesPortfolio"
                    :key="acao.id"
                    class="w-1/3 px-2 mb-4"
                    :acao="acao"/>
        </div>
    </section>
</template>

<script>
    import PortfolioCard from "./PortfolioCard"
    import { mapGetters } from 'vuex'

    export default {
        name: "Portfolio",
        components: {PortfolioCard},
        computed: mapGetters (['acoesPortfolio'])
    }
</script>

