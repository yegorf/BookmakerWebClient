<template>
    <div>
        <AdminMenu/>
        <EventPanel/>
    </div>
</template>

<script>
    import EventPanel from "../events/EventPanel";
    import AdminMenu from "../menues/AdminMenu";

    export default {
        name: "StartPageUser",
        components: {AdminMenu, EventPanel}
    }
</script>

<style scoped>

</style>