<template>
    <div>
        <AdminMenu/>
        <div class="addSport">
            <b>Sport name</b><br>
            <input type="text" v-model="sport">
            <br>
            <button @click="enter">Save</button>
            <br>
            <div v-for="sport in sports">{{sport.sport}}<br></div>
        </div>
        <div class="deleteSport">
            <b>Sport name</b><br>
            <select v-model="selectSport">
                <option v-for="sport in sports" v-bind:value="sport.id">{{sport.sport}}</option>
            </select>
            <button @click="remove">Enter</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios/index';
    import AdminMenu from "../menues/AdminMenu";

    export default {
        name: "SportForm",
        components: {AdminMenu},
        data() {
            return {
                sports: null,
                selectSport: null,
                sport: null
            }
        },
        async created() {
            const sports = await axios.get('/directories/getSports');
            this.sports = sports.data;
        },
        methods: {
            enter() {
                axios.post('/directories/addSport', null, {
                    params: {
                        sport: this.sport
                    }
                }).then(res => {
                    alert(res.data);
                }).catch(function (error) {
                    if(error.response) {
                        alert(error.response.data.message);
                    }
                });
            },
            remove() {
                const sport = this.selectSport;
                axios.post('/directories/removeSport', null, {
                    params: {
                        sport
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .addSport {
        width: 40%;
        background: darkseagreen;
        float: left;
        margin-left: 5%;
    }

    .deleteSport {
        width: 40%;
        background: lightgreen;
        float: left;
        margin-left: 10%;
        margin-right: 5%;
    }
</style>