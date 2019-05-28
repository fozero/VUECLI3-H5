import * as types from '../mutation-types'
const state = {
  showBox: false,
  showLike: false,
  showDown: false,
  showSmile: false
}

// getters
const getters = {
  getShowBox: state => {
    return state.showBox
  },
  getShowLike: state => {
    return state.showLike
  },
  getShowDown: state => {
    return state.showDown
  },
  getShowSmile: state => {
    return state.showSmile
  }
}

// actions
const actions = {
  configLike({commit}, val) {
    commit(types.SET_ANIMATE_LIKE, val)
  },
  configDown({commit}, val) {
    commit(types.SET_ANIMATE_DOWN, val)
  },
  configSmile({commit}, val) {
    commit(types.SET_ANIMATE_SMILE, val)
  }
}

// mutations
const mutations = {
  [types.SET_ANIMATE_LIKE](state, val) {
    state.showBox = val
    state.showLike = val
  },
  [types.SET_ANIMATE_DOWN](state, val) {
    state.showBox = val
    state.showDown = val
  },
  [types.SET_ANIMATE_SMILE](state, val) {
    state.showBox = val
    state.showSmile = val
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
