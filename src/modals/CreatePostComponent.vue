<template>
  <div>
    <v-btn v-if="auth" @click="() =>this.isOpen = true" icon color="#03914d" size="100" class="position-fixed"
           style="top: 85%; left: 30px">
      <v-icon color="white" size="70">mdi-plus</v-icon>
    </v-btn>
  <v-dialog width="500" v-model="isOpen">
    <div class="content pa-10">
      <p class="content_title">Создание поста</p>
      <v-textarea
        class="pa-5"
        id="body-post"
        bg-color="white"
        label="Текст"
        :counter="200"
        no-resize
      >
      </v-textarea>
      <div class="content_buttons">
        <v-btn variant="flat" color="blue">Добавить</v-btn>
        <v-btn variant="flat" color="red">Отмена</v-btn>
      </div>
    </div>
  </v-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CreatePostComponent',
  computed: {
    ...mapState({
      auth: state => state.user.auth
    })
  },
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
  width: 100%;
  background: white;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  &_title{
    color: #002a14;
    font-weight: 700;
    font-size: 25px;
  }
  &_buttons{
    display: flex;
    align-items: center;
    justify-content: start;
    column-gap: 40px;
    margin-top: 20px;
  }
}
</style>
