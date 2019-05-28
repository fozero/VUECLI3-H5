import * as type from '../mutation-types.js'

const state = {
  isShow: false
}

const getters = {
  getShowFlag(state) {
    return state.isShow
  }
}

// mutations
const mutations = {
  [type.CHANGE_LOAD_STATUS](state, flag) {
    state.isShow = flag
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
