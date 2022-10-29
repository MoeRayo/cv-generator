<template>
  <div>
    <TheNavigationBar />
    <router-view />
  </div>
</template>

<script>
import TheNavigationBar from "./components/TheNavigationBar.vue";

export default {
  components: {
    TheNavigationBar,
  },
};
</script>
