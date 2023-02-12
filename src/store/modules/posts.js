import axiosInstance from '@/utils/axios'

export default {
  namespaced: true,
  state: {
    posts: []
  },
  actions: {
    async getPosts ({
      commit,
      rootState
    }) {
      if (!rootState.posts.posts.length) {
        const userId = rootState.user?.user?.id || null
        console.log(userId)
        const { data } = await axiosInstance.get(`/posts?userId=${+userId}`, { withCredentials: true })
        data.forEach(post => {
          post.showComments = false
        })
        commit('initPosts', data)
      } else {
        const userId = rootState.user?.user?.id || null
        const { data } = await axiosInstance.get(`/posts?userId=${+userId}`, { withCredentials: true })
        rootState.posts.posts.forEach((post, i) => {
          data[i].showComments = post.showComments
        })
        commit('initPosts', data)
      }
    },
    async updatePost ({ commit }, postId) {
      await axiosInstance.put(`/posts/${postId}`, null, { withCredentials: true })
    },
    async createPost ({ commit }, payload) {
      await axiosInstance.post('/posts/create', payload, { withCredentials: true })
    },
    async createComment ({ commit }, payload) {
      console.log(typeof payload.postId, typeof payload.text)
      await axiosInstance.post('/comments/create', payload, { withCredentials: true })
    },
    async updateComment ({ commit }, commentId) {
      await axiosInstance.put(`/comments/${commentId}`, null, { withCredentials: true })
    }
  },
  mutations: {
    initPosts (state, posts) {
      state.posts = [...posts]
    },
    showComments (state, postId) {
      state.posts.forEach(post => {
        if (postId === post.id) post.showComments = !post.showComments
      })
    }
  }
}
