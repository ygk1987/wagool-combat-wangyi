//路由器对象
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

//1.声明使用vue的插件
Vue.use(VueRouter)

//2.创建路由器对象 
const router = new VueRouter({
	//mode:'hash', //默认,路由路径带#号
	mode:'history', //路由路径不带#号
	routes,// 配置应用中的所有路由
})

//3.向外暴露一个路由器对象 
export default router