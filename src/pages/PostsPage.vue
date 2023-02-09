<template>
  <HeaderComponent/>
  <v-container class="d-flex justify-center align-center">
    <v-list width="600" >
      <v-list-item v-for="post in posts" :key="post.id" width="100%"><PostComponent :post="post"/></v-list-item>
    </v-list>
  </v-container>
  <CreatePostComponent/>
</template>

<script>
import HeaderComponent from '@/components/header/HeaderComponent'
import PostComponent from '@/components/post/PostComponent'
import CreatePostComponent from '@/modals/CreatePostComponent'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'PostsPage',
  components: { CreatePostComponent, PostComponent, HeaderComponent },
  computed: {
    ...mapState({
      posts: state => state.posts.posts
    })
  },
  methods: {
    ...mapActions({
      getPosts: 'posts/getPosts'
    })
  },
  created () {
    this.getPosts()
  }
}
</script>
<style lang="scss">

</style>
<style lang="scss" scoped>

</style>
