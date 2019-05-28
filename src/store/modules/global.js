import * as types from '../mutation-types.js'

const state = {
  homeRefresh: false
}

// getters
const getters = {
  homeRefresh(state) {
    return state.homeRefresh
  }
}

// actions
const actions = {
  setHomeRefresh({commit}, val) {
    commit(types.SET_HOME_REFRESH, val)
  }
}

// mutations
const mutations = {
  [types.SET_HOME_REFRESH](state, val) {
    state.homeRefresh = val
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
