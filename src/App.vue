<template>
  <div id="app">
    <router-view/>
    <footer class="footer">
      <div class="mx-auto" style="width: 200px;">
        <a class="foottext" href="https://github.com/takagi-ryo/numcalckadai">
          github
        </a>
        <p class="foottext">
          使用環境 firebase + vue.js
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.footer {
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #111111;
}

.foottext {
  color: #EEEEEE;
}

</style>
