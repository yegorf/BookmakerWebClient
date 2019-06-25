<template>
    <div class="event" @click="choose">
        <router-link class="rl" to="/makingBets">
            {{event.sport}}<br>
            {{event.team1}} VS {{event.team2}} <br>
            {{event.date}}
        </router-link>
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
    .event {

    }
</style>