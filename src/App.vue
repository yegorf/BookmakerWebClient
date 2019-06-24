<template>
  <div id="app">
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
      components: {StartPage},
      async created() {
          console.log(this.$store.state.user);
          console.log(this.$store.state.access);
      }
  }
</script>