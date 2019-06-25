<template>
    <div>
        <UserMenu />
        <div>Username: {{this.user.name}}</div><br>
        <div>Email: {{this.user.email}}</div><br>
        <b>Balance: {{this.user.balance}}</b>
        <br>
        <div>Bets history</div><br>
        <div v-for="bet in bets">{{bet.sum}} {{bet.coef}}<br></div>
    </div>
</template>

<script>
    import axios from 'axios';
    import UserMenu from '../menues/UserMenu';

    export default {
        name: "UserAccount",
        components: {
            UserMenu
        },
        data() {
            return {
                user: null,
                bets: []
            }
        },
        async created() {

            axios.post('/users/getUser', null, {
                params: {
                    name: this.$store.state.user
                }
            }).then(res => {
                this.user = res.data;
            });

            axios.post('/bets/getUserBets', null, {
                params: {
                    name: this.$store.state.user
                }
            }).then(res => {
               this.bets = res.data;
            });
        }
    }
</script>

<style scoped>

</style>