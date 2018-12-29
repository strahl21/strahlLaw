<template>
  <div class = "footer">
    <link href="https://fonts.googleapis.com/css?family=Noto+Serif" rel="stylesheet">
    <div class = "name">
      <h2> Strahl Law LLC </h2>
    </div>
    <div class = "contactInformation">
      <p> 455 SW Madison Ave <br> Corvallis OR 97333 <p>
      <p> gottacallstrahl@gmail.com </p>
    </div>
    <div class = "socialMedia">
      <p> logos for any social media pages </p>
    </div>
    <div class = "directions">
      <router-link to = "/"> Directions </router-link>
    </div>
    <div class = "copyright">
      <p> Copyright stuff </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
  data () {
    return {
      msg: 'Footer for the end of web page',
      showSideBar: true,
    }
  },
  computed: {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.footer {
  font-family: 'Noto Serif', serif;
  height: 30%;
  display: grid;
  /*grid-template-columns: auto auto auto;
  grid-template-rows: 1fr 3fr 1fr;*/
  grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;
  /*grid-template-areas: "phone" "empty" "socialMedia"
                       "name" "name" "name"
                       "empty" "links" "empty"*/
}

p, h2 {
  color: white;
}

.name {
  grid-column: 1 / span 1;
  grid-row: 1 / span 3;
  align-self: center;
  padding-left: 10%;
  font-size: 25px;
}

.name, .contactInformation {
  padding-bottom: 5%;

}

.contactInformation {
  grid-column: 2 / span 1;
  grid-row: 1 / span 3;
  padding-top: 3%;
}

.socialMedia {
  grid-column: 3 / span 1;
  grid-row: 1 / span 1;
}

.directions {
  grid-column: 3 / span 1;
  grid-row: 2 / span 1;
  align-self: center;
}

.copyright {
  grid-column: 3 / span 1;
  grid-row: 3 / span 1;
}

a {
  color: white;
}

a:hover {
  color: black;
}



</style>
