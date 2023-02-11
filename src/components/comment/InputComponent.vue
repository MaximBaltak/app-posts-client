<template>
  <div class="input">
    <div class="input_actions mt-10">
      <v-text-field
        v-model="text"
        type="text"
        :counter="100"
        maxLength="100"
        id="input-comment"
        bg-color="white"
        label="Комментарий"
      ></v-text-field>
      <v-btn @click="addComment" class="mb-6" variant="text" icon="mdi-send" color="rgba(3, 145, 77, 0.6)"></v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'InputComponent',
  props: {
    postId: {
      type: Number
    }
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    ...mapActions({
      getPosts: 'posts/getPosts',
      createComment: 'posts/createComment'
    }),
    async addComment () {
      if (this.text) {
        const payload = {
          postId: this.postId,
          text: this.text
        }
        try {
          await this.createComment(payload)
          await this.getPosts()
          this.text = ''
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.input{
  background: white;
  width: 100%;
  min-height: 100px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  &_actions{
    display: flex;
    align-items: center;
    column-gap: 40px;
    height: 30px;
    justify-content: start;
  }
}
</style>
