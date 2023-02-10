<template>
  <v-app class="position-relative" full-height>
    <router-view></router-view>
  </v-app>
</template>

<script>

import { mapActions, mapMutations } from 'vuex'
import cookie from 'browser-cookies'

export default {
  name: 'App',
  methods: {
    ...mapMutations({
      checkAuth: 'user/checkAuth'
    }),
    ...mapActions({
      getAuthUser: 'user/getAuthUser',
      getPosts: 'posts/getPosts'
    })
  },
  created () {
    this.getPosts()
    if (cookie.get('auth')) this.getAuthUser()
    setInterval(() => {
      this.checkAuth()
    }, 500)
  }
}
</script>
