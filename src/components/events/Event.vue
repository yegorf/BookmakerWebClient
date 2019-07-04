<template>
    <div @click="choose">
        <div id="event">
            <router-link class="rl" to="/makingBets">
                {{event.sport}}<br>
                {{event.team1}} VS {{event.team2}} <br>
                {{event.date}}
            </router-link>
            <b>Status: {{event.active}}</b>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Event",
        props: ['event'],
        methods: {
            choose() {
                this.$store.commit('setEvent', this.event.id);
                alert(this.event.id);
            }
        }
    }
</script>

<style scoped>
    #event {
        width: 80%;
        background: lightgreen;
        margin-bottom: 20px;
        margin-left: 10%;
        box-shadow: 0 8px 8px rgba(0, 0, 0, .2);
        border-radius: 20px;
        text-align: center;

    }
</style>