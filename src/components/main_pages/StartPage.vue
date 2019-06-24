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
        components: {EventPanel},
        async created() {
            if(localStorage.getItem("access") == '0') {
                this.$router.push({path: '/user'});
            } else if(localStorage.getItem("access") == '1') {
                this.$router.push({path: '/admin'});
            }
        }
    }
</script>

<style scoped>

</style>