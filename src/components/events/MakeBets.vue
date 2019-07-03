<template>
    <div>
        <UserMenu/>
        <div class="betForm">
            <div class="eventInfo">
                <b>{{event.sport}}</b> <br>
                <b>{{event.team1}} VS {{event.team2}}</b><br>
                <b>{{event.date}}</b>
            </div>

            <div class="results">
                <div v-for="result in results">
                    <b>Expected result: </b>{{result.name}}<br>
                    <b>Total bets sum: </b>{{result.sum}} {{result.percent}} %
                </div>
            </div>

            <div class="chooseForm">
                <b>Choose result: </b>
                <select v-model="result">
                    <option v-for="result in results" v-bind:value="result.id">{{result.name}}</option>
                </select><br>
                <b>Bet sum: </b><input type="text" @change="sumChange" v-model="sum"><br>
                <button @click="enter">Make bet</button>
            </div>
            <div class="div">

            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import UserMenu from "../menues/UserMenu";

    export default {
        name: "MakeBets",
        components: {UserMenu},
        data() {
            return {
                event: null,
                results: [],
                result: null,
                sum: null
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

            axios.post('/events/getEvent', null, {
                params: {
                    id: this.$store.state.event
                }
            }).then(res => {
                this.event = res.data
            });
        },
        methods: {
            sumChange() {

            },
            enter() {
                axios.post('/bets/addBet', null, {
                    params: {
                        username: localStorage.getItem("user"),
                        sum: this.sum,
                        eventResult: this.result
                    }
                }).then(res => {
                    alert(res.data);
                })
            }
        }
    }
</script>

<style scoped>
    .betForm {
        background: #3cd070;
    }

    .eventInfo {
        background: mistyrose;
    }

    .chooseForm {
        background: seagreen;
        width: 50%;
        float: left;
    }

    .results {
        background: darkseagreen;
        width: 50%;
        float: left;
    }
</style>