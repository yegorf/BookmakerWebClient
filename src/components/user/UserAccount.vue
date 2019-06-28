<template>
    <div>
        <UserMenu/>
        <div class="personalData">
            <b>Personal data</b>
            <div>Username: {{this.user.name}}</div>
            <br>
            <div>Email: {{this.user.email}}</div>
            <br>
            <b>Balance: {{this.user.balance}}</b><br>
        </div>
        <div class="betsData">
            <b>Bets history</b><br>
            <div v-for="bet in bets">{{bet.sum}} {{bet.coef}}<br></div>
        </div>
        <div class="transactionsData">
            <b>Transactions history</b><br>
            <div v-for="transaction in transactions">{{transaction.date}} - {{transaction.sum}}</div>
        </div>
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
                bets: [],
                transactions: []
            }
        },
        async created() {
            axios.post('/users/getUser', null, {
                params: {
                    name: localStorage.getItem("user")
                }
            }).then(res => {
                this.user = res.data;
            });

            axios.post('/bets/getUserBets', null, {
                params: {
                    name: localStorage.getItem("user")
                }
            }).then(res => {
                this.bets = res.data;
            });

            axios.post('/transactions/getByUser', null, {
                params: {
                    user: localStorage.getItem("user")
                }
            }).then(res => {
                this.transactions = res.data;
            });
        }
    }
</script>

<style scoped>
    .personalData {
        width: 200px;
        height: auto;
        background: seagreen;
    }

    .betsData {
        background: lightgreen;
        width: 30%;
        float: left;
    }

    .transactionsData {
        background: darkseagreen;
        width: 30%;
        float: left;
    }
</style>