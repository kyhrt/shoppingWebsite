<template>
	<div class="details">
		<p v-for='item in details'>{{item}}</p>
		<img src="" alt="">
	</div>
</template>

<script>
	export default {
		name: 'details',
		data() {
			return {
				details: []
			}
		}
	}
</script>

<style lang='scss'>
	.details {
		display: flex;
		flex-wrap: wrap;
		width: 930px;
		& p {
			width: 250px;
			margin-top: 10px;
			margin-left: 30px;
			text-align: left;
		}
	}
</style>
