<template>
  <div class="hello2">
    <div class = "hello"><!--<h1> {{ msg }} </h1>-->
      <img src="../assets/gavel.png">
      <div class = "statement">
        <p> All just filler stuff... </p>
      </div>
      <div class = "contact">
        <h2> Contact us </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageClicker',
  data () {
    return {
      msg: 'test nested component - Boom!!!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  height: 100%;
  width: 100%;
  top: 50%;
  /*background: url("../assets/gavel.png");*/
  /*background-size: 100%;*/
}

.hello2 {
  align-content: center;
}

.statement, .contact {
  display: flex;
  justify-content: center;

}

img {
  padding-left: 20%;
}

h2 {
  color: black;
  /*position: relative;*/
  top: 65%;
  border: solid;
  border-color: black;
  width: 30%;
  left: 33%;
  padding: 10px;
  font-size: 1em;
  text-align: center;
}

h2:hover {
  color: white;
  background-color: black;
}

p {
    color: black;
    /*position: relative;*/
    top: 10%;
    width: 30%;
    left: 33%;
    padding: 10px;
    font-size: 1.5em;
  }

</style>
