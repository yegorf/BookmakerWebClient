<template>
    <div>
        <b>Team name</b><br>
        <input type="text" ref="team">
        <br>

        <b>Some information</b><br>
        <textarea ref="info"></textarea>
        <br>
        <button @click="enter">Save</button>
        <br>
        <div v-for="team in teams">{{team.team}}<br></div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "TeamForm",
        data() {
            return {
                teams: null
            }
        },
        async created() {
            this.teams = await axios.get('/directories/getTeams');
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
            }
        }
    }
</script>

<style scoped>

</style>