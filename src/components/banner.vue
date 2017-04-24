<!-- 组件最后一行要空一行；对象最后一个不能加逗号； -->
<template>
	<div id="carousel" class="carousel slide" data-ride="carousel">
		<!-- 指向 -->
		<ol class="carousel-indicators"><li data-target="#carousel" data-slide-to="0" class="active"></li>
		<li data-target="#carousel" data-slide-to="1"></li>
		<li data-target="#carousel" data-slide-to="2"></li></ol>
		
		<!-- 内容 -->
		<div class="carousel-inner" role="listbox">
			<div class="item active">
				<img src="" alt="">
				<div class="carousel-caption">nihao</div>
			</div>
			<div class="item">
				<img src="" alt="">
				<div class="carousel-caption">hai</div>
			</div>
			<div class="item">
				<img src="" alt="">
				<div class="carousel-caption">meida</div>
			</div>
		</div>

		<!-- 左右控制按钮 -->
		<a href="#carousel" class="left carousel-control" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>
		<a href="#carousel" class="right carousel-control" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
	</div>
</template>

<script>
  export default {
    name: 'banner'
  }
</script>

<style>
  #carousel {
  	margin: 100px 200px;
  }
</style>
