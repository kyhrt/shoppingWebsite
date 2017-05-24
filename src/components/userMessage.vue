<!-- 组件最后一行要空一行；对象最后一个不能加逗号； -->

<!-- bug: 上传时是空的 -->
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
				<p>姓名：<span>{{message['name']}}</span></p>
				<hr>
				<p>密码：<span>{{message['password']}}</span></p>
				<hr>
				<p>生日：<span>{{message['birth']}}</span></p>
				<hr>
				<p>性别：<span>{{message['sex']}}</span></p>
				<hr>
				<h4 class="media-heading">
					高级设置
				</h4>
				<hr>
				<p>银行卡：<span>{{message['bankcart']}}</span></p>
				<hr>
				<p>账号区：<span>{{message['area']}}</span></p>
			</div>
		</div>
	</div>
</template>

<script>

  export default {
    name: 'userMessage',
    data() {
    	return {
    		status: true,
    		message: {
    			name: '',
    			password: '',
    			birth: '',
    			sex: '',
    			bankcart: '',
    			area: ''
    		}
            
    	}
    },
    methods: {
    	edit: function () {
            var arr = ['name','password','birth','sex','bankcart','area'];
    		var that = this;
    		// console.log(that.message.birth);
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
            // console.log(this.message['birth'])
    		if (this.status == '1') {
    			body.find('button').html('编辑');
    			body.find('span').each(function () {
    				var value = $(this).children('input').val();
    				$(this).html(value);
                    // console.log(value)
                    // console.log(arr)
                    
                    //解决变成input时数据没有响应了 
                    var k = arr.splice(0,1);
                    that.message[k] = value;
                    // console.log(k)
    			})
    			// console.log(that.message.name);
    			axios.post('/api/user/edituser',{
    				
    					name: that.message.name,
    					password: that.message.password,
		    			birth: that.message.birth,
		    			sex: that.message.sex,
		    			bankcart: that.message.bankcart,
		    			area: that.message.area
    				
          
        		}).then(function (response) {
          
	              // console.log(response.data)
	              // nth-child()是从1开始的
	              // var data = response.data;
                  
                  // 粗心大意导致的错误，后台返回的事字符串，不是result，不能赋值给message
	              // that.message = data[0];
	              
	            });
    		}
    	},

    },
    created: function () {
    	var that = this;
    	var account = $('nav>div.container ul.nav>li:nth-child(5)>a');
    	// console.log(account.attr('title'))
    	axios.get('/api/user/getmessage',{
    				params: {
    					name: account.attr('title')
    				}
        		}).then(function (response) {
          
	              // console.log(response.data)
	              // nth-child()是从1开始的
	              var data = response.data;
	              that.message = data[0];
	              
	            });
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
