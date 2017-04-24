<!-- 组件最后一行要空一行；对象最后一个不能加逗号； -->
<template>
  <div class="spshow">
  	<div class="spshow1" v-show='shape'>
  		<p>{{title}}</p>
  		<ul>
  			<li><a href="/#/commodity/mini6"><img src="static/1.png" alt=""></a></li>
  			<li><a href=""><img src="" alt=""></a></li>
  			<li><a href=""><img src="" alt=""></a></li>
  			<li><a href=""><img src="" alt=""></a></li>
  		</ul>
  	</div>
    <div class="spshow2" v-show='!shape'>
      <p>{{title}}</p>
      <ul>
        <li><a href=""><img src="" alt=""></a></li>
        <li><a href=""><img src="" alt=""></a></li>
        <li><a href=""><img src="" alt=""></a></li>
        <li><a href=""><img src="" alt=""></a></li>
        <li><a href=""><img src="" alt=""></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
/**
 * title: 标题
 * shape：有两种形状，第一种是从左向右等大li排列
 * 第二种是可以有一个li占两列或两行
 */
  export default {
  	props: {
  		title: {
  			type: String,
  			default: '热门商品'
  		},
      shape: {
        type: Boolean,
        default: true
      }
  	},
    name: 'spshow'
  }
</script>

<style>
  .spshow ul, .spshow li {
  	margin: 0;
  	padding: 0;
  }
  .spshow p {
  	height: 40px;
  	font-weight: bold;
  	line-height: 40px;
  	word-spacing: 5px;
  	/* text-align: left; */
  }
  .spshow li {
	list-style: none;
	display: inline-block;
  margin: 8px 8px;
  }
  .spshow2 {
    display: flex;
    flex-wrap: wrap;
  }
</style>
