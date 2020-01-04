<template>
  <div class="About">
    <h1> About </h1>
    <span id="cnt">We bridge the gap between theory and practical application for student developers.</span>

    <br><br>

    <div class="cardContainer">
      <div class="Cards">
        <img id="lb" src="../assets/lightbulb.png">
        <h2>Why DSC</h2>
        Learn new skills, gain relevant industry experience and knowledge with an hands-on 
        learning experience using Google's technologies and resources.
      </div>

      <div class="Cards">
        <img id="hs" src="../assets/handshake.png">
        <h2>Meet New People</h2>
        The DSC program allows you to make new friends and build connection
        with professors and other tech professionals in your university's tech
        community.
      </div>

      <div class="Cards">
        <img id="ad" src="../assets/audience.png">
        <h2>Target Audience</h2>
        DSC activities are targeted at University students 
        who wants to learn development skills & work to solve real-life problems.
        Everyone wanting to learn are welcomed!
      </div>
    </div>

  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
h1 {
  margin-bottom: 15px;
}
.About {
  padding: 2% 0 3% 0;
  background-color: #fafafa;
}
.Cards {
  padding-top: 30px;
}
#lb {
  height: 70px;
}
#hs {
  height: 70px;
}
#ad {
  height: 70px;
}
</style>
