export default {
  methods: {
    goTopic(id) {
      this.$router.push({
        name: 'topic-detail',
        params: {
          id
        }
      })
    }
  }
}
