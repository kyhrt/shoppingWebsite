<!-- 组件最后一行要空一行；对象最后一个不能加逗号； -->
<template>
	<div class="shoppingcart">
		<div class="container">
			<div class="row">
				<div class="col-sm-5">
					商品信息
				</div>
				<div class="col-sm-2">
					单价
				</div>
				<div class="col-sm-2">
					数量
				</div>
				<div class="col-sm-2">
					金额
				</div>
				<div class="col-sm-1">
					操作
				</div>
			</div>
			<div class="row" v-for='(item, index) in commodity'>
				<div class="col-sm-5">
					<div class="media">
						<div class="media-left"><a href=""><img :src=item.img alt="" class="media-object"></a></div>
						<div class="media-body">
							{{item.title}}
						</div>
					</div>
				</div>
				<div class="col-sm-2">
					￥{{item.price}}
				</div>
				<div class="col-sm-2">
					<form action="" class="form-inline">
					    
					    <div class="input-group" :id="index">
					      <a @click='minus' role='button' class="input-group-addon btn">-</a>
					      <input type="text" class="form-control" id="exampleInputAmount" v-model='item.number'>
					      <a @click='plus' role='button' class="input-group-addon btn">+</a>
					    </div>
					</form>
				</div>
				<div class="col-sm-2">
					<span class="red">￥{{item.allpay}}</span>
				</div>
				<div class="col-sm-1">
					<a role='button' data-toggle='modal' data-target='#delete'>删除</a>
					<div class="modal fade" id="delete" tabindex="-1">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<button class="close" data-dismiss='modal'><span>&times;</span></button>
									<h4 class="modal-title">删除宝贝</h4>
								</div>
								<div class="modal-body">
									确定要删除宝贝吗？
								</div>
								<div class="modal-footer">
									<button class="btn btn-default" data-dismiss='modal'>关闭</button>
									<button class="btn btn-primary">确定</button>
								</div>
				
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
/**
 * 遇到问题：1. 绑定的img路径不对，把静态资源放在static，
 * 然后这样引入“../static/..”,路径就真确了。
 * 因为static目录被完整的保存到pro资源的跟目录中了。
 *
 *  2. 思考怎么将commodity中的多个元素作用域区分开，解决方案：
 *  获取点击对象元素，获取index，通过index去区分
 *  
 */
  export default {
    name: 'shoppingcart',
    data() {
    	return {
    		commodity: [
    		{
    			title: 'taozi',
    			img: '../static/1.png',
    			price: '15',
    			number: '1',
    			allpay: '15'
    		},
    		{
    			title: 'taoni',
    			img: '../static/1.png',
    			price: '16',
    			number: '1',
    			allpay: '16'
    		}],
    		key: ''
    	}
    },
    // computed: {
    // 	allpay: function() {
    // 		return this.commodity[this.key].number*this.commodity[this.key].price;
    // 	}
    // },
    methods: {
    	plus: function (event) {
    		var e = event.currentTarget;
    		// 把shop的申明放在key赋值前面导致key还没变，还是前一个对象的
    		this.key = $(e).parent().attr('id');
    		var shop = this.commodity[this.key];
    		shop.number++;
    		shop.allpay = shop.number*shop.price;
    	},
    	minus: function (event) {
    		var e = event.currentTarget;
    		// console.log($(e).parent());
    		this.key = $(e).parent().attr('id');
    		var shop = this.commodity[this.key];
    		shop.number--;
    		shop.allpay = shop.number*shop.price;
    	}
    }
  }
</script>

<style lang='scss'>
	.shoppingcart {
		.red {
			color: red;
		}
	}
</style>
