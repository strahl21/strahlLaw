<template>

  <div class = "banner" id = "theBanner">
    <div class = "bannerInfo">
      <p> {{ msg }}</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'FirstBanner',
  data () {
    return {
      msg: 'Banner stuff, can be pictures and information...',
      showSideBar: true,
    }
  },
  computed: {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.banner {
  height: 100%;
  background-color: #F1F1F1;
}

</style>
