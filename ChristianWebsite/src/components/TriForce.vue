<template>
  <div class="container">

    <div class = "box box1"><!--<h1> {{ msg }} </h1>-->
      <p> Stuff in box 1 </p>
      <p> Some awesome statement that includes a link to a contact page...</p>
    </div>

    <div class = "box box2">
      <p> Stuff in box 2 </p>
      <p> Some awesome statement that includes a link to a contact page...</p>
    </div>

    <div class = "box box3">
      <p> Stuff in box 3 </p>
      <p> Some awesome statement that includes a link to a contact page...</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TriForce',
  data () {
    return {
      msg: 'test nested component - Boom!!!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  grid-template: 1fr / 1fr 1fr 1fr;
  background-color: black;
  display: grid;
  height: 300px;
  width: 100%;
  /*position: relative;*/
  top: 50%;
  background-size: 100%;
}

.box1 {
  /*grid-row: 1 / span 1;*/
  grid-column: 1 / span 1;
}

.box2 {
  /*grid-row: 1 / span 1;*/
  grid-column: 2 / span 1;
}

.box3 {
  /*grid-row: 1 / span 1;*/
  grid-column: 3 / span 1;
}

.box {
  border: solid;
  border-color: white;
  margin: 20px;
  border-width: thick;
  border-radius: 10px;
  padding: 20px;
}

p {
    color: white;
  }


</style>
