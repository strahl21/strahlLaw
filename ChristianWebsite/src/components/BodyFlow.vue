<template>
  <div>
    <div class="containerOfContainers">
      <div class="headerFixed">
        <header-component/>
      </div>
      <div class="content">
          <div class = "image">
            <image-clicker/>
          </div>
          <div class = "information">
            <tri-force/>
          </div>
          <div class = "additionalInformation">
            <first-banner/>
          </div>
          <div class = "container">
            <div class = "contactFormSection">
              <contact-form/>
            </div>
            <div class = "googleMapsSection">
              <google-maps/>
            </div>
        </div>
      </div>
      <div class = "footer">
        <footer-component/>
      </div>
    </div>
  </div>
</template>

<script>
import ImageClicker from './ImageClicker';
import TriForce from './TriForce';
import FirstBanner from './FirstBanner';
import ContactForm from './ContactForm';
import GoogleMaps from './GoogleMaps';
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
export default {
  name: 'BodyFlow',
  components: { ImageClicker, TriForce, FirstBanner, ContactForm, GoogleMaps, HeaderComponent, FooterComponent },
  data () {
    return {
      msg: 'message for the body flow'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.containerOfContainers {
  display: grid;
  grid-template: 0.5fr 4fr 0.5fr / 1fr;
}

.headerFixed {
  grid-row: 1 / span 1;
  background-color: grey;
  /*position: fixed;*/
  width: 100%;
  height: 60%;
}

.footer {
  margin-top: 3%;
  background-color: grey;
  grid-row: 3 / span 1;
}

.content {
  grid-row: 2 / span 1;
}

.image, .information, .additionalInformation {
  padding-left: 10%;
  padding-right: 10%;
}


h1, h2 {
  font-weight: normal;
}

.container {
  display: grid;
  grid-template: 1fr / 1fr 1fr;
}

.contactFormSection {
  grid-row: 1 / span 1;
  grid-column: 2 / span 1;

}

.googleMapsSection {
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  margin-top: 10%;
  padding-left: 10%;
  padding-top: 35%;
  padding-right: 5%;
}

</style>
