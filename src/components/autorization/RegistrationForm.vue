<template>
    <div>
        <VisitorMenu/>
        <div class="registration">
            <b>Registration</b><br>
            <b>Username</b><br>
            <input type="text" v-model="username"><br>
            <b>Password</b><br>
            <input type="text" v-model="password"><br>
            <b>Email</b><br>
            <input type="text" v-model="email"><br>
            <button @click="enter">Enter</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios/index';
    import UserMenu from "../menues/UserMenu";
    import VisitorMenu from "../menues/VisitorMenu";

    export default {
        name: "RegistrationForm",
        components: {VisitorMenu, UserMenu},
        data() {
            return {
                username: null,
                password: null,
                email: null
            }
        },
        methods: {
            enter() {
                axios.post('/users/addUser', null, {
                    params: {
                        username: this.username,
                        password: this.password,
                        email: this.email
                    }
                }).then(res => {
                    alert(res.data);
                });
            }
        }
    }
</script>

<style scoped>
    .registration {
        background: seagreen;
        width: 40%;
        margin-left: 30%;
        padding: 20px;
    }
</style>