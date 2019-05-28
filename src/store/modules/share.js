import * as types from '../mutation-types'
const state = {
  startShow: false,
  weibo: {
    title: '',
    img: '',
    content: '',
    url: ''
  },
  wechat: {
    title: '',
    img: '',
    content: '',
    url: ''
  }
}

// getters
const getters = {
  getStartFlag: state => {
    return state.startShow
  },
  getParams: state => {
    return state
  }
}

// actions
const actions = {

  setShareFalse({commit}, val) {
    commit(types.SET_SHARE_SHOW, val)
  },
  configShare({commit}, val) {
    if (val && val.type === 'wechat') {
      commit(types.SET_SHARE_PARAMS_WECHAT, val)
    }
    if (val && val.type === 'weibo') {
      commit(types.SET_SHARE_PARAMS_WEIBO, val)
    }
  }
}

// mutations
const mutations = {
  [types.SET_SHARE_SHOW](state, val) {
    state.startShow = val
  },
  [types.SET_SHARE_PARAMS_WECHAT](state, val) {
    Object.assign(state.wechat, val)
  },
  [types.SET_SHARE_PARAMS_WEIBO](state, val) {
    Object.assign(state.weibo, val)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
