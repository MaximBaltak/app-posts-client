<template>
  <HeaderComponent/>
  <v-container class="d-flex justify-center align-center">
    <v-list width="600" >
      <v-list-item width="100%"><PostComponent/></v-list-item>
    </v-list>
  </v-container>
  <CreatePostComponent/>
</template>

<script>
import HeaderComponent from '@/components/header/HeaderComponent'
import PostComponent from '@/components/post/PostComponent'
import CreatePostComponent from '@/modals/CreatePostComponent'
export default {
  name: 'PostsPage',
  components: { CreatePostComponent, PostComponent, HeaderComponent }
}
</script>
<style lang="scss">

</style>
<style lang="scss" scoped>

</style>
