<template>
    <div>
        <div v-for="user in users">
            <b>Username: </b>{{user.name}}
            <b>Email: </b>{{user.email}}
            <b>Access level: </b>{{user.admin}}
        </div>
        <br>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "UserPanel",
        data() {
            return {
                users: []
            }
        },
        async created() {
            const users = await axios.get('users/getUsers');
            this.users = users.data;
            console.log(this.users);
        }
    }
</script>

<style scoped>

</style>