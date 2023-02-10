<template>
  <HeaderComponent/>
  <v-container class="d-flex justify-center align-center">
    <v-list width="600">
      <v-list-item v-for="post in posts" :key="post.id" width="100%">
        <PostComponent :post="post"/>
      </v-list-item>
      <p v-if="!posts.length" class="w-100 d-flex align-center justify-center"
         style="font-weight: 500; font-size: 18px; color: gray">
        Нет постов</p>
    </v-list>
  </v-container>
  <CreatePostComponent/>
</template>

<script>
import HeaderComponent from '@/components/header/HeaderComponent'
import PostComponent from '@/components/post/PostComponent'
import CreatePostComponent from '@/modals/CreatePostComponent'
import { mapState } from 'vuex'

export default {
  name: 'PostsPage',
  components: {
    CreatePostComponent,
    PostComponent,
    HeaderComponent
  },
  computed: {
    ...mapState({
      posts: state => state.posts.posts
    })
  }
}
</script>
<style lang="scss">

</style>
<style lang="scss" scoped>

</style>
