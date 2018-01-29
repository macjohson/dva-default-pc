import fetch from 'dva/fetch';
import { notification } from 'antd';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error: any = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => {
      const { success, result, error } = data;
      if (success) {
        return result ? result : true
      } else {
        notification.error({
          message: "出错了",
          description: error && error.message ? error.message : "服务器出错了，请刷新页面或联系维护人员进行处理"
        })
        return false
      }
    })
    .catch(err => ({ err }));
}
