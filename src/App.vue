<template>
  <div id="app">
<!--      <div id="nav">-->
<!--        <ul class="mainMenu">-->
<!--          <li><router-link class="rl" to="/">Main</router-link></li>-->
<!--          <li><router-link class="rl" to="/login">Login</router-link></li>-->
<!--          <li><router-link class="rl" to="/registration">Registration</router-link></li>-->
<!--          <li><router-link class="rl" to="/directories">Directories</router-link></li>-->
<!--            <li><router-link class="rl" to="/events">Events</router-link></li>-->
<!--        </ul>-->
<!--      </div>-->
<!--      <router-view/>-->
      <router-view/>
  </div>
</template>

<style>
  .mainMenu {
    list-style: none;
    margin: 40px 0 5px;
    padding: 25px 0 5px;
    text-align: center;
    background: aliceblue;
  }

  .mainMenu li {
    display: inline-block;
  }

  .mainMenu li:after {
    content: "|";
    color: #606060;
    display: inline-block;
    vertical-align:top;
  }

  .mainMenu li:last-child:after {
    content: none;
  }

  .rl {
    text-decoration: none;
    font-family: 'Ubuntu Condensed', sans-serif;
    letter-spacing: 2px;
    position: relative;
    padding-bottom: 20px;
    margin: 0 34px 0 30px;
    font-size: 17px;
    text-transform: uppercase;
    display: inline-block;
    transition: color .2s;
  }

  .rl, .rl:visited {
    color: #9d999d;
  }

  .rl:current, .rl:hover {
    color: #feb386;
  }

</style>

<script>

  import StartPage from "./components/main_pages/StartPage";
  export default {
      components: {StartPage}
  }
</script>