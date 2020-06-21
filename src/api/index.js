/* 
包含所有接口请求函数
函数的返回值是promise

基本技能: 能根据接口文档定义接口请求函数
*/
import ajax from './ajax'

//请求主页的数据接口
export const reqIndexData = () => ajax.get('/getIndexData')
//请求主页导航的数据接口
export const reqIndexCateData = () => ajax.get('/getIndexCateData')
//分类导航的数据接口
export const reqCateNavListData = () => ajax.get('/getCateGoryDatas')
//分类右侧导航数据
export const reqCateListsData = () => ajax.get('/getCateListsData')



