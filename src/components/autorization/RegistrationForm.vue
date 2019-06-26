<template>
    <div>
        <VisitorMenu />
        <div class="registration" >
            <b>Registration</b><br>
            <b>Username</b><br>
            <input type="text" ref="usernameInput"><br>
            <b>Password</b><br>
            <input type="text" ref="passwordInput"><br>
            <b>Email</b><br>
            <input type="text" ref="emailInput"><br>
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
        methods: {
            enter() {
                const username = this.$refs.usernameInput.value;
                const password = this.$refs.passwordInput.value;
                const email = this.$refs.emailInput.value;

                axios.post('/users/addUser', null, {
                    params : {
                        username,
                        password,
                        email
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