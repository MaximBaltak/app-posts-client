<template>
  <v-toolbar v-if="auth" class="pa-5" elevation="4" color="#03914d" height="40">
    <v-btn @click="exit" prepend-icon="mdi-exit-to-app" color="error" variant="flat">
      Выйти
    </v-btn>
    <RemoveProfileComponent/>
    <p class="text-center text-color">Добро пожаловать, {{ user.login }}</p>
    <v-toolbar-title class="text-end">
      Лента постов
    </v-toolbar-title>
  </v-toolbar>
  <v-toolbar v-else class="pa-5" elevation="4" color="#03914d" height="40">
    <v-btn @click="toAuthForm" prepend-icon="mdi-login" color="info" variant="flat">
      Войти
    </v-btn>
    <v-btn @click="toRegistrationForm" prepend-icon="mdi-account-plus" color="info" variant="flat">
      Зарегистрироваться
    </v-btn>
    <v-toolbar-title class="text-end">
      Лента постов
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import RemoveProfileComponent from '@/modals/RemoveProfileComponent'

export default {
  name: 'HeaderComponent',
  components: { RemoveProfileComponent },
  computed: {
    ...mapState({
      auth: state => state.user.auth,
      user: state => state.user.user
    })
  },
  methods: {
    ...mapMutations({
      checkAuth: 'user/checkAuth'
    }),
    ...mapActions({
      exitUser: 'user/exit',
      deleteUser: 'user/remove',
      getPosts: 'posts/getPosts'
    }),
    async exit () {
      await this.exitUser()
      await this.getPosts()
    },
    toAuthForm () {
      this.$router.push({
        name: 'auth',
        query: {
          typeForm: 'login'
        }
      })
    },
    toRegistrationForm () {
      this.$router.push({
        name: 'auth',
        query: {
          typeForm: 'registration'
        }
      })
    }
  },
  created () {
    this.checkAuth()
  }
}
</script>
<style lang="scss">
.v-toolbar {
  position: sticky;
  top: 0;
  z-index: 10;
}

.v-toolbar-title {
  font-size: 30px !important;
  color: white !important;
  font-weight: 700 !important;
}

.v-toolbar__content {
  column-gap: 30px !important;
}
</style>
<style lang="scss" scoped>
.text-color {
  color: white;
  font-size: 25px;
  font-weight: 500;
}
</style>
