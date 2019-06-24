<template>
    <div class="customer">
        <b>{{name}}</b>
        <input type="text" ref="name">
        <button @click="click">+</button>
    </div>
</template>

<script>

    export default {
        computed: {
            name() {
                return this.$store.state.user;
            }
        },
        methods: {
            click() {
                const u = this.$refs.name.value;
                this.$store.commit("setUser", u);
            }
        }
    }
</script>