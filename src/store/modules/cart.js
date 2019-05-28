import * as types from '../mutation-types'
const state = {
  added: [],
  checkoutStatus: null
}

// getters
const getters = {

}

// actions
const actions = {

}

// mutations
const mutations = {

  [types.ADD_TO_CART] (state, { id }) {
    state.added = [1, 2]
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
