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
          ref="textInput"
          v-model="text"
          :rules="rules.login"
          class="pa-5"
          id="body-post"
          bg-color="white"
          label="Текст"
          :counter="200"
          maxLength="200"
          no-resize
        >
        </v-textarea>
        <div class="content_buttons">
          <v-btn @click="addPost" variant="flat" color="blue">Добавить</v-btn>
          <v-btn @click="() => this.isOpen = false" variant="flat" color="red">Отмена</v-btn>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import rules from '@/utils/validateRules'

export default {
  name: 'CreatePostComponent',
  computed: {
    ...mapState({
      auth: state => state.user.auth
    })
  },
  data () {
    return {
      text: '',
      isOpen: false,
      rules
    }
  },
  watch: {
    isOpen (to) {
      if (!to) this.text = ''
    }
  },
  methods: {
    ...mapActions({
      createPost: 'posts/createPost',
      getPosts: 'posts/getPosts'
    }),
    async addPost () {
      if (this.text) {
        const payload = {
          text: this.text
        }
        try {
          await this.createPost(payload)
          await this.getPosts()
          this.isOpen = false
        } catch (e) {
          console.log(e)
        }
      }
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
    color: #002a14;
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
