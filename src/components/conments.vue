<!-- 组件最后一行要空一行；对象最后一个不能加逗号； -->
<template>
<div class="conments">
	<div class="media" v-for='item in conment'>
		<div class="media-left">
			<a href="">
				<img :src=item['用户头像'] alt="" class="media-object">
			</a>
			<p>{{item['用户名']}}</p>
		</div>
		<div class="media-body">
			<p>{{item['评论']}}</p>
			
			<p><span>{{item['评价日期']}}</span></p>
		</div>
		<hr>
	</div>
</div>
</template>

<script>
/**
 * 
 */
  export default {
    name: 'conments',
    data() {
    	return {
    		conment: []
    	}
    }
  }
</script>

<style lang='scss'>
	
</style>
