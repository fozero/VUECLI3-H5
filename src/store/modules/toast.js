import * as type from '../mutation-types.js'

const state = {
  isShow: false,
  title: 'test'
}

const getters = {
  getShowFlag(state) {
    return state.isShow
  },
  getTitle(state) {
    return state.title
  }
}

// mutations
const mutations = {
  [type.CHANGE_TOAST_STATUS](state, obj) {
    Object.assign(state, obj)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
