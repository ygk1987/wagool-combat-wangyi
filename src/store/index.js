//vuex最核心的管理对象
import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules'

//1.声明使用Vuex
Vue.use(Vuex)

//2.向外暴露store对象
export default new Vuex.Store({
	modules
})	
