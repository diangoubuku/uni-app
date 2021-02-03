<template>
	<view class="titleBar p_fixed d_iblock ox_auto oy_hidden">
		<text :class="activeI == index ? 'textSpan c_red' : 'textSpan'" v-for="(items,index) of titleArr" :key="index">{{items.text}}</text>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				titleArr:[
					{text:"首页"},
					{text:"国内"},
					{text:"国际"},
					{text:"历史"}
				],
				activeI:0
			}
		}
	}
</script>

<style>
	.titleBar{width:100%;background-color:#fff;height:70rpx;left:0;line-height:70rpx;box-sizing: border-box;}
	
	/* #ifdef H5 */
	/* .titleBar{top: var(--status-bar-height)} */
	/* #endif */
	/* #ifndef H5 */
	.titleBar{top:0}
	/* #endif */
	.textSpan{margin:0 24rpx;}
</style>
