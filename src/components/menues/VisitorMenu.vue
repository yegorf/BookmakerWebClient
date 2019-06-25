<template>
    <div id="nav">
        <ul class="mainMenu">
            <li><router-link class="rl" to="/">Main</router-link></li>
            <li><router-link class="rl" to="/login">Login</router-link></li>
            <li><router-link class="rl" to="/registration">Registration</router-link></li>
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
        margin: 100px 0;
        background-color: #3cd070;
    }

    /* убираем отступы и поля, а также list-style для "ul",
     * и добавляем "position:relative" */
    #nav ul {
        padding:0;
        margin:0;
        list-style: none;
        position: relative;
    }

    /* применяем inline-block позиционирование к элементам навигации */
    #nav ul li {
        margin: 0px -7px 0 0;
        display:inline-block;
        background-color: #3cd070;
        width: 15%;
    }

    /* стилизуем ссылки */
    #nav a {
        display:block;
        padding:0 10px;
        color:#FFF;
        font-size:20px;
        line-height: 60px;
        text-decoration:none;
    }

    /* изменяем цвет фона при наведении курсора */
    #nav a:hover {
        background-color: #2e8b57;
    }

</style>