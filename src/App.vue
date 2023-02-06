<template>
  <v-app class="position-relative" full-height>
      <router-view></router-view>
  </v-app>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapMutations({
      checkAuth: 'user/checkAuth'
    })
  },
  created () {
    setInterval(() => {
      this.checkAuth()
    }, 500)
  }
}
</script>
