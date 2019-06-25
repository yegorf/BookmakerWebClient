<template>
    <div>
        <b>Event</b>
        {{this.$store.state.event}}
        <div v-for="result in results">
            <b>Expected result: </b>{{result.name}}<br>
            <b>Total bets sum: </b>{{result.sum}}
        </div>
    </div>
</template>
<!--ERROR-->
<script>
    import axios from 'axios';

    export default {
        name: "MakeBets",
        data() {
            return {
                results: []
            }
        },
        async created() {
            const id = this.$store.state.event;
            alert(id);
            axios.post('/results/getEventResults', null, {
                params: {
                    id
                }
            }).then(res => {
                this.results = res.data
            });
        }
    }
</script>

<style scoped>

</style>