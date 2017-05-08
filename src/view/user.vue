<!-- 组件最后一行要空一行；对象最后一个不能加逗号； -->
<template>
	<div class="user container">
		<ul class="nav nav-stacked col-sm-2">
			<li class="nav-item"><a href="#user" class="nav-link" data-toggle="pill">全部功能</a></li>

			<li class="nav-item active"><a href="#message" class="nav-link" data-toggle="pill">个人信息</a></li>
			<!-- <li class="nav-item"><a href="#bought" class="nav-link" data-toggle="pill" role='tab'>已买到</a></li> -->
			<li class="nav-item"><a href="#shoppingcart" class="nav-link" data-toggle="pill">购物车</a></li>
		</ul>

		<div class="tab-content col-sm-10">
			<div role='tabpanel' class="tab-pane" id="user">欢迎来到个人主页</div>
			<div role='tabpanel' class="tab-pane active" id="message"><userMessage></userMessage></div>
			<!-- <div role='tabpanel' class="tab-pane fade" id="bought"><shoppingcart :keyword='bought'></shoppingcart></div> -->
			<div role='tabpanel' class="tab-pane fade" id="shoppingcart"><shoppingcart></shoppingcart></div>
		</div>
	</div>
</template>

<script>
/**
 * 
 */
import userMessage from '@/components/userMessage'
import shoppingcart from '@/components/shoppingcart'
  export default {
    name: 'user',
    components: {
    	userMessage,
    	shoppingcart
    }
    
  }
</script>

<style lang='scss'>

</style>
