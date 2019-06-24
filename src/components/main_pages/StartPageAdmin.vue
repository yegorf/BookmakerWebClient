<template>
    <div>
        <div id="nav">
            <ul class="mainMenu">
                <li><router-link class="rl" to="/admin">Main</router-link></li>
                <li><router-link class="rl" to="/directories">Directories</router-link></li>
                <li><router-link class="rl" to="/events">Events</router-link></li>
                <li><router-link class="rl" to="/users">Users</router-link></li>
            </ul>
        </div>
        <EventPanel />
    </div>
</template>

<script>
    import EventPanel from "../events/EventPanel";
    export default {
        name: "StartPageUser",
        components: {EventPanel}
    }
</script>

<style scoped>

</style>