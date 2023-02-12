<template>
  <div>
    <v-btn @click="() => this.isOpen = true" prepend-icon="mdi-trash-can-outline" color="error" variant="flat">
      удалить профиль
    </v-btn>
    <v-dialog width="500" v-model="isOpen">
      <div class="content pa-10">
        <p class="content_title">Действительно вы хотите удалить профиль?</p>
        <div class="content_buttons">
          <v-btn @click="remove" variant="flat" color="blue">Да</v-btn>
          <v-btn @click="() => this.isOpen = false" variant="flat" color="red">Нет</v-btn>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'RemoveProfileComponent',
  computed: {
    ...mapState({
      auth: state => state.user.auth
    })
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    ...mapActions({
      deleteUser: 'user/remove',
      getPosts: 'posts/getPosts'
    }),
    async remove () {
      await this.deleteUser()
      await this.getPosts()
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  background: white;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  &_title {
    color: #490101;
    font-weight: 700;
    font-size: 25px;
  }

  &_buttons {
    display: flex;
    align-items: center;
    justify-content: start;
    column-gap: 40px;
    margin-top: 20px;
  }
}
</style>
