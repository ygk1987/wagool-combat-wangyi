/* 对axios进行二次包装
1. 配置通用的基础路径和超时
2. 显示请求进度条
3. 成功返回的数据不再是response, 而直接是响应体数据response.data
4. 统一处理请求错误, 具体请求也可以选择处理或不处理
5. 所有请求都要携带userTempId的请求头
6. 如果有了token, 请求都自动携带token
*/
import axios from 'axios'

/*1.创建一个新的Axios的实例
	(1)配置通用的基础路径和超时 */
const ajax = axios.create({
  baseURL: '/api',  // 前缀路径
  timeout: 20000, // 连接请求超时时间
})

//2.添加请求拦截器
ajax.interceptors.request.use(
	(config) => {
		//必须返回config
		return config
	},
	(error) => {
		return Promise.reject(error);
	}
)

//3.添加响应拦截器
ajax.interceptors.response.use(
	response => {
		/*成功返回的数据不再是response, 而直接是响应体数据response.data */
		return response.data
	},
	error => {
		/* 统一处理请求错误, 具体请求也可以选择处理或不处理 */
		alert('请求出错: ' + error.message||'未知错误')
		//return new Promise(() => {})  // 中断promise链 ==> 具体请求就不能再处理了  
		return Promise.reject(error) // 返回失败的promise ==> 具体请求可以处理
	  }
)

//4.向外暴露ajax
export default ajax
