<template>
  <div class="Container">
    <div class="IntroSection">

      <div class="Content">
        <h1> Developer Student Club @ CUHK </h1>
        <p> 
          Developer Student Clubs are university-based community clubs powered by 
          <b>
          <span id="gblue">G</span>
          <span id="gred">o</span>
          <span id="gyel">o</span>
          <span id="gblue">g</span>
          <span id="ggre">l</span>
          <span id="gred">e</span> 
          </b>
          Developers designed to inspire and sharpen university students' <span id="gred"><b>mobile</b></span> and <span id="ggre"><b>web
          development skills</b></span>, <span id="gblue"><b>design thinking skills</b></span> 
          and <span id="gyel"><b>leadership skills</b></span>. 
        </p>
      </div>

      <div class="doodle">
        <img style="height: 250px" src="../assets/orange.png">
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

    <span id="faq">
      <faq/>
    </span>

    <thefooter/>

  </div>
</template>

<script>
import about from "./About"
import events from "./Events"
import teams from "./Teams"
import thefooter from "./Footer"
import faq from "./FAQ"
export default {
  components: {
    about,
    events,
    teams,
    thefooter,
    faq,
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
.doodle {
  margin: 0 auto;
}
</style>
