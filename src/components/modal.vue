<!-- modal最好作为body的直接子元素 -->
<template>
	<div class="modal fade" id="user" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header"><button class="close" data-dismiss="modal"><span>&times;</span></button>
              <h4>账户登录</h4>
              </div>
              <div class="modal-body">
                <form action="" class="form-horizontal">
	                <div class="form-group">
		                <label for="account" class="col-sm-2 control-label">账号：</label>
		                <div class="col-sm-10">
		                <input type="text" placeholder="请输入你的昵称" id="account" class="form-control" v-model='name'>
		                </div>
	                </div>
	                <div class="form-group">
		                <label for="pas" class="col-sm-2 control-label">密码：</label>
		                <div class="col-sm-10">
		                 	<input type="password" placeholder="请输入密码" id='pas' class="form-control" v-model='password'>
		                 </div>
	                  </div>
	                  <a role='button' type="submit" class="btn btn-lg btn-default" @click='login'>登录</a>
	                  <p class="label">还没<a role='button' @click='registers'> 注册？</a></p>
                </form>
              </div>
            </div>
          </div>
    </div>
</template>

<script>

  export default {
    name: 'modal',
    data: function () {
    	return {
    		name: '',
    		password: ''
    	}
    },
    methods: {
    	login: function () {
    		var name = this.name;
    		var password = this.password;
    		var $a = $('.modal form>a');
    		
    		if($a.html() == '登录') {
    		// 登录
    		axios.post('/api/user/getUser',{
    			name: name,
    			password: password
    		}).then(function (response) {
    			// response的数据
    			// console.log(response.data);
			    // console.log(response.status);
			    // console.log(response.statusText);
			    // console.log(response.headers);
			    // console.log(response.config);
			    
			    // alert(data[0]['password']);
			    
			    // nth-child()是从1开始的
			    
    			if (response.data == '1') {
    				alert('登录成功')
    				var account = $('nav>div.container ul.nav>li:nth-child(5)>a');
    				account.attr({
    					'title': name,
    					'href': '/#/user',
    					'data-toggle': '',
    					'data-target': ''
    				});

    			}
    			else {
    				alert('账户或密码错误')
    			}
    		}).catch(function (response) {
			    if (response instanceof Error) {
			      // Something happened in setting up the request that triggered an Error
			      console.log('Error', response.message);
			    } else {
			      // The request was made, but the server responded with a status code
			      // that falls out of the range of 2xx
			      console.log(response.data);
			      console.log(response.status);
			      console.log(response.headers);
			      console.log(response.config);
			    }
			  });
    		}
    		// 注册
    		else {
    			axios.post('/api/user/addUser',{
    			name: name,
    			password: password
    		}).then(function (response) {
    			
    			console.log(response.data)
			    // nth-child()是从1开始的
    			if (response.data == '1') {
    				alert('注册成功')
    				var account = $('nav>div.container ul.nav>li:nth-child(5)>a');
    				account.attr({
    					'title': name,
    					'href': '/#/user',
    					'data-toggle': '',
    					'data-target': ''
    				});

    			}
    			else {
    				alert('账户已存在')
    			}
    		});
    		}
		    
    		$('.close').click();
    	},
    	registers: function () {
    		
    		var $a = $('.modal form>a');
    		$a.html('注册');
    		$('.modal form>p').remove();
            $('.modal h4').html('账户注册');
    	}
    },


    
  }
</script>

<style lang='scss'>
	.modal {
		& .modal-header {
			text-align: center;
		}
		& .modal-body {
			text-align: center;
			& button {
				margin-bottom: 10px;
			}
			& p {
				font-size: 12px;

			}
		}
	}
</style>
