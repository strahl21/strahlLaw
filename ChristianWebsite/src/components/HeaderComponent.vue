<template>

  <div class = "header" id = "myHeader">
    <link href="https://fonts.googleapis.com/css?family=Noto+Serif" rel="stylesheet">

      <div class = "phoneNumber">
        <p> 541 - XXX - XXXX </p>
      </div>

      <div class = "statement">
        <h1>Strahl Law LLC</h1>
      </div>

      <div class = "socialMedia">
        <p> social media stuff goes here</p>
      </div>

      <div class = "statementPurpose">
        <h2> AWESOME STATEMENT THAT SETS THE HOOK </h2>
      </div>

      <div class = "navigationBar">
        <span>
          <router-link class = "home" to="/">Home </router-link><p style="display:inline"> |</p>
          <router-link to="/about">About </router-link><p style="display:inline"> |</p>
          <router-link class = "legalInfromation" to="/legalInformation">Legal Information </router-link><p style="display:inline"> |</p>
          <router-link class = "areasOfPractice" to="/areasOfPractice">Areas of Practice </router-link><p style="display:inline"> |</p>
          <router-link class = "contact" to="/contact">Contact</router-link>
        </span>
        <!--<p> Home | About | Legal Information | Areas of Practice | Contact </p>-->
      </div>

  </div>

  <!---
  hamburger
  <div class = "menu_icon"></div>
  <div class = "menu_icon"></div>
  <div class = "menu_icon"></div>
-->
</template>

<script>
export default {
  name: 'HeaderComponent',
  data () {
    return {
      msg: 'Header stuff',
      showSideBar: true,
    }
  },
  computed: {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navigationBar {
  grid-row: 3 / span 1;
  grid-column: 1 / span 3;
  color: white;
  /*margin-bottom: 10px;*/
  margin-left: 45px;
  padding-bottom: 10px;
}


.statementPurpose {
  grid-row: 2 / span 1;
  grid-column: 2 / span 2;
  color: white;
  align-self: center;
  font-size: 18px;
}

.phoneNumber {
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  color: white;
  font-size: 10px;
  text-align: left;
  margin-left: 20px;
  align-self: center;
}

.socialMedia {
  grid-row: 1 / span 1;
  grid-column: 3 / span 1;
  color: white;
  font-size: 10px;
  align-self: center;
}

.statement {
  grid-row: 2 / span 1;
  grid-column: 1 / span 1;
  text-align: left;
  margin-left: 50px;
  padding-left: 50px;
  font-size: 18px;
  align-self: center;
}


.header {
  font-family: 'Noto Serif', serif;
  height: 100%;
  display: grid;
  /*grid-template-columns: auto auto auto;
  grid-template-rows: 1fr 3fr 1fr;*/
  grid-template: 1fr 1fr 1fr / 2fr 1fr 1fr;
  /*grid-template-areas: "phone" "empty" "socialMedia"
                       "name" "name" "name"
                       "empty" "links" "empty"*/
  margin-bottom: 0px;
  border: 1px;
  box-shadow: 1px 3px 3px #74797A /*#A9AEB0;*/

}

h1 {
  color: white;
}

a {
  text-decoration: none;
  color: white;
  font-size: 15px;
}

a:hover {
  color: black;
}

@media only screen and (max-width: 600px) {
  .menu_icon {
    width: 35px;
    height: 5px;
    background-color: black;
    margin: 6px 0;
    position: relative;
    top: 50%;
    left: 45.5%;
  }
}
</style>
