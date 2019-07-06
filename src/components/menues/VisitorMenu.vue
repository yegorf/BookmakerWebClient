<template>
    <div id="nav">
        <ul class="mainMenu">
            <li>
                <router-link class="rl" to="/">
                    Main
                </router-link>
            </li>
            <li>
                <router-link class="rl" to="/login">Login</router-link>
            </li>
            <li>
                <router-link class="rl" to="/registration">Registration</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "VisitorMenu"
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