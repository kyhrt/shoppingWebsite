<!-- 组件最后一行要空一行；对象最后一个不能加逗号； -->
<template>
	<div class="navtab">
		<ul class="nav nav-tabs nav-justified">

		<!-- 别忘了加data-toggle,不然会成为链接跳转 -->
			<li class="nav-item active"><a href="#details" class="nav-link" data-toggle="pill">宝贝详情</a></li>
			<li class="nav-item"><a href="#conments" class="nav-link" data-toggle="pill">累计评论<span>{{conmentsNum}}</span></a></li>
			<li class="nav-item"><a href="#server" class="nav-link" data-toggle="pill">专享服务</a></li>
		</ul>

		<div class="tab-content">
			<div role="tabpanel" class="tab-pane fade active" id="details"><detail></detail></div>
			<div role="tabpanel" class="tab-pane fade" id="conments"><conments></conments></div>
			<div role="tabpanel" class="tab-pane fade" id="server"><server></server></div>
		</div>
	</div>
</template>

<script>
import detail from '@/components/details'
import conments from '@/components/conments'
import server from '@/components/server'
  export default {
    name: 'navtab',
    props: {
    	id: {
    		type: String
    	}
    },
    data() {
    	return {
    		conmentsNum: '1'
    	};
    },
    components: {
    	detail,
    	conments,
    	server
    }
  }
</script>

<style lang='scss'>
	.navtab .nav>li:nth-child(2) {
		& span {
			margin-left: 5px;
			color: red;
			font-weight: bold;
		}
	}
</style>
