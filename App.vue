<script>
	// #ifdef APP-PLUS
	const domModule = weex.requireModule('dom');
	// #endif
	export default {
		onLaunch: function() {
			// 锁定竖 屏
			// #ifdef APP-PLUS
			plus.screen.lockOrientation('portrait-primary');
			domModule.addRule('fontFace', {
							'fontFamily': "iconfont",
							'src': "url('./static/font/iconfont.ttf')"  
			});
			// #endif
			//nvue引入字体
			  
			console.log('App Launch') 
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide') 
		},
		watch:{
			$route(res){
				console.log(666,this.$route)
			}
		}
	}
</script>

<style>
	@import "static/font/iconfont.css";
	.iconfont{font-family: iconfont;font-size:48rpx;text-align: center;}
	/* .c_pointer{cursor:pointer}
	.animated{ animation-duration: 300ms; }
	.font_0{font-size:0}
	.d_block{display:block}
	.d_iblock{display:inline-block}
	.d_flex{display:flex}
	.p_fixed{position:fixed}
	.p_relative{position:relative}
	.p_absolute{position:absolute}
	.c_red{color:red}
	.c_green{color:green}
	.c_blue{color:blue}
	.c_white{color:white}
	.t_duration_100{transition-duration: 100ms}
	.t_duration_200{transition-duration: 200ms}
	.t_duration_500{transition-duration: 500ms}
	.t_left{text-align:left}
	.t_center{text-align:center}
	.t_right{text-align: right;}
	.f_left{float: left;}
	.f_righr{float:right;}
	.t_ell{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
	.v_top{vertical-align: top;}
	.v_middle{vertical-align: middle;}
	.v_bottom{vertical-align: bottom;}
	.o_hidden{overflow:hidden}
	.box_auto{position:absolute;left:0;top:0;right:0;bottom:0;margin:auto;}
	.w_100{width:100%}
	.h_100{height:100%}
	.w_50{width:50%}
	.h_50{height:50%}
	.cursor_pointer{cursor:pointer}
	.el-table.bgduck th{background-color:#FAFAFA !important}
	.o_auto{overflow: auto;}
	.ox_auto{overflow-x: auto;}
	.oy_auto{overflow-y: auto;}
	.ox_hidden{overflow-x: hidden;}
	.oy_hidden{overflow-y: hidden;}
	.border_box{box-sizing: border-box;}
	.f_left{float:left}
	.f_right{float: right;}
	.c_both:after{content:".";clear:both;display:block;height:0;overflow:hidden;visibility:hidden;}
	.customize{margin-bottom:7px}
	.customize>div.el-card__header{background-color:rgba(240,240,240,.6);padding:0px 7px;height:32px;line-height: 32px;}
	.customize>div.el-card__body{padding:4px 7px}
	.Wspace_nowrap div.cell{white-space: nowrap;}
	.btn.active:focus,.btn:focus{outline: none;}
	.w_nowrap{white-space: nowrap;} */
	/*每个页面公共css */
</style>
