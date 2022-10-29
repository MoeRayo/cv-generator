<template>
  <div class="bg-gold vh-100">
    <div class="pv5 ph2">
      <form class="ba b--black bw4 bg-white br2 mw6 w-40-m w-70 w-20-l center pa3 shadow-5" @submit.prevent="signUp">
        <h2 class="ttc tc">
          Sign up
        </h2>

        <label for="name" class="db mb2 black-70">Name</label>
        <input
          id="name"
          v-model="username"
          name="name"
          type="text"
          class="db mb3 w-100 br2 ph2 pv3 ba bw1 b--black"
          placeholder="John Doe"
        >

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
          Sign up
        </button>
        <p>Already have an account? <a href="/signin" class="black-70 b">Sign in</a> </p>
      </form>
    </div>
  </div>
</template>

<script>
import { getXataClient } from '../xata'
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

export default {
  name: 'signup',
  data: () => ({
    username: '',
    email: '',
    password: '',
  }),
  methods: {
    async signUp() {
      const xata = getXataClient()
      const user = await xata.db.users.filter('username', this.username).getFirst()
      if (!user) {
        await xata.db.users.create({
          username: this.username,
          password: this.password,
          email: this.email
        })
        createToast("Account creation successful!", {type: 'success', timeout: 2000 })
      }
    }
  }
}
</script>
