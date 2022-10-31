<template>
 <div class="flex absolute vh-50 top-4 left-2 right-2 w-90 center mw9">
  <div class="mr3 bg-white w-70 br3 pa3">
    <form @submit.prevent="sub">
      <label for="email" class="db mb2 black-70">firstname</label>
        <input
          id="firstname"
          v-model="firstname"
          name="firstname"
          type="firstname"
          class="db mb3 w-100 br2 ph2 pv3 ba bw1 b--black"
          placeholder="firstname"
        >
        <label for="lastname" class="db mb2 black-70">lastname</label>
        <input
          id="lastname"
          v-model="lastname"
          name="lastname"
          type="lastname"
          class="db mb3 w-100 br2 ph2 pv3 ba bw1 b--black"
          placeholder="lastname"
        >
        <button type="submit">sub</button>
    </form>
   
  </div>
  <div class="bg-white w-30 br3 pa3">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa iure magnam non, modi doloribus dolor voluptates? Fugit assumenda rerum possimus dolore alias! Corrupti inventore consequatur quia voluptates ea. Ex, odit?

  </div>
 </div>
</template>

<script>
export default {
  data: () => ({
    firstname: '',
    lastname: ''
  }),
 
}
</script>

<style>
  .top-4 {
    top: 6.5rem
  }
</style>