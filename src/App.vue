<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style>
    html {
        background: #cfdfcf;
        font-family: Arial;
    }

    * {
        padding: 0;
        margin: 0;
    }
</style>

<script>

    import StartPage from "./components/main_pages/StartPage";

    export default {
        components: {StartPage},
        async created() {
            console.log(this.$store.state.user);
            console.log(this.$store.state.access);
        }
    }
</script>