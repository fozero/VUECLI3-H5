import * as types from '../mutation-types'
const state = {
  bridge: null,
  position: 'top'
}

// getters
const getters = {
  getBridge: state => {
    return state.bridge
  },
  position: state => {
    return state.position
  }
}

// actions
const actions = {
  setBridge({commit}, val) {
    commit(types.SET_BRIDGE, val)
  },
  setPosition({commit}, val) {
    commit(types.SET_SCROLL_POSITION, val)
  }
}

// mutations
const mutations = {
  [types.SET_BRIDGE](state, val) {
    state.bridge = val
  },
  [types.SET_SCROLL_POSITION](state, val) {
    state.position = val
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
