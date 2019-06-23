<template>
    <div class="event">
        {{event.sport}}<br>
        {{event.team1}} VS {{event.team2}} <br>
        {{event.date}}
        <br>
        <br>
    </div>
</template>

<script>
    export default {
        name: "Event",
        props: ['event']
    }
</script>

<style scoped>
    .event {

    }
</style>