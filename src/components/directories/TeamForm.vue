<template>
    <div>
        <AdminMenu/>
        <div class="addForm">
            <b>Team name</b><br>
            <input type="text" v-model="team">
            <br>

            <b>Some information</b><br>
            <textarea v-model="info"></textarea>
            <br>
            <button @click="enter">Save</button>
            <br>
            <div v-for="team in teams">{{team.name}}<br></div>
        </div>
        <div class="removeForm">
            <b>Remove team</b><br>
            <select v-model="selectTeam">
                <option v-for="team in teams" v-bind:value="team.id">{{team.name}}</option>
            </select>
            <button @click="remove">Remove</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import AdminMenu from "../menues/AdminMenu";

    export default {
        name: "TeamForm",
        components: {AdminMenu},
        data() {
            return {
                teams: [],
                selectTeam: this,
                info: null,
                team: null
            }
        },
        async created() {
            const teamsData = await axios.get('/directories/getTeams');
            this.teams = teamsData.data;
            console.log(this.teams);
        },
        methods: {
            enter() {
                axios.post('/directories/addTeam', null, {
                    params: {
                        team: this.team,
                        info: this.info
                    }
                }).catch(function (error) {
                    if(error.response) {
                        alert(error.response.data.message);
                    }
                });
            },
            remove() {
                axios.post('/directories/removeTeam', null, {
                    params: {
                        team: this.selectTeam
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .addForm {
        background: darkseagreen;
        width: 40%;
        margin-left: 5%;
        float: left;

        box-shadow: 0 4px 4px rgba(0, 0, 0, .2);
        border-radius: 10px;
    }

    .removeForm {
        background: lightgreen;
        width: 40%;
        margin-left: 10%;
        margin-right: 5%;
        float: left;

        box-shadow: 0 4px 4px rgba(0, 0, 0, .2);
        border-radius: 10px;
    }
</style>