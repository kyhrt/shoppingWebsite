<!-- 组件最后一行要空一行；对象最后一个不能加逗号； -->
<template>
<div class="footer">
	<ul>
		<li role='button'><span class="glyphicon glyphicon-wrench"></span>预约维修服务</li>
		<li role='button'><span class="glyphicon glyphicon-repeat"></span>7天无理由退货</li>
		<li role='button'><span class="glyphicon glyphicon-refresh"></span>15天免费换货</li>
		<li role='button'><span class="glyphicon glyphicon-gift"></span>150元包邮</li>
		<li role='button'><span class="glyphicon glyphicon-home"></span>150余家售后网点</li>
	</ul>
</div>
</template>

<script>

  export default {
    name: 'footer',
    
  }
</script>

<style lang='scss'>
	.footer {
		position: fixed;
		bottom: 0;
		& ul {
			display: flex;
			height: 90px;
			flex-wrap: nowrap;
			border-bottom: 1px solid #E0E0E0;
			padding-top: 35px;
			padding-bottom: 35px;
			& li {
				list-style: none;
				width: 200px;
				/* padding-left: 30px;
				padding-right: 30px; */ 
				text-align: center;
				border-right: 1px solid #E0E0E0;
				&:hover {
					color: #FF6700;
				}
			}
			& li:last-child {
				border: 0;
			}

		}
	}
</style>
