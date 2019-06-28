<template>
    <div>
        <AdminMenu/>
        <div class="makeAdmin">
            <b>Make admin</b><br>
            <select v-model="user">
                <option v-for="user in users" v-bind:value="user.id">{{user.name}}</option>
            </select><br>
            <button @click="makeAdmin">Make admin</button>
            <br>
            <b>Users</b><br>
            <div v-for="user in users">
                <b>Username: </b>{{user.name}}
                <b>Email: </b>{{user.email}}
                <b>Access level: </b>{{user.admin}}
            </div>
        </div>
        <div class="removeAdmin">
            <b>Remove admin</b><br>
            <select v-model="admin">
                <option v-for="admin in admins" v-bind:value="admin.id">{{admin.name}}</option>
            </select><br>
            <button @click="removeAdmin">Make user</button>
            <br>
            <b>Admins</b><br>
            <div v-for="admin in admins">
                <b>Username: </b>{{admin.name}}
                <b>Email: </b>{{admin.email}}
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
                users: [],
                admins: [],
                user: null,
                admin: null
            }
        },
        async created() {
            const users = await axios.get('/users/getUsers');
            this.users = users.data;
            const admins = await axios.get('/users/getAdmins');
            this.admins = admins.data;
        },
        methods: {
            makeAdmin() {
                axios.post('/users/makeAdmin', null, {
                    params: {
                        id: this.user
                    }
                })
            },
            removeAdmin() {
                axios.post('/users/removeAdmin', null, {
                    params: {
                        id: this.admin
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .makeAdmin {
        background: honeydew;
        width: 50%;
        float: left;
    }

    .removeAdmin {
        background: #3cd070;
        width: 50%;
        float: left;
    }
</style>