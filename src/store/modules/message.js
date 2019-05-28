import * as types from '../mutation-types'

const state = {
  badge: {
    show: false
  },
  timer: null
}

// getters
const getters = {
  badge: state => {
    return state.badge
  },
  timer: state => {
    return state.timer
  }
}

// actions
const actions = {
  setBadge ({ commit }, val) {
    commit(types.SET_MESSAGE_BADGE, val)
  },
  setTimer ({ commit }, val) {
    commit(types.SET_MESSAGE_TIMER, val)
  }
}

// mutations
const mutations = {
  [types.SET_MESSAGE_BADGE] (state, val) {
    state.badge = val
  },
  [types.SET_MESSAGE_TIMER] (state, val) {
    state.timer = val
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
