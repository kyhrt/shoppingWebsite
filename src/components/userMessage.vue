<!-- 组件最后一行要空一行；对象最后一个不能加逗号； -->
<template>
	<div class="userMessage">
		<h2>基本资料</h2>
		<hr>
		<div class="media">
			<div class="media-left media-middle">
				<a href=""><img src="" alt="" class="media-object" width="100px" height="100px"></a>
			</div>
			<div class="media-body">
				<button @click='edit' class="btn btn-default">编辑</button>
				<h4 class="media-heading">
					基础资料
				</h4>
				<hr>
				<p>姓名：<span>黄楚嘉</span></p>
				<hr>
				<p>生日：<span>199*</span></p>
				<hr>
				<p>性别：<span>男</span></p>
				<hr>
				<h4 class="media-heading">
					高级设置
				</h4>
				<hr>
				<p>银行卡：<span>***</span></p>
				<hr>
				<p>账号区：<span>中国</span></p>
			</div>
		</div>
	</div>
</template>

<script>

  export default {
    name: 'userMessage',
    data() {
    	return {
    		status: true
    	}
    },
    methods: {
    	edit: function () {
    		var body = $('.userMessage .media-body');
    		var value = '';
    		this.status = !this.status;
    		if(this.status == '0') {
    			body.find('button').html('保存');
    			body.find('span').each(function () {
    				value = $(this).html();
    				$(this).html('<input type="text">');
    				$(this).find('input').val(value);
    				
    			}
    			
    			);
    			// console.log(value);
    		}
    		if (this.status == '1') {
    			body.find('button').html('编辑');
    			body.find('span').each(function () {
    				var value = $(this).children('input').val();
    				$(this).html(value);
    			})
    			
    		}
    	}
    }
  }
</script>

<style lang='scss'>
/* 图片的border是谁给的？ */
	.userMessage {
		& .media .media-left {
			/* border-radius: 100px; */
			/* display: table-cell; 的元素没法设置margin */
			padding-left: 100px;
			padding-right: 100px;

		}
		& .media-body button {
			margin-right: 30px;
			float: right;
		}
	}
</style>
