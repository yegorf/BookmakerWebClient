<template>
    <div id="nav">
        <ul class="mainMenu">
            <li>
                <router-link class="rl" to="/user">Main</router-link>
            </li>
            <li>
                <router-link class="rl" to="/directories">My bets</router-link>
            </li>
            <li>
                <router-link class="rl" to="/userAccount">My account</router-link>
            </li>
            <li>
                <router-link class="rl" to="/login">Log out</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "UserMenu"
    }
</script>

<style scoped>
    #nav {
        margin-bottom: 100px;
        background-color: #3cd070;
    }

    #nav ul {
        padding: 0;
        margin: 0;
        list-style: none;
        position: relative;
    }

    #nav ul li {
        margin: 0px -7px 0 0;
        display: inline-block;
        background-color: #3cd070;
        width: 15%;
    }

    #nav a {
        display: block;
        padding: 0 10px;
        color: #FFF;
        font-size: 20px;
        line-height: 60px;
        text-decoration: none;
    }

    #nav a:hover {
        background-color: #2e8b57;
    }

</style>