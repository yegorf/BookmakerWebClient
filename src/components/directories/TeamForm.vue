<template>
    <div>
        <AdminMenu />
        <div class="addForm">
            <b>Team name</b><br>
            <input type="text" ref="team">
            <br>

            <b>Some information</b><br>
            <textarea ref="info"></textarea>
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
                selectTeam: this
            }
        },
        async created() {
            const teamsData = await axios.get('/directories/getTeams');
            this.teams = teamsData.data;
            console.log(this.teams);
        },
        methods: {
            enter() {
                const team = this.$refs.team.value;
                const info = this.$refs.info.value;

                axios.post('/directories/addTeam', null, {
                    params: {
                        team,
                        info
                    }
                })
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
}
.removeForm {
    background: lightgreen;
    width: 40%;
    margin-left: 10%;
    margin-right: 5%;
    float: left;
}
</style>