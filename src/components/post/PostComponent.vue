<template>
  <div>
    <div class="card">
      <p class="card_title">{{ post?.user ? post?.user?.login : 'Пользователь' }}</p>
      <p class="card_body">{{ post.text }}</p>
      <div class="card_actions">
        <div class="card_actions-wrapper">
          <v-btn v-if="!post.isLike" @click="update" variant="text" color="grey" icon="mdi-heart-outline"></v-btn>
          <v-btn v-else @click="update" variant="text" color="red" icon="mdi-heart"></v-btn>
          <p class="card_actions-counter">{{ post.likes }}</p>
        </div>
        <div v-if="post.showComments" class="card_actions-wrapper">
          <v-btn @click="showComments(post.id)" variant="text" color="blue" icon="mdi-comment-text-outline"></v-btn>
          <p class="card_actions-counter">{{ post.comments.length }}</p>
        </div>
        <div v-else class="card_actions-wrapper">
          <v-btn @click="showComments(post.id)" variant="text" color="grey" icon="mdi-comment-text-outline"></v-btn>
          <p class="card_actions-counter">{{ post.comments.length }}</p>
        </div>
      </div>
    </div>
    <v-list v-if="post.showComments" width="100%">
      <v-list-item v-for="comment in post.comments" :key="comment.id" width="100%">
        <CommentComponent :comment="comment"/>
      </v-list-item>
      <p v-if="!post.comments.length" class="w-100 d-flex align-center justify-center"
         style="font-weight: 500; font-size: 18px; color: gray">
        Нет комментариев</p>
      <v-list-item v-if="auth" width="100%">
        <InputComponent :post-id="post.id"/>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import CommentComponent from '@/components/comment/CommentComponent'
import InputComponent from '@/components/comment/InputComponent'
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  name: 'PostComponent',
  props: {
    post: {
      type: Object,
      default: () => {
      }
    }
  },
  components: {
    InputComponent,
    CommentComponent
  },
  computed: {
    ...mapState({
      auth: state => state.user.auth
    })
  },
  methods: {
    ...mapMutations({
      showComments: 'posts/showComments'
    }),
    ...mapActions({
      getPosts: 'posts/getPosts',
      updatePost: 'posts/updatePost'
    }),
    async update () {
      if (!this.auth) {
        await this.$router.push({
          name: 'auth',
          query: {
            typeForm: 'login'
          }
        })
      } else {
        await this.updatePost(this.post.id)
        await this.getPosts()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  background: white;
  width: 97%;
  min-height: 100px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin: 10px;

  &_title {
    width: 100%;
    height: 40px;
    background: rgba(3, 145, 77, 0.1);
    color: black;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-size: 18px;
    font-weight: 600;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  &_body {
    color: #002a14;
    font-weight: 400;
    font-size: 16px;
    background: white;
    padding: 20px;
    word-break: break-all;
    width: 100%;
  }

  &_actions {
    display: flex;
    align-items: center;
    column-gap: 40px;
    justify-content: start;
    margin-top: 20px;
  }

  &_actions-wrapper {
    display: flex;
    align-items: center;
  }

  &_actions-counter {
    text-align: center;
    margin: 0;
    color: black;
    font-size: 14px;
    font-weight: 400;
  }
}
</style>
