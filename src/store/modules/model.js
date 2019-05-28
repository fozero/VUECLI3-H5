import * as type from '../mutation-types.js'

const state = {
  isShow: false,
  title: 'test',
  // cancelStr: '取消',
  confirmStr: '确认',
  onCancel() {
    state.isShow = false
  },
  onConfirm() {
    state.isShow = false
  }
}

const getters = {
  getStateObj(state) {
    return state
  }
}

// mutations
const mutations = {
  [type.CHANGE_MODEL_STATUS](state, obj) {
    Object.assign(state, obj)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
