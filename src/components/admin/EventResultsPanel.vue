<template>
    <div>
        <AdminMenu/>
        <div v-for="event in events">
            <EventResultForm :event="event"/>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import AdminMenu from "../menues/AdminMenu";
    import EventResultForm from "./EventResultForm";

    export default {
        name: "EventResultsPanel",
        components: {EventResultForm, AdminMenu},
        data() {
            return {
                events: [],
                results: [],
                result: null
            }
        },
        async created() {
            const eventsData = await axios.get('/events/getPastEvents');
            this.events = eventsData.data;
        },
        methods: {}
    }
</script>

<style scoped>

</style>