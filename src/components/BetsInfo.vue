<template>
    <div>

    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "BetsInfo",
        async created() {
            const sortsData = await axios.get('/bets/getBets');
            this.sports = sortsData.data;
            console.log(this.sports);
        }
    }
</script>

<style scoped>

</style>