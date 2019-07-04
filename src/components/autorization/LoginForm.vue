<template>
    <div>
        <VisitorMenu/>
        <div class="login">
            <b>LOG IN</b><br>
            <b>Username</b><br>
            <input type="text" v-model="username" id="username"><br>
            <b>Password</b><br>
            <input type="text" v-model="password" id="password"><br>
            <button @click="enter" class="enter">Enter</button>
            <br>
            <b>Forgot password?</b><br>
            <router-link to="/remindPassword">Remind password</router-link>
        </div>
    </div>
</template>

<script>
    import axios from 'axios/index';
    import UserMenu from "../menues/UserMenu";
    import VisitorMenu from "../menues/VisitorMenu";

    export default {
        name: "LoginForm",
        components: {VisitorMenu, UserMenu},
        data() {
            return {
                username: null,
                password: null
            }
        },
        async created() {
            localStorage.setItem("user", null);
            localStorage.setItem("access", null);
        },
        methods: {
             enter() {
                axios.post('/users/login', null, {
                    params: {
                        username: this.username,
                        password: this.password
                    }
                }).then(res => {
                    const user = res.data;
                    this.$store.commit("setUser", user.name);
                    this.$store.commit("setAccess", user.admin);

                    localStorage.setItem("user", user.name);
                    localStorage.setItem("access", user.admin);

                    if (this.$store.state.access == 'USER') {
                        this.$router.push({path: '/user'});
                    } else if (this.$store.state.access == 'ADMIN') {
                        this.$router.push({path: '/admin'});
                    }
                }).catch(function (error) {
                    if (error.response) {
                        alert(error.response.data.message)
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .login {
        background: seagreen;
        width: 40%;
        margin-left: 30%;
        padding: 20px;
        box-shadow: 0 8px 8px rgba(0, 0, 0, .2);
        border-radius: 12px;
        text-align: center;
    }

    button {
        font-weight: 700;
        color: white;
        text-decoration: none;
        padding: .8em 1em calc(.8em + 3px);
        border-radius: 3px;
        background: rgb(64,199,129);
        box-shadow: 0 -3px rgb(53,167,110) inset;
        transition: 0.2s;
    }
    button:hover { background: rgb(53, 167, 110); }
    button:active {
        background: rgb(33,147,90);
        box-shadow: 0 3px rgb(33,147,90) inset;
    }

    input {
        width: 200px;
        font-size: 13px;
        padding: 6px 0 4px 10px;
        border: 1px solid #cecece;
        background: #F6F6f6;
        border-radius: 6px;
    }
</style>