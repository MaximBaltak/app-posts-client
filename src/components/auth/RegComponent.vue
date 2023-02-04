<template>
  <v-form class="form" @click.prevent>
    <v-row class="mt-10 d-flex justify-center align-center">
      <h1 class="form_title mb-10">Регистрация</h1>
    </v-row>
    <v-row lass="mt-10 d-flex justify-center align-center">
      <v-text-field
        v-model="login"
        bg-color="white"
        id="login_reg"
        label="Логин"
        :counter="20"
        required
      ></v-text-field>
    </v-row>
    <v-row class="mt-10 d-flex justify-center align-center">
      <v-text-field
        id="password_reg"
        v-model="password"
        bg-color="white"
        :type="show ? 'text':'password'"
        label="Пароль"
        :counter="8"
        required
      ></v-text-field>
      <v-btn @click="togglePassword" style="font-size: 8px; font-weight: 400; margin-bottom: 20px;"
             variant="text" color="blue" width="100px">
        Паказать пароль
      </v-btn>
    </v-row>
    <v-row class="mt-10 d-flex justify-center align-center">
      <v-btn @click="toggleForm" variant="text" color="blue">
        Если у вас есть аккаунт вы можете войти
      </v-btn>
    </v-row>
    <v-row class="mt-10 d-flex justify-center align-center">
      <v-btn
        type="submit"
        variant="outlined"
        color="#03914d"
      >
        Зарегистрироваться
      </v-btn>
    </v-row>
  </v-form>
</template>

<script>
import { authMixin } from '@/mixins/auth/authMixin'

export default {
  name: 'RegComponent',
  mixins: [authMixin]
}
</script>

<style lang="scss" scoped>
.form {
  width: 300px;
  display: block;
  margin: 20px auto 0;

  &_title {
    font-size: 25px;
    color: black;
    font-weight: 500;
    margin: 0;
  }
}
</style>
