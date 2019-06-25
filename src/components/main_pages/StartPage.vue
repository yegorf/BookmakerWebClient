<template>
    <div>
        <VisitorMenu />
        <EventPanel />
    </div>
</template>

<script>
    import EventPanel from "../events/EventPanel";
    import VisitorMenu from "../menues/VisitorMenu";
    export default {
        name: "StartPage",
        components: {VisitorMenu, EventPanel},
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