import {
	baseUrl
} from './env'
import Vue from 'vue'
// 获取数据接口公共类方法
export default async (type = 'GET', url = '', params = {}, method = 'fetch') => {
  if (type == 'POST') {
      return new Promise((resolve, reject) => {
        Vue.http.post(
          baseUrl + url,
          {
            params
          },
          {emulateJSON: true}
        )
          .then((res) => {
            resolve(res.body);
          })
          .catch((res) => {
            reject(res.body);
          });
      });
  }
  else {
    return new Promise((resolve, reject) => {
      Vue.http.get(
        baseUrl + url,
        {
          params: params
        },
        {
          emulateJSON: true,
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            'Access-Control-Allow-Origin': '*'
          },
        }
      )
        .then((res) => {
          resolve(res.body);
        })
        .catch((res) => {
          reject(res.body);
        });
    });
  }
}
