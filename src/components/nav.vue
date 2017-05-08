<!-- 组件最后一行要空一行；对象最后一个不能加逗号； -->
<template>
	<div class="navs">
	  <ul class="nav nav-pills">
	  	<li class="nav-item"><a role='button' class="nav-link">精选</a></li>
	  	<li class="nav-item"><a href="/#/search" class="nav-link">手机</a></li>
	  	<!-- <li class="nav-item"><a href="/#/search" class="nav-link">耳机/音响</a></li>
	  	<li class="nav-item"><a href="/#/search" class="nav-link">背壳/保护套</a></li> -->
	  	<li class="nav-item"><a href="/#/search" class="nav-link">周边</a></li>
	  	<!-- <li class="nav-item"><a href="" class="nav-link">保修服务</a></li> -->
	  	<li class="nav-item"><a href="/#/search" class="nav-link">全部商品</a></li>
	  </ul>
	</div>
</template>

<script>
  export default {
    name: 'nav'
  }
</script>

<style>
  .navs {
  	margin-left: 40px;
  }
  .navs ul.nav li.nav-item a{
  	color: #333333;
  }
  .navs .nav li:first-child {
	font-weight: bold;
  }
</style>
