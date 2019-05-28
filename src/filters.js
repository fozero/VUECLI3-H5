
/* eslint-disable */
/*
  time: 毫秒
  fmt: yyyy-MM-dd hh:mm:ss
*/
export function timeformat(time, fmt = 'yyyy-MM-dd hh:mm:ss') {
  var thatDate = new Date(Number(time) * 1000)
  var o = {
    'M+': thatDate.getMonth() + 1, //月份
    'd+': thatDate.getDate(), //日
    'h+': thatDate.getHours(), //小时
    'm+': thatDate.getMinutes(), //分
    's+': thatDate.getSeconds(), //秒
    'q+': Math.floor((thatDate.getMonth() + 3) / 3), //季度
    S: thatDate.getMilliseconds() //毫秒
  }
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (thatDate.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  for (var k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
  return fmt
}


/**
 * 授权状态
 * @param {*} value 
 */
export function acceptFormat(value) {
  if (value == 0) {
    return '待授权'
  } else if (value == 1) {
    return '已授权'
  }
  return ''
}