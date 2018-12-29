<template>

  <div class = "form" id = "formSpree">
    <div class = "header">
      <h1> Contact Us </h1>
    </div>
    <div class = "formContact">
    <form action="https://formspree.io/willstrahl32@gmail.com"
      method="POST">
      <div>
        <label for = "first name">First Name:</label>
        <input type="text" placeholder = "First Name" id = "first name" name="first name">
        <label for = "last name">Last Name:</label>
        <input type="text" placeholder = "Last Name" id = "last name" name="last name">
      </div>
      <div>
        <label for = "email address">Email Address:</label>
        <input type="text" placeholder = "youremailaddress@emailservice.com" id = "email address" name="_replyto">
      </div>
      <div>
        <label for = "phone number">Phone Number:</label>
        <input type="text" placeholder = "(XXX)XXX - XXXX" id = "phone number" name="contactInfo">
      </div>
      <label for = "message">Message:</label>
      <textarea type = "text" placeholder = "Type here..." id = "message" name = "feedback"></textarea>
      <div>
        <input type="text" name="_gotcha" style="display:none" />
      </div>
      <div class = "submitButton">
        <input type="submit" id = "button" value="Send">
      </div>
    </form>
  </div>
</div>

</template>

<script>
export default {
  name: 'ContactForm',
  data () {
    return {
      msg: 'Banner stuff, needs different background color...',
      showSideBar: true,
    }
  },
  computed: {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

input[type=text], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  box-sizing: border-box;
}

input[type=submit] {
  width: 25%;
  margin-top: 20px;
  display: inline-block;
}

form {
  margin: 0 auto;
  padding-left: 5em;
  padding-right: 5em;
  padding-top: 2em;
  padding-bottom: 2em;
  color: black;
  background-color: #F1F1F1;
  margin-right: 5em;
  margin-left: 2em;
  margin-top: 3em;
  border: 1px;
  box-shadow: 2px 4px 4px #D9D4D4;
}

label {
  /*text-align: center;*/
  font-size: 25px;
  display: inline-block;
  padding: 12px 12px 12px 0;

}

input {
  box-sizing: border-box;
  margin-bottom: 20px;
}

textarea{
  /*margin-bottom: 40px;*/
  height: 200px;
  /*width: 50%;*/
}

label, textarea {
  vertical-align: top;
}

.submitButton, .header {
  text-align: center;
}

.header {
  margin-right: 10em;
  margin-left: 5em;
}

</style>
