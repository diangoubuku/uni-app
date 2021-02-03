<template>
	<view class="newsPage">
		<!-- #ifndef H5 -->
		<navigationBar></navigationBar>
		<!-- #endif -->
		<titleBar></titleBar>
		<text v-for="(items,index) of newsLIst" :key="index" class="t_ell titleView d_iblock">{{items.title}}</text>
		<text class="iconfont" :style="tabI == 1 ? 'color:#f00' : 'color:#333'">&#xe600;</text>
		<tabBar :tabI="tabI"></tabBar>
	</view>
</template>

<script>
	import titleBar from "./titleBar.vue"
	export default {
		components:{
			titleBar
		},
		data(){
			return{
				tabI:0,
				newsLIst:[
					{title:"测试1。前端运行日志，请另行在小程序开发工具的控制台查看。编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。"},
					{title:"编译成功1。前端运行日志，请另行在小程序开发工具的控制台查看。编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。"},
					{title:"编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。"},
					{title:"编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。"},
					{title:"编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。"},
					{title:"编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。"},
					{title:"编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。"},
					{title:"编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。"}
				]
			}
		}
	}
</script>

<style scoped>
	/* #ifndef H5 */
	.newsPage{padding:70rpx 0 90rpx;}
	/* #endif */
	.newsPage{width:100%;}
	.titleView{width:100%;font-size:30rpx;}
</style>
