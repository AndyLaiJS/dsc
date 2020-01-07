<template>
  <div id="app">

    <div id="nav">
      <div class="navLogo">
        DSC CUHK
      </div>

      <div class="navLink">
        <a href="#abt">About</a>
        <a href="#evts">Workshops</a>
        <a href="#team">Teams</a>
        <a href="#faq">FAQ</a>
      </div>
    </div>
    <router-view/>

  </div>
</template>

<style lang="scss">
@media screen and (max-width: 400px) {
  #app {
    font-size: 13px;
  }
}
@media screen and (max-width: 600px) {
  .About {
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

  #nav {
    height: 120px !important;
    min-height: 60px !important;
  }
  .navLink {
    float: none !important;
    justify-content: center !important;
    margin: 0 !important;
  }
  .navLogo {
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

body {
  margin: 0;
}
.navLogo {
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
</style>
