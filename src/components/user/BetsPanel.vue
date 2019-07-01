<template>
    <div>
        <UserMenu />
        <div class="betsData">
            <b>Bets history</b><br>
            <div v-for="bet in bets">{{bet.sum}}$ {{bet.coef}}<br></div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import UserMenu from "../menues/UserMenu";

    export default {
        name: "BetsPanel",
        components: {UserMenu},
        data() {
            return {
                bets: []
            }
        },
        async created() {
            axios.post('/bets/getUserBets', null, {
                params: {
                    name: localStorage.getItem("user")
                }
            }).then(res => {
                this.bets = res.data;
            });
        }
    }
</script>

<style scoped>

</style>