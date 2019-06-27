<template>
    <div id="panel">
        <b>ACTUAL EVENTS</b><br>
        <Event v-for="event in events" :id="event.id" :event="event" />
    </div>
</template>

<script>
    import axios from 'axios/index';
    import Event from './Event.vue';

    export default {
        name: "EventPanel",
        components: {Event},

        data() {
            return {
                events: []
            }
        },

        async created() {
            let kek = await axios.get('/events/getEvents');
            this.events = kek.data;
            console.log(this.events);
        }
    }
</script>

<style scoped>
    #panel {
        background: coral;
        width: 100%;
    }
</style>