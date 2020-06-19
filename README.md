### 适配方案
1.viewport
		viewport适配仅仅解决了移动页面和视口大小不一致的问题
2.rem
		解决的是开发人员需要根据1套设计稿,保证在不同的机型上呈现出来的效果一致,即等比例缩放
### viewport适配
1.为什么使用viewport适配
		1)手机默认的页面宽度时980
		2)绝大数的手机屏幕大小是小于980
		3)iphone6为例:直接将980的页面投放在375的屏幕出现滚动条
2.视觉视口,布局视口
		1)视觉视口:看到的屏幕大小,所见即所得
		2)布局视口:页面的宽度
3.viewport适配实现
		1)<meta name="viewport" content="width=device-width,initial-scale=1.0">
		2)device-width: 设备的宽度,视觉视口的宽度
		3)width:布局视口
		4)width=device-width,即完美视口
		5)布局视口大小 === 视觉视口大小 ---> 网页的宽度 === 屏幕的大小 --->没有滚动条
### rem适配
1.什么是rem：root em 根标签字体的大小
2.为什么用rem适配
		1)因为不同的机型屏幕大小不一致
		2)实际开发中要保证一套设计稿的内容在不同的机型上呈现的效果一致,等比例
		3)页面中需要用到的适配地方使用rem作为单位
		4)根据屏幕大小不同控制rem的值即可
3.rem适配实现(淘宝适配方案)
		1)1rem = 屏幕宽度/10 || 16
		2)页面适配内容的单位是px,需要根据单位rem的值换算是多少rem即可
		
### 项目的初始化
1. 使用@vue/cli创建项目
		vue -V
		vue create combat-wangyi
		npm run serve
2. 添加vue.config.js配置文件,对脚手架的环境进行一些配置
		module.exports={
				lintOnSave:false,
				devServer:{
						open:true
				}
		}