// vuex插件 将用户信息保存到localstorge中
const localstoragePlugin = store => {
  // 当 store 初始化后调用
  store.subscribe((mutation, {user_info}) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
    localStorage.setItem('USERINFO', JSON.stringify(user_info.userinfo))
  })
}

export default [localstoragePlugin]