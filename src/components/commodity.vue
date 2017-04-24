<!-- 组件最后一行要空一行；对象最后一个不能加逗号； -->
<template>
<div class="commodity">
	<div class="media">
		<div class="media-left">
			<a href="">
				<img src="" alt="" width='480px' height="480px" class="media-object">
			</a>
			<p><span class="glyphicon glyphicon-star"></span>收藏宝贝&nbsp|&nbsp <span class="glyphicon glyphicon-share"></span></p>
		</div>
		<div class="media-body">
			<h1 class="media-heading">{{title}}</h1>
			<p><span>价格</span><span>￥{{price}}</span></p>
			
			<form action="" class="form-inline">
			    <label for="exampleInputAmount">数量</label>
			    <div class="input-group">
			      <a @click='minus' role='button' class="input-group-addon btn">-</a>
			      <input type="text" class="form-control" id="exampleInputAmount" v-model='number'>
			      <a @click='plus' role='button' class="input-group-addon btn">+</a>
			    </div>
			</form>

			<div>
				<button class="btn">立即购买</button>
				<button class="btn"><span class="glyphicon glyphicon-shopping-cart"></span>加入购物车</button>
			</div>
		</div>
	</div>
</div>
</template>

<script>
/**
 * title: 商品名字介绍
 * price：标价
 * number：购买的数量
 * stock：库存
 */

// 使用data里面的变量时别忘了this
  export default {
    props: {
      id: {
        type: String
      }
    },
  	data() {
  		return {
  			title: 'mini',
  			price: '1000',
  			number: '1',
  			stock: '1'
  		}
  	},
    name: 'commodity',
    methods: {
    	plus: function(){
    		this.number++;
    	},
    	minus: function(event){
    		this.number--;
    	}
    },

// 还没实现的功能：number=<1时不能点击-按钮

    // watch: {
    // 	number: function(){
    // 		var a = $('.media>.media-body .input-group a:first-child');
    // 		if(this.number == '1') {
    // 			a.attr('disabled','disabled');
    // 			a.preventDefault();
    // 		}
    // 		if(this.number != '1') {
    // 			a
    // 		}
    // 	}
    // }
  }
</script>

<style lang='scss'>
/* 还是那个问题，选择器优先级 */
  .form-inline .input-group .form-control {
  	width: 50px;
  }
  a:hover {
  	text-decoration: none;
  }
  .commodity {
    & .media-left p {
      text-align: right;
      margin-top: 10px;
      margin-bottom: 50px;
    }
    & .media-body {
      & p {
        font-weight: bold;
        font-size: 16px;
        margin-top: 50px;
      }
      
      & form,&>div{
        margin-top: 50px;
      }

    }

  }
</style>
