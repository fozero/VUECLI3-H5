import Vue from 'vue'
import Vuex from 'vuex'
import loading from './modules/loading'
import model from './modules/model'
import toast from './modules/toast'
import bridge from './modules/bridge'
import share from './modules/share'
import message from './modules/message'
import user_info from './modules/user_info'
import plugins from './plugins'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user_info
    // loading,
    // model,
    // toast,
    // bridge,
    // share,
    // message
  },
  plugins
})
