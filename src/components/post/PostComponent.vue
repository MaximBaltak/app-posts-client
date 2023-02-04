<template>
  <div>
  <div class="card">
    <p class="card_title">Название</p>
    <p class="card_body">Пост 1</p>
    <div class="card_actions">
      <div class="card_actions-wrapper">
<!--        <v-btn variant="text" color="grey" icon="mdi-heart-outline"></v-btn>-->
        <v-btn variant="text" color="red" icon="mdi-heart"></v-btn>
        <p class="card_actions-counter">1928</p>
      </div>
      <div class="card_actions-wrapper">
        <v-btn variant="text" color="grey" icon="mdi-comment-text-outline"></v-btn>
        <p class="card_actions-counter">1928</p>
      </div>
    </div>
  </div>
    <v-list width="100%">
      <v-list-item width="100%"><CommentComponent/></v-list-item>
    </v-list>
  </div>
</template>

<script>
import CommentComponent from '@/components/comment/CommentComponent'
export default {
  name: 'PostComponent',
  components: { CommentComponent }
}
</script>

<style lang="scss" scoped>
  .card{
    background: white;
    width: 97%;
    min-height: 100px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    margin: 10px;
    &_title{
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
    &_body{
      color: #002a14;
      font-weight: 400;
      font-size: 16px;
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
