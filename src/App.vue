<template>
  <div id="app">
    <nav class="navbar">
      <div class="head-left">
        <img src="./assets/pb.png">
      </div>
      <div   class="head-right">  
        <span>{{ tm }}</span> 
      </div>
    </nav>
    <router-view></router-view>
    
  <footer class="ft">
    <marquee name ="status">
      *** Paybox Testing By VueJs***
    </marquee>
  </footer>
  </div>

</template>

<script src="./js/app.js">

</script>