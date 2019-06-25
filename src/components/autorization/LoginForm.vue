<template>
    <div>
        <VisitorMenu />

        <b>Registration</b><br>
        <b>Username</b><br>
        <input type="text" ref="usernameInput"><br>
        <b>Password</b><br>
        <input type="text" ref="passwordInput"><br>
        <button @click="enter">Enter</button>
        <br>
    </div>
</template>

<script>
    import axios from 'axios/index';
    import UserMenu from "../menues/UserMenu";
    import VisitorMenu from "../menues/VisitorMenu";

    export default {
        name: "LoginForm",
        components: {VisitorMenu, UserMenu},
        async created() {
            localStorage.setItem("user", null);
            localStorage.setItem("access", null);
        },
        methods: {
            enter() {
                const username = this.$refs.usernameInput.value;
                const password = this.$refs.passwordInput.value;

                axios.post('/users/login', null, {
                    params: {
                        username,
                        password
                    }
                }).then(res => {
                    const user = res.data;
                    if(user.message != null) {
                        alert(user.message);
                    } else {
                        this.$store.commit("setUser", user.name);
                        this.$store.commit("setAccess", user.admin);

                        localStorage.setItem("user", user.name);
                        localStorage.setItem("access", user.admin);

                        if(this.$store.state.access == '0') {
                            this.$router.push({path: '/user'});
                        } else if(this.$store.state.access == '1') {
                            this.$router.push({path: '/admin'});
                        }
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>