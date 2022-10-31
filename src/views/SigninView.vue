<template>
  <div class="bg-gold vh-100">
    <div class=" pv5 ph2">
      <form class="ba b--black bw4 bg-white br2 mw6 w-40-m w-70 w-20-l center pa3 shadow-5" @submit.prevent="signIn">
        <h2 class="ttc tc">
          Sign In
        </h2>

        <label for="email" class="db mb2 black-70">Email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="db mb3 w-100 br2 ph2 pv3 ba bw1 b--black"
          placeholder="example@email.com"
        >

        <label for="password" class="db mb2 black-70">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="db mb3 w-100 br2 ph2 pv3 ba bw1 b--black"
          placeholder="••••••••"
        >

        <button type="submit" class="center db pa3 mb3 tracked bg-black ba br3 white pointer hover-black hover-bg-gold bg-animate pointer">
          Sign in
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { getXataClient } from '@/xata'

export default {
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    async signIn() {
      const xata = getXataClient()
      const user = await xata.db.users.filter('email', this.email).getFirst()
      if (!this.email || !this.password ){
        this.$notify({type: 'error', text: "Please fill all empty fields"})
      } else if (this.email !== user.email || this.password !== user.password){
        this.$notify({type: 'error', text: "Incorrect credentials"})
        this.email = '';
        this.password = '';
      } else {
        this.$notify({type: 'success', text: "Login successful!"})
        this.$router.push({path:`/dashboard/${user.username}`, params: user})
      }
    }
  }
  
}
</script>