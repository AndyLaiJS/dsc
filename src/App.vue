<template>
  <div id="app">

    <div id="nav">
      <div class="navLogo">

      </div>
      
      <div class="navLink">
        <router-link to="/about">About</router-link>
        <router-link to="">Workshops</router-link>
        <router-link to="">Teams</router-link>
        <router-link to="">FAQ</router-link>
      </div>
    </div>
    <router-view/>

  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
  position: sticky;
  position:-webkit-sticky;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: None;
    &.router-link-exact-active {
      color: black;
    }
  }
}

.navLink {
  display: grid;
  text-align: center;
  grid-template-columns: 70px 110px 70px 70px;
  font-size: 15px;
  float: right;
  margin-right: 10%;
}
</style>
