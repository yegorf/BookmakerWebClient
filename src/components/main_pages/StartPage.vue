<template>
    <div>
    <div id="nav">
        <ul class="mainMenu">
            <li><router-link class="rl" to="/">Main</router-link></li>
            <li><router-link class="rl" to="/login">Login</router-link></li>
            <li><router-link class="rl" to="/registration">Registration</router-link></li>
        </ul>
    </div>
        <EventPanel />
    </div>
</template>

<script>
    import EventPanel from "../events/EventPanel";
    export default {
        name: "StartPage",
        components: {EventPanel}
    }
</script>

<style scoped>

</style>