// api接口
import Vue from 'vue'
import axios from 'axios'
import Qs from 'qs'
/* eslint-disable */

let api = {
  // 发送验证码
  sendVerifyCode(params) {
    let postData = Qs.stringify(params)
    return Vue.axios.post('/api/v1/send_mobile_validate', postData)
  },
  // 用户登录
  wxUserLogin(params) {
    let postData = Qs.stringify(params)
    return Vue.axios.post('/api/v1/user_login', postData)
  },
  // 获取用户信息
  getUserInfo(params) {
    let postData = Qs.stringify(params)
    return Vue.axios.post('/api/v1/get_user_info', postData)
  },
  // 监控孩子列表
  childList(params) {
    return Vue.axios.get('/api/v1/user_children_list', params)
  },
  // 孩子最新位置信息
  childLastLocation(params) {
    return Vue.axios.get('/api/v1/children_newest_location', params)
  },
  // 孩子今日行为app列表
  visitAppList(params) {
    return Vue.axios.get('/api/v1/children_visit_app_list', params)
  },
  // 获取上网、安全配置信息
  onlineConfig(params) {
    return Vue.axios.get('/api/v1/children_online_protected_config', params)
  },
  // 添加监控孩子
  addChildren(params) {
    let postData = Qs.stringify(params)
    return Vue.axios.post('/api/v1/children_add', postData)
  },
  // 家长发送孩子授权短信
  sendChildVerifyMsg(params) {
    let postData = Qs.stringify(params)
    return Vue.axios.post('/api/v1/send_accept_request', postData)
  },
  // 修改配置信息-开启/关闭上网、安全防护
  updateProtectedConfig(params) {
    let postData = Qs.stringify(params)
    return Vue.axios.post('/api/v1/update_protected_config', postData)
  },
  // 获取安全统计信息
  protectedInfo(params) {
    return Vue.axios.get('/api/v1/children_protected', params)
  },
  // 获取孩子可上网时段
  allowOnlineTime(params) {
    return Vue.axios.get('/api/v1/children_online_allow_time', params)
  },
  // 获取孩子历史轨迹
  childLocationList(params) {
    return Vue.axios.get('/api/v1/children_location_list', params)
  },
  // 保存/修改上网时段
  saveOnlineTime(params) {
    let postData = Qs.stringify(params)
    return Vue.axios.post('/api/v1/children_online_time_save', postData)
  },
  // 加入app白名单
  addAppWhite(params) {
    let postData = Qs.stringify(params)
    return Vue.axios.post('/api/v1/white_list_add', postData)
  },
  // 移出app白名单
  removeAppWhite(params) {
    let postData = Qs.stringify(params)
    return Vue.axios.post('/api/v1/white_list_remove', postData)
  },
  // 修改孩子信息
  updateChildInfo(params) {
    let postData = Qs.stringify(params)
    return Vue.axios.post('/api/v1/children_edit', postData)
  },
  // 删除孩子信息
  delChild(params) {
    let postData = Qs.stringify(params)
    return Vue.axios.post('/api/v1/children_delete', postData)
  },

  
  // 获取孩子详情
  childDetail(params) {
    return Vue.axios.get('/api/v1/children_detail', params)
  },
  // 获取应用白名单列表
  appWhiteList(params) {
    return Vue.axios.get('/api/v1/white_list', params)
  },
  // 获取全部应用列表
  appList(params) {
    let postData = Qs.stringify(params)
    return Vue.axios.post('/api/v1/all_app_list', postData)
  },
  // 保存app白名单设置
  appwhiteSave(params) {
    let postData = Qs.stringify(params)
    return Vue.axios.post('/api/v1/save_children_appwhite_list', postData)
  },
  // 孩子上网统计信息
  onlineStatistics(params) {
    let postData = Qs.stringify(params)
    return Vue.axios.post('/api/v1/children_online_statistics', postData)
  },
  // 问题反馈
  feedback(params) {
    let postData = Qs.stringify(params)
    return Vue.axios.post('/api/v1/problem_feedback', postData)
  },
  // 最常应用统计
  visitStatistics(params) {
    let postData = Qs.stringify(params)
    return Vue.axios.post('/api/v1/children_visit_statistics', postData)
  }
  
}

export default function (Vue) {
  Vue.prototype.$api = api
  Vue.prototype.$fetch = axios
}
