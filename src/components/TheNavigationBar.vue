<template>
  <div class="flex justify-between bb b--white-30 ph4 pv3 bg-gold" v-show="$route.name !== 'dashboard'">
    <a class="link black hover-white no-underline flex items-center" href="/">
      <h1 class="mt2 mb0 i fw1 f3">CV-</h1>
      <img
        src="../assets/building-blocks-lego.svg"
        class="ma center w3 h3"
        alt=""
      />
    </a>
    <nav class="flex-grow flex items-center">
      <router-link to="/signin" class="f4 link dib black dim mr3 mr4-ns"> Sign In</router-link>
      <router-link to="/signup" class="f4 dib black bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-50">Sign Up</router-link>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'TheNavigationBar'
}
</script>
