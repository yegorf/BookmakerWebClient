<template>
    <div>
        <b>Sport name</b><br>
        <input type="text" ref="sportInput">
        <br>
        <button @click="enter">Save</button>
        <br>
        <div v-for="sport in sports">{{sport.sport}}<br></div>
    </div>
</template>

<script>
    import axios from 'axios/index';

    export default {
        name: "SportForm",
        data() {
            return {
                sports: null
            }
        },
        async created() {
            const sports = await axios.get('/directories/getSports');
            this.sports = sports.data;
        },
        methods: {
            enter() {
                const sport = this.$refs.sportInput.value;
                axios.post('/directories/addSport', null, {
                    params : {
                        sport
                    }
                }).then(res => {
                    alert(res.data);
                });
            }
        }
    }
</script>

<style scoped>

</style>