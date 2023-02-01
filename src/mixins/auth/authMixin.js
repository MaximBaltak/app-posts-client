export const authMixin = {
  data () {
    return {
      login: '',
      password: '',
      show: false
    }
  },
  methods: {
    togglePassword () {
      this.show = !this.show
    },
    toggleForm () {
      this.$emit('toggle')
    }
  }
}
