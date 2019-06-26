<template>
    <div>
        <b>Select the user</b><br>
        <select v-model="userSelect">
            <option v-for="user in users" v-bind:value="user.id">{{user.name}}</option>
        </select>
        <br>
        <b>Sum: </b><input type="text" v-model="sum">
        <button @click="enter">Enter</button>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "TransactionForm",
        data() {
            return {
                users: [],
                userSelect: null,
                sum: null
            }
        },
        async created() {
            const usersData = await axios.get('/users/getUsers');
            this.users = usersData.data;
            console.log(this.users);
        },
        methods: {
            enter() {
                axios.post('/transactions/addTransaction', null, {
                    params: {
                        user: this.userSelect,
                        sum: this.sum
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>