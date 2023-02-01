<template>
  <v-container>
    <h1 class="text-center title">Лента постов</h1>
  </v-container>
  <AuthComponent @toggle="toggleForm" v-if="authForm"/>
  <RegComponent @toggle="toggleForm" v-else/>
</template>

<script>
import RegComponent from '@/components/auth/RegComponent'
import AuthComponent from '@/components/auth/AuthComponent'
export default {
  name: 'AuthPage',
  components: { AuthComponent, RegComponent },
  data () {
    return {
      authForm: false
    }
  },
  methods: {
    toggleForm () {
      this.authForm = !this.authForm
    }
  }
}
</script>

<style lang="scss" scoped>
  .title{
    color: #03914d;
    font-size: 60px;
    margin-top: 50px;
  }
</style>
