<template>
  <div class="containerOfContainers">
    <div class="headerFixed">
      <header-component/>
    </div>
    <div class="content">
      <div class = "AreasOfPractice">
        <h1> A picture could go here... </h1>
        <h1> This page tells us about the LLC A few sentences here that highlight the main point.  </h1>
        <p> History | Background | etc More supplemental text for people that want to read more about
        the law firm than just a broad outline
        Adding a bunch of text
        will maintain the gap?</p>
        <p> {{ msg }} </p>
      </div>
    </div>
    <div class = "gridOfLinks">
      <router-link tag="div" to="/legalInformation" class = "box legalInformationAbout">
        <img src="../assets/legalInformationLogo.png">
        <h2>Legal Information</h2>
      </router-link>
      <router-link tag="div" to="/about" class = "box areasOfPractice">
        <img src="../assets/aboutLogo3.png" class = "imgAOP">
        <h2>About</h2>
      </router-link>
      <router-link tag="div" to="/contact" class = "box contact">
        <img src="../assets/contactLogo.png">
        <h2>Contact</h2>
      </router-link>
    </div>
    <div class = "footer">
      <footer-component/>
    </div>
  </div>

</template>

<script>
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'

export default {
  name: 'AreasOfPractice',
  components: { HeaderComponent, FooterComponent },
  data () {
    return {
      msg: 'This is the about page. The smaller text is for those who want to read more',
      showSideBar: true,
    }
  },
  computed: {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.AreasOfPractice {
  display: block;
}

.containerOfContainers {
  display: grid;
  grid-template: 0.5fr 0.5fr 1fr 0.5fr / 1fr;
}

.footer {
  margin-top: 3%;
  background-color: grey;
  grid-row: 4 / span 1;
}

.headerFixed {
  grid-row: 1 / span 1;
  background-color: grey;
  /*position: fixed;*/
  width: 100%;
  height: 60%;
}

.content {
  grid-row: 2 / span 1;
  /*margin-top: 20px;*/
  font-family: "sofia-pro","Helvetica","Arial", sans-serif;
}

h1, p {
  margin-left: 20%;
  margin-right: 20%;
}

h2 {
  text-align: center;
  font-size: 16px;
}

img {
  padding-top: 10%;
  padding-bottom: 5%;
  height: 150px;
  width: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.box:hover {
  background-color: white;
  color: black;
  border: solid;
  border-color: black;
  border-width: 3px;
}

.imgAOP {
  padding-top: 5%;
  padding-bottom: 10%;
}

.gridOfLinks {
  grid-row: 3 / span 1;
  margin-top: 3%;
  margin-left: 10%;
  margin-right: 10%;
  display: grid;
  grid-template: 1fr / 1fr 1fr 1fr;
}

.box {
  border: solid;
  border-color: white;
  margin: 20px;
  border-width: thick;
  border-radius: 10px;
  padding: 20px;
}


.legalInformationAbout {
  grid-column: 1 / span 1;
  background-color: #F1F1F1;
}

.areasOfPractice {
  grid-column: 2 / span 1;
  background-color: #F1F1F1;

}

.contact {
  grid-column: 3 / span 1;
  background-color: #F1F1F1;

}

</style>
