import cookie from 'browser-cookies'
import axiosInstance from '@/utils/axios'
import { typeForm } from '@/utils/typeForm'

export default {
  namespaced: true,
  state: {
    auth: false,
    user: {}
  },
  actions: {
    async authUser ({ commit }, payload) {
      if (payload.type === typeForm.login) {
        const { data } = await axiosInstance.post('/users/login', payload.payload, { withCredentials: true })
        commit('initUser', data)
      }
      if (payload.type === typeForm.registration) {
        const { data } = await axiosInstance.post('/users/create', payload.payload, { withCredentials: true })
        commit('initUser', data)
      }
    },
    async exit ({ commit }) {
      await axiosInstance.get('/users/exit', { withCredentials: true })
      commit('exitUser')
    },
    async remove ({ commit }) {
      await axiosInstance.delete('/users', { withCredentials: true })
      commit('exitUser')
    },
    async getAuthUser ({ commit }) {
      const { data } = await axiosInstance.get('/users/get', { withCredentials: true })
      commit('initUser', data)
    }
  },
  mutations: {
    initUser (state, user) {
      state.user = user
    },
    exitUser (state) {
      state.user = null
      state.auth = false
    },
    checkAuth (state) {
      const authCookie = cookie.get('auth')
      state.auth = !!authCookie
    }
  }
}
