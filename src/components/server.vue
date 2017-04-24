<!-- 组件最后一行要空一行；对象最后一个不能加逗号； -->
<template>
<div class="server">
	<p>卖家承诺以下服务</p>
	<div class="media">
		<div class="media-left"><img src="../assets/image/server/1.png" height="48" width="48" alt="" class="media-object"></div>
		<div class="media-body">
			<h4 class="media-heading">
				订单险
			</h4>
			<p>卖家已为该商品投保订单险；您购买该商品每笔交易的售后将由保险公司全程担保赔付</p>
		</div>
	</div>

	<div class="media">
		<div class="media-left"><img src="../assets/image/server/2.png" height="48" width="48" alt="" class="media-object"></div>
		<div class="media-body">
			<h4 class="media-heading">
				48小时发货
			</h4>
			<p>付款后48小时内发货</p>
		</div>
	</div>

	<div class="media">
		<div class="media-left"><img src="../assets/image/server/3.png" height="48" width="48" alt="" class="media-object"></div>
		<div class="media-body">
			<h4 class="media-heading">
				7天无理由退货
			</h4>
			<p>该商品支持 7 天无理由退货，自商品签收之日起 7 天内:<br>
			1、商品外包装未拆封，相关附（配）件齐全；<br>
			2、商品表面无划痕、无破损、无使用等痕迹；<br>
			3、（若有）防伪标识码未刮开或撕损；<br>
			可申请无理由退货，包邮商品需要买家承担退货邮费，非包邮商品需要买家承担发货和退货邮费。</p>
		</div>
	</div>

	<div class="media">
		<div class="media-left"><img src="../assets/image/server/4.png" height="48" width="48" alt="" class="media-object"></div>
		<div class="media-body">
			<h4 class="media-heading">
				消费者保障服务
			</h4>
			<p>该卖家已缴纳 1000.0 元保证金。<br>在确认收货 15 天内，如有商品质量问题、描述不符或未收到货等，您有权申请退款或退货，来回邮费由卖家承担。</p>
		</div>
	</div>

	<h4>价格说明</h4>
	<hr>
	<p class="red">划线价格</p>
	<p>指商品的专柜价、吊牌价、正品零售价、厂商指导价或该商品的曾经展示过的销售价等，<span class="bold">并非原价</span>，仅供参考。</p>
	<br>
	<p class="red">未划线价格</p>
	<p>指商品的<span class="bold">实时标价</span>，不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券、积分等发生变化，最终以订单结算页价格为准。</p>
	<br>
	<p>此说明仅当出现价格比较时有效，具体请参见《淘宝价格发布规范》。若商家单独对划线价格进行说明的，以商家的表述为准</p>
</div>
</template>

<script>
/**
 * 
 */
  export default {
    name: 'server'
  }
</script>

<style lang='scss'>
	.server {
		.red {
			color: red;
		}
		.bold {
			font-weight: bold;
		}
		& p:first-child {
			margin: 20px 0;
			height: 16px;
			line-height: 16px;
			text-align: center;
			font-weight: bold;
			background: url('../assets/image/server/5.png') repeat-x;
		}
	}
</style>
