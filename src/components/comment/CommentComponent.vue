<template>
  <div class="comment">
    <p class="comment_title">{{comment?.user ? comment?.user?.login: 'Пользователь'}}</p>
    <p class="comment_body">{{comment?.text}}</p>
    <div class="comment_actions">
      <div class="comment_actions-wrapper">
        <v-btn @click="update" variant="text" color="grey" icon="mdi-heart-outline"></v-btn>
        <p class="comment_actions-counter">{{comment?.likes}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CommentComponent',
  props: {
    comment: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    ...mapActions({
      getPosts: 'posts/getPosts',
      updateComment: 'posts/updateComment'
    }),
    async update () {
      await this.updateComment(this.comment.id)
      await this.getPosts()
    }
  }
}
</script>

<style lang="scss" scoped>
.comment{
  background: white;
  width: 100%;
  min-height: 100px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  &_title{
    width: 100%;
    height: 40px;
    background: rgba(3, 107, 145, 0.1);
    color: black;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-size: 16px;
    font-weight: 500;
  }
  &_body{
    color: #002a14;
    font-weight: 300;
    font-size: 14px;
    background: white;
    padding: 20px;
    word-break: break-all;
    width: 100%;
  }
  &_actions{
    display: flex;
    align-items: center;
    column-gap: 40px;
    justify-content: start;
    margin-top: 20px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  &_actions-wrapper{
    display: flex;
    align-items: center;
  }
  &_actions-counter{
    text-align: center;
    margin: 0;
    color: black;
    font-size: 14px;
    font-weight: 400;
  }
}
</style>
