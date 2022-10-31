<template>
  <div>
    <section class="bg-gold bb b--black bw2">
      <div class="vh-40 center flex justify-between  ph4 w-80">
        <a class="link black hover-white no-underline flex items-center pt-1" href="/">
          <h1 class="i fw1 f3">CV-</h1>
          <img
            src="../assets/building-blocks-lego.svg"
            class="ma center w2 h2"
            alt=""
          />
        </a>
        <div class="flex-grow flex items-center">
          <a class="f5 link dib black dim mr3 mr4-ns" href="/dashboard">Dashboard</a>
          <img
            src="../assets/user_icon.svg"
            class="ma center w2 h2 pointer"
            alt=""
            />
          <p class="ttc f5 pointer"> {{$route.params.id}}</p>
          </div>
       </div>
    </section>
    <section class="vh-100 bg-black-05 relative">

    </section>
    
  </div>
</template>

<style>
  .vh-40 {
    height: 14vh;
  }
  
</style>