<template>
    <section class="container mx-auto mt-10">
        <div class="flex flex-wrap">
            <acoes-card
                    v-for="acao in acoes"
                    :key="acao.id"
                    :acao="acao"
                    class="w-1/3 px-2 mb-4"/>
        </div>
    </section>
</template>

<script>
    import AcoesCard from "./AcoesCard";

    export default {
        name: "Acoes",
        components: {AcoesCard},
        computed: {
            acoes() {
                return this.$store.getters.acoes
            }
        }
    }
</script>

