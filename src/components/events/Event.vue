<template>
    <div @click="choose">
        <div id="event">
            <router-link class="rl" to="/makingBets">
                {{event.sport}}<br>
                {{event.team1}} VS {{event.team2}} <br>
                {{event.date}}
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Event",
        props: ['event'],
        methods: {
            choose() {
                this.$store.commit('setEvent', this.event.id)
            }
        }
    }
</script>

<style scoped>
    #event {
        width: 80%;
        background: lightgreen;
        margin-bottom: 20px;
        padding-top: 20px;
        margin-left: 10%;
    }
</style>