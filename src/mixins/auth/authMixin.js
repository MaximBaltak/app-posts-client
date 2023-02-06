import rules from '@/utils/validateRules'
import { mapActions, mapMutations } from 'vuex'

export const authMixin = {
  data () {
    return {
      login: '',
      password: '',
      show: false,
      rules,
      error: null
    }
  },
  methods: {
    ...mapActions({
      authUser: 'user/authUser'
    }),
    ...mapMutations({
      checkAuth: 'user/checkAuth'
    }),
    auth (type) {
      if (!this.$refs.form?.errors[0]) {
        const payload = {
          type,
          payload: {
            login: this.login.trim(),
            password: this.login.trim()
          }
        }
        this.authUser(payload)
          .then(() => {
            this.checkAuth()
            this.error = null
            this.$router.push({ name: 'posts' })
          })
          .catch(e => {
            this.error = e.response?.data?.message
          })
      }
    },
    togglePassword () {
      this.show = !this.show
    },
    toggleForm () {
      this.$emit('toggle')
    }
  }
}
