import * as types from '../mutation-types.js'

let _userinfo = JSON.parse(localStorage.getItem('USERINFO') || '{}')

const state = {
  userinfo: _userinfo ? _userinfo:{}
}

// getters
const getters = {
  getUserInfo(state){
    console.log('state.userinfo', state.userinfo)
    return state.userinfo
  },
  getToken(state){
    if (state.userinfo.token)
      return state.userinfo.token
    else
      return ''
  }
}

// actions
const actions = {
  setUserInfo({commit},userinfo){
    commit(types.SET_USER_INFO, userinfo)
  },
  removeUserInfo({ commit}){
    commit(types.REMOVE_USER_INFO)
  }
}

// mutations
const mutations = {
  [types.SET_USER_INFO](state, userinfo) {
    state.userinfo = userinfo
  },
  [types.REMOVE_USER_INFO](state) {
    state.userinfo = {}
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
