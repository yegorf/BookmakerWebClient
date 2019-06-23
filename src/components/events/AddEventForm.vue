<template>
    <div>
        <b>Choose sport</b><br>
        <select v-model="selectedSport">
            <option v-for="sport in sports" v-bind:value="sport.id">{{sport.sport}}</option>
        </select>
        <br>

        <b>Team</b>
        <select v-model="selectedTeam1">
            <option v-for="team in teams" v-bind:value="team.id">{{team.name}}</option>
        </select>

        <b>    VS    </b>


        <b>Team</b>
        <select v-model="selectedTeam2">
            <option v-for="team in teams" v-bind:value="team.id">{{team.name}}</option>
        </select>
        <br>
        <button @click="enter">Enter</button>
        <br>

        <b>Date</b><br>
        <input type="date" v-model="date">

    </div>
</template>

<script>
    import axios from 'axios/index';

    export default {
        name: "AddEventForm",
        data: function () {
            return {
                sports : null,
                teams: null,
                selectedSport: null,
                selectedTeam1: null,
                selectedTeam2: null,
                date: null
            }
        },

        async created() {
            const sortsData = await axios.get('/directories/getSports');
            this.sports = sortsData.data;
            console.log(this.sports);

            const teamsData = await axios.get('/directories/getTeams');
            this.teams = teamsData.data;
            console.log(this.teams);
        },

        methods: {
            enter() {
                const sport = this.selectedSport;
                const team1 = this.selectedTeam1;
                const team2 = this.selectedTeam2;
                const date = this.date;

                console.log(sport);

                axios.post('/events/addEvent', null, {
                    params: {
                        sport,
                        team1,
                        team2,
                        date
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>