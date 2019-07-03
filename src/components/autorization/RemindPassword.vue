<template>
    <div>
        <b>Write your email</b>
        <input type="text" v-model="email">
        <button @click="enter" >Send the password</button>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "RemindPassword",
        data() {
            return {
                email: null
            }
        },
        methods: {
            enter() {
                axios.post('/users/remindPassword', null, {
                    params: {
                        email: this.email
                    }
                });
                alert("The password has been send on tour email.");
            }
        }
    }
</script>

<style scoped>

</style>