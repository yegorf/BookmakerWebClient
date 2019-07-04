<template>
    <div>
        <AdminMenu/>

        <div class="addEvent">
            <b>Profit(%): </b><input type="range" min="0" max="100" v-model="profit">{{profit}}%<br>
            <b>Choose sport</b><br>
            <select v-model="selectedSport">
                <option v-for="sport in sports" v-bind:value="sport.id">{{sport.sport}}</option>
            </select>
            <br>

            <b>Team</b>
            <select v-model="selectedTeam1">
                <option v-for="team in teams" v-bind:value="team.id">{{team.name}}</option>
            </select>

            <b> VS </b>

            <b>Team</b>
            <select v-model="selectedTeam2">
                <option v-for="team in teams" v-bind:value="team.id">{{team.name}}</option>
            </select>
            <br>
            <button @click="enter">Enter</button>
            <br>

            <b>Date</b><br>
            <input type="date" v-model="date">
            <br>
            <b>Time</b><br>
            <input type="time" v-model="date">
            <br>

        </div>
    </div>
</template>

<script>
    import axios from 'axios/index';
    import AdminMenu from "../menues/AdminMenu";

    export default {
        name: "AddEventForm",
        components: {AdminMenu},
        data: function () {
            return {
                sports: null,
                teams: null,
                selectedSport: null,
                selectedTeam1: null,
                selectedTeam2: null,
                date: null,
                profit: null
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
                axios.post('/events/addEvent', null, {
                    params: {
                        sport: this.selectedSport,
                        team1: this.selectedTeam1,
                        team2: this.selectedTeam2,
                        date: this.date,
                        profit: this.profit
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .addEvent {
        width: 50%;
        margin-left: 25%;
        background: darkseagreen;
        text-align: center;
        box-shadow: 0 8px 8px rgba(0, 0, 0, .2);
        border-radius: 12px;
    }

    button {
        font-weight: 700;
        color: white;
        text-decoration: none;
        padding: .8em 1em calc(.8em + 3px);
        border-radius: 3px;
        background: rgb(64,199,129);
        box-shadow: 0 -3px rgb(53,167,110) inset;
        transition: 0.2s;
    }
    button:hover { background: rgb(53, 167, 110); }
    button:active {
        background: rgb(33,147,90);
        box-shadow: 0 3px rgb(33,147,90) inset;
    }

    input {
        width: 200px;
        font-size: 13px;
        padding: 6px 0 4px 10px;
        border: 1px solid #cecece;
        background: #F6F6f6;
        border-radius: 6px;
    }
</style>