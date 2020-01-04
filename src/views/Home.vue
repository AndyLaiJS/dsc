<template>
  <div class="Container">
    <div class="IntroSection">

      <div class="Content">
        <h1> Developer Student Club @ CUHK </h1>
        <p> 
          Developer Student Clubs is a
          <b>
          <span id="gblue">G</span>
          <span id="gred">o</span>
          <span id="gyel">o</span>
          <span id="gblue">g</span>
          <span id="ggre">l</span>
          <span id="gred">e</span> 
          </b>
          Developers program designed for university 
          students to learn and sharpen their <span id="gred"><b>mobile</b></span> and <span id="ggre"><b>web
          development skills</b></span>, <span id="gblue"><b>design thinking skills</b></span> 
          and <span id="gyel"><b>leadership skills</b></span>.
        </p>
      </div>

      <div class="doodle">
        doodle
      </div>

    </div>

    <span id="abt">
      <about/>
    </span>

    <span id="evts">
      <events/>
    </span>

    <span id="team">
      <teams/>
    </span>

  </div>
</template>

<script>
import about from "./About"
import events from "./Events"
import teams from "./Teams"
export default {
  components: {
    about,
    events,
    teams,
  },
}
</script>
<style>
h1, h2, h3 {
  color: #212121;
}
</style>
<style scoped lang="scss">
h1 {
  letter-spacing: 1px;
}
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
  flex-direction: row;
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
</style>
