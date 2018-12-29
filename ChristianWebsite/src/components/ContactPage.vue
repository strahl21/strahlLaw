<template>
  <div class="containerOfContainers">
    <div class="headerFixed">
      <header-component/>
    </div>
    <div class="content">
      <div class = "contactPage">
        <div class = "contactInformation">
          <h1> Street Address: </h1>
          <p> 1234 NW Street Street, Corvallis, OR, 97330 <p>
          <h1> Email Address: </h1>
          <p> gottacallstrahl@gmail.com </p>
          <h1> Phone Number: </h1>
          <p> 541-XXX-XXXX </p>
        </div>
        <div class = "contactForm">
          <contact-form/>
        </div>
      </div>
    </div>
    <div class = "footer">
      <footer-component/>
    </div>
  </div>

</template>

<script>
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import ContactForm from './ContactForm'

export default {
  name: 'ContactPage',
  components: { HeaderComponent, FooterComponent, ContactForm },
  data () {
    return {
      msg: 'This is the contact page',
      showSideBar: true,
    }
  },
  computed: {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contactPage {
  display: grid;
  grid-template: 0.1fr 0.5fr / 1fr;
}

.containerOfContainers {
  display: grid;
  grid-template: 0.2fr 0.3fr 0.1fr / 1fr;
}

.footer {
  margin-top: 5%;
  background-color: grey;
  grid-row: 3 / span 1;
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
  margin-left: 30%;
  margin-right: 30%;
}

h2 {
  text-align: center;
  font-size: 16px;
}

.contactInformation {
  margin-left: 0%;
  margin-right: 0%;
  grid-row: 1 / span 1;
}

.contactForm {
  grid-row: 2 / span 1;
  align-content: center;
  padding-left: 25%;
  padding-right: 25%;
  margin-top: 5%;
}

</style>
