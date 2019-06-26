<template>
    <div>
        <AdminMenu />
        <div class="usersPanel">
            <div v-for="user in users">
                <b>Username: </b>{{user.name}}
                <b>Email: </b>{{user.email}}
                <b>Access level: </b>{{user.admin}}
            </div>
        </div>
        <br>
    </div>
</template>

<script>
    import axios from 'axios';
    import AdminMenu from "../menues/AdminMenu";

    export default {
        name: "UserPanel",
        components: {AdminMenu},
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
.usersPanel {
    background: darkseagreen;
    width: 50%;
}
</style>