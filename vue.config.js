const path = require('path');
const px2rem = require('postcss-px2rem')
const postcss = px2rem({
  remUnit: 75   //remUnit = 设计稿/等分数10， 网易严选首页750宽，正好相当于是设计稿宽度，所以值为750/10 = 75
})

function resolve(dir){
	return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false, // 直接关闭eslint检查
  // lintOnSave: 'warning', // 只是输出提示信息, 项目正常运行
  devServer: {
    open: true,//自动打开浏览器
		proxy: {
		  '/api': { // 只处理/api开头路径的请求
		    target: 'http://localhost:7583', // 转发的目标地址
				ws:true,
		    changeOrigin: true, // 支持跨域
		    pathRewrite: {//路径重写
		      '^/api': ''
		    }
		  },
			'/yanxuan':{
				target: 'https://m.you.163.com',  //网易严选后台接口域名
				ws: true,        //如果要代理 websockets，配置这个参数
				changeOrigin: true,  //是否跨域
				pathRewrite:{
					'^/yanxuan':''
				}
			}
		}
	},
	//px自动转rem
	css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
	//配置路径别名
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('@assets',resolve('src/assets'))
			.set('@components',resolve('src/components'))
			.set('@pages',resolve('src/pages'))
			.set('@router',resolve('src/router'))
			.set('@store',resolve('src/store'))
			//格式.set('', resolve(''))
	}
}