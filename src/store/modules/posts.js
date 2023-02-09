import axiosInstance from '@/utils/axios'

export default {
  namespaced: true,
  state: {
    posts: {}
  },
  actions: {
    async getPosts ({
      commit,
      rootState
    }) {
      const { data } = await axiosInstance.get('/posts', { withCredentials: true })
      data.forEach(post => {
        post.showComments = false
      })
      commit('initPosts', data)
    },
    async updatePost ({ commit }, postId) {
      await axiosInstance.put(`/posts/${postId}`, null, { withCredentials: true })
    },
    async updateComment ({ commit }, commentId) {
      await axiosInstance.put(`/comments/${commentId}`, null, { withCredentials: true })
    }
  },
  mutations: {
    initPosts (state, posts) {
      state.posts = posts.reverse()
    },
    showComments (state, postId) {
      state.posts.forEach(post => {
        if (postId === post.id) post.showComments = !post.showComments
      })
    }
  }
}
