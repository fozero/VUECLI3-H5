/**
 * 获取url参数值
 * @param {*} url 
 * @param {*} name 
 */
export function getUrlParameter(url, name) {
  var regexSearch = "[\\?&#]" + name + "=([^&#]*)";
  var regex = new RegExp(regexSearch);
  var results = regex.exec(url);
  console.log(results, 'results')
  return results
    ? window.decodeURIComponent(results[1])
    : '';
}