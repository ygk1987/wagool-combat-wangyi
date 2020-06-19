//所有路由配置的数组模块
import Home from '@/pages/Home'
import CateList from '@/pages/CateList'
import WorthBuying from '@/pages/WorthBuying'
import Cart from '@/pages/Cart'
import Personal from '@pages/Personal'

export default[
	{ //配置一个自动重定向的路由
		path:'',
		redirect: '/Home'
	},
	{
		name:Home,
		path:"/home", 
		component:Home,
	},
	{
		path:"/catelist", 
		component:CateList,
	},
	{
		path:"/worthbuying", 
		component:WorthBuying,
	},
	{
		path:"/cart", 
		component:Cart,
	},
	{
		path:"/personal", 
		component:Personal,
	}
]