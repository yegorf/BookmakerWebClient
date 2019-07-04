<template>
    <div id="panel">
        <h2 align="center">ACTUAL EVENTS</h2><br>
        <Event v-for="event in events" :id="event.id" :event="event"/>
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
            let eventsData = await axios.get('/events/getEvents');
            this.events = eventsData.data;
        }
    }
</script>

<style scoped>
    #panel {
        background: #9fa6a2;
        width: 100%;
        box-shadow: 0 4px 4px rgba(0, 0, 0, .2);
        border-radius: 5px;
        padding-bottom: 50px;
    }
</style>