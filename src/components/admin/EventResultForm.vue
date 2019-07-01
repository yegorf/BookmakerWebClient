<template>
    <div>
        Event #{{event.id}}<br>
        {{event.sport}}<br>
        {{event.team1}} vs {{event.team2}}<br>
        <b>Choose the result</b><br>
        <select v-model="result">
            <option v-for="result in results" v-bind:value="result.id">{{result.name}}</option>
        </select><br>
        <button @click="enter">Enter</button>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "EventResultForm",
        props: ['event'],
        data() {
            return {
                results: [],
                result: null
            }
        },
        async created() {
            axios.post('/results/getEventResults', null, {
                params: {
                    id: this.event.id
                }
            }).then(res => {
                this.results = res.data;
                console.log(this.results);
            });
        },
        methods: {
            enter() {
                alert(this.result);
                axios.post('/results/setEventResult', null, {
                    params: {
                        eventId: this.event.id,
                        resultId: this.result
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>