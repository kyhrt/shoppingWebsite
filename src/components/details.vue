<template>
	<div class="details">
		
		<img :src="imageURL" alt="">
	</div>
</template>

<script>
	export default {
		name: 'details',
		data: function() {
			return {
				details: [],
				imageURL: ''
			}
		},
		created: function() {
	      var that = this;
	      var id = that.$route.params.id;
	      // console.log(id)
	      axios.get('/api/commodity/product',{
	          params: {
	            ID: id
	          }
	        }).then(function (response) {
	          
	              // console.log(response.data)
	              // nth-child()是从1开始的
	              var data = response.data;
	              that.imageURL = data[0]['宝贝详情']
	              // console.log(that.imageURL)
	        });
    	}
	}
</script>

<style lang='scss'>
	.details {
		
		text-align: center;
		
	}
</style>
