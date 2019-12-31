<template>
  <div class="Container">
    <div class="IntroSection">

      <div class="Content">
        <h1> Developer Student Club @ CUHK </h1>
        <p> 
          Developer Student Club @ CUHK
          Developer Student Clubs is a
          <b>
          <span id="gblue">G</span>
          <span id="gred">o</span>
          <span id="gyel">o</span>
          <span id="gblue">g</span>
          <span id="ggre">l</span>
          <span id="gred">e</span> 
          </b>
          Developers program for university 
          students to learn <span id="gred"><b>mobile</b></span> and <span id="ggre"><b>web
          development skills</b></span>, <span id="gblue"><b>design thinking skills</b></span> 
          and <span id="gyel"><b>leadership skills</b></span>.
        </p>
      </div>

      <div class="doodle">
          DOODLE DOODLE DOODLE DOODLE DOODLE
      </div>

    </div>

    <about/>
  </div>
</template>

<script>
import about from "./About"
export default {
  components: {
    about
  },
}
</script>
<style>
h1 {
  color: #212121;
}
</style>
<style scoped lang="scss">
#gblue {
  color: #4285F4;
}
#gred {
  color: #DB4437;
}
#ggre {
  color: #0F9D58;
}
#gyel {
  color: #F4B400;
}
.IntroSection {
  padding: 10% 0 10% 0;
  display: flex;
  flex-wrap: wrap;
}
.Content {
  text-align: left;
  width: 30%;
  margin-left: 15%;
  p {
    font-size: 20px;
  }
}
.About {
  padding: 3% 0 3% 0;
  background-color: #fafafa;
}
</style>
