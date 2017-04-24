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
		                <input type="text" placeholder="请输入你的昵称" id="account" class="form-control">
		                </div>
	                </div>
	                <div class="form-group">
		                <label for="pas" class="col-sm-2 control-label">密码：</label>
		                <div class="col-sm-10">
		                 	<input type="password" placeholder="请输入密码" id='pas' class="form-control">
		                 </div>
	                  </div>
	                  <button type="submit" class="btn btn-lg btn-default">登录</button>
	                  <p class="label">还没<a href="">注册？</a></p>
                </form>
              </div>
            </div>
          </div>
    </div>
</template>

<script>

  export default {
    name: 'modal',
    
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
