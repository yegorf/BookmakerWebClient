<template>
    <div id="nav">
        <ul class="mainMenu">
            <li>
                <router-link class="rl" to="/admin">Main</router-link>
            </li>
            <li>
                <router-link class="rl" to="/admin">Directories</router-link>
                <ul>
                    <li>
                        <router-link to="/sports">Sports</router-link>
                    </li>
                    <li>
                        <router-link to="/teams">Teams</router-link>
                    </li>
                </ul>
            </li>
            <li>
                <router-link class="rl" to="/events">Events</router-link>
            </li>
            <li>
                <router-link class="rl" to="/results">Results</router-link>
            </li>
            <li>
                <router-link class="rl" to="/users">Users</router-link>
            </li>
            <li>
                <router-link class="rl" to="/transactions">Transactions</router-link>
            </li>
            <li>
                <router-link class="rl" to="/login">Log out</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "AdminMenu"
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

    #nav ul ul {
        display: none;
        position: absolute;
        top: 100%;
    }

    #nav ul li:hover > ul {
        display: inherit;
    }

    #nav ul ul li {
        min-width: 170px;
        float: none;
        display: list-item;
        position: relative;
    }
</style>