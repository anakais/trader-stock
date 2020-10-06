<template>
    <div class="container mx-auto mt-5">
        <h1 class="text-5xl mb-6">
            Negocie e Consulte suas ações
        </h1>
        <button class="w-full mb-3 bg-blue-600 hover:bg-blue-500 text-white text-left font-bold py-2 px-4 border-b-4 border-blue-800
        hover:border-blue-700 rounded shadow-md">
          Você pode Salvar e Carregar seus dados
        </button>
        <button class="w-full mb-6 bg-green-600 hover:bg-green-500 text-white text-left font-bold py-2 px-4 border-b-4 border-green-800
        hover:border-green-700 rounded shadow-md">
          Clique em Finalizar dia" para iniciar um novo dia!
        </button>
        <hr class="mb-6">
        <h2 class="font-bold text-3xl">Seu Saldo: {{ saldo | currency }}</h2>
    </div>
</template>

<script>
    export default {
        name: "Inicio",
        computed: {
            saldo() {
                return this.$store.getters.fundos
            }
        }
    }
</script>

<style scoped>

</style>