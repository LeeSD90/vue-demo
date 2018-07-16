import bus from '../../bus';

export default {
  name: 'GithubOutput',
  created() {
    bus.$on('new-username', this.onUsernameChange)
  },
  destroyed() {
    bus.$off('new-username', this.onUsernameChange)
  },
  methods: {
    onUsernameChange(name) {
      this.currentUsername = name
    }
  },
  data() {
    return {
      currentUsername: null,
      githubData: {}
    }
  }
}