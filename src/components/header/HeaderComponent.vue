<template>
  <v-toolbar v-if="auth" class="pa-5" elevation="4" color="#03914d" height="40">
    <v-btn color="error" variant="flat">
      Выйти
    </v-btn>
    <p class="text-center text-color">Добро пожаловать, Пользователь</p>
    <v-toolbar-title class="text-end" >
      Лента постов
    </v-toolbar-title>
  </v-toolbar>
  <v-toolbar v-else class="pa-5" elevation="4" color="#03914d" height="40">
    <v-btn prepend-icon="mdi-login" color="info" variant="flat">
      Войти
    </v-btn>
    <v-btn prepend-icon="mdi-account-plus" color="info" variant="flat">
      Зарегистрироваться
    </v-btn>
    <v-toolbar-title class="text-end" >
      Лента постов
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data () {
    return {
      auth: false
    }
  }
}
</script>
<style lang="scss">
.v-toolbar{
  position: sticky;
  top: 0;
  z-index: 10;
}
.v-toolbar-title{
  font-size: 30px !important;
  color: white !important;
  font-weight: 700 !important;
}
.v-toolbar__content{
  column-gap: 30px !important;
}
</style>
<style lang="scss" scoped>
.text-color{
  color: white;
  font-size: 25px;
  font-weight: 500;
}
</style>
