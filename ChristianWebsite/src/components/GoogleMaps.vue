<template>
<!-- key -->
  <div class = "googleMaps" id = "theGoogle">
    <div id="googleMap">
      <gmap-map
        :center="center"
        :zoom="18"
        style="width:100%;  height: 400px;">
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          @click="center=m.position"></gmap-marker>
      </gmap-map>
    </div>
    <h1> {{ msg }} </h1>
  </div>
</template>


<script>
export default {
  name: 'GoogleMaps',
  data() {
      return {
        // default to Montreal to keep it simple
        // change this to whatever makes sense
        msg: "The google map api should be above this message",
        center: { lat: 44.563963, lng: -123.263175 },
        markers: [{position: { lat: 44.563963, lng: -123.263175 }}],
        places: [],
        currentPlace: null
      };
  },
  mounted() {
    this.geolocate();
  },
  methods: {
   // receives a place object via the autocomplete component
   setPlace(place) {
     this.currentPlace = place;
   },
   addMarker() {
     if (this.currentPlace) {
       const marker = {
         lat: this.currentPlace.geometry.location.lat(),
         lng: this.currentPlace.geometry.location.lng()
       };
       this.markers.push({ position: marker });
       this.places.push(this.currentPlace);
       this.center = marker;
       this.currentPlace = null;
     }
   },
   geolocate: function() {
     navigator.geolocation.getCurrentPosition(position => {
       this.center = {
         lat: position.coords.latitude,
         lng: position.coords.longitude
       };
     });
   }
 },
  computed: {
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#googleMap {
  border: 1px;
  box-shadow: 2px 4px 4px #D9D4D4;
}

</style>
