<template>
    <div>
        <div v-for="user in users">{{user.username}}</div>
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
           // this.users = users;
            console.log(users);
        }
    }
</script>

<style scoped>

</style>