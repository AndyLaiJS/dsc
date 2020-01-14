<template>
  <div id="app">

    <div id="nav">
      <div class="navLogo" @click="refresh()">
        <img style="height: 25px;" src="./assets/DSC-Logo.png">
        Developer Student Club CUHK
      </div>

      <div class="navLink">
        <a @click="goto('abt')">About</a>
        <a @click="goto('evts')">Workshops</a>
        <a @click="goto('team')">Teams</a>
        <a @click="goto('faq')">FAQ</a>
      </div>
    </div>
    <router-view/>

  </div>
</template>

<script>
export default {
  methods: {
    goto(theID) {
      document.getElementById(theID).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    },
    refresh() {
      window.scrollTo(0, 0);
      console.log("hi");
    }
  }
}
</script>

<style lang="scss">
@media screen and (max-width: 400px) {
  #app {
    font-size: 13px;
  }
}
@media screen and (max-width: 600px) {
  .About, .Team {
    padding: 2% 5% 3% 5% !important;
  }
  .IntroSection {
    padding: 10% 7% 10% 7% !important;
  }
  .Content {
    width: 100% !important;
    margin: 0% !important;
    text-align: center !important;
  }
  .footerBody {
    text-align: center !important;
    justify-content: center !important;
    #right {
      text-align: center !important;
    }
    .socialIcon {
      justify-content: center !important;
    }
  }
  .Cards{
    margin-left: 20px !important;
    margin-right: 20px !important;
  }

  #nav {
    height: 110px !important;
    min-height: 60px !important;
  }
  .navLink {
    font-size: 14px !important;
    height: 45px !important;
    float: none !important;
    justify-content: center !important;
    margin: 0 !important;
    a {
      height: 45px !important;
      line-height: 45px !important;
    }
  }
  .navLogo {
    height: 45px;
    line-height: 60px !important;
    width: 100% !important;
    margin: 0 !important;
    float: none !important;
  }
}
@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 100;
  src: local('Open Sans'), local('OpenSans'), url(https://fonts.gstatic.com/s/productsans/v5/HYvgU2fE2nRJvZ5JFAumwegdm0LZdjqr5-oayXSOefg.woff2) format('woff2');
}
a {
  text-decoration: none;
  color: #4285F4;
  font-weight: bold;
}
body {
  margin: 0;
}
.navLogo {
  img {
    margin-top: 15px;
  }
  display: grid;
  grid-template-columns: 50px 220px;
  justify-content: center;
  text-align: left;
  height: 60px;
  float: left;
  margin-left: 15%;
}
#app {
  font-family: 'Product Sans', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #616161;
}

#nav {
  line-height: 60px;
  height: 60px;
  background-color: white;
  box-shadow: 0px 4px 4px -2px rgba(0,0,0,0.10);
  top: 0;
  position: sticky;
  position:-webkit-sticky;
  z-index: 9999;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: None;
  }
  a:hover {
    color: black;
  }
}

.navLink {
  display: grid;
  text-align: center;
  grid-template-columns: 70px 110px 70px 70px;
  font-size: 15px;
  float: right;
  margin-right: 15%;
}
// To handle cards and all...
.cardContainer {
  text-align: left;
  padding-top: 1.5%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
}
.Cards {
  background-color: white;
  border-radius: 7px;
  min-width: 50px;
  margin-top: 0px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 25px;
  /*padding: 20px;*/
  padding: 50px 30px 0 30px;
  width: 330px;
  min-height: 250px;
  box-shadow: 0 0 15px rgba(0,0,0,0.10);
  transition: box-shadow .3s ease-in-out, transform .3s ease-in-out;
  position: relative;
  overflow: hidden;
}

// Colours
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

// Button
button {
  border: none;
  border-radius: 3px;
  background-color: #4285F4;
  color: white;
  font-size: 13px;
  padding: 12px 55px;
}
button:hover {
  background-color: #42a5f5;
  box-shadow: 0px 0px 5px 0px rgba(66,165,245,0.5);
}
</style>
