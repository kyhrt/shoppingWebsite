<template>
<div class="search container">
	<div class="row">
		<div class="col-sm-6 col-sm-offset-3">
			<div class="input-group">
				<input type="text" class="form-control" placeholder="search for..." v-model='search'>
				<span class="input-group-btn">
					<button class="btn btn-success" @click='submit'>
						search!
					</button>
				</span>
			</div>
		</div>
	</div>
	<div class="commoditys">
		<div class="commodity" v-for='item in commoditys'>
			<a :href='"/#/commodity/"+item["name"]'><img :src="item['imageURL']" alt=""></a>
			<p>{{item['name']}}</p>
			<p>价格：&nbsp;￥&nbsp;<span>{{item['price']}}</span></p>
			<p>描述：&nbsp;<span>{{item['infor']}}</span></p>
		</div>
	</div>
</div>
</template>

<script>

  export default {
    name: 'search',
    data() {
    	return {
    		search: '',
    		commoditys: [{
    			imageURL: '',
    			price: '',
    			infor: '',
    			name: ''
    		}]
    	}
    },
    methods: {
    	submit: function () {
    	  var that = this;
	      axios.get('/api/search/get',{
	          params: {
	            ID: that.search
	          }
	        }).then(function (response) {
	          
	              // console.log(response.data)
	              // nth-child()是从1开始的
	              
	              var data = response.data;
	              that.commoditys = data;
	              
	        });
    	}
    },
    created: function() {
		  var that = this;
	      axios.get('/api/search/all',{
	          // params: {
	          //   ID: id
	          // }
	        }).then(function (response) {
	          
	              // console.log(response.data)
	              // nth-child()是从1开始的
	              
	              var data = response.data;
	              that.commoditys = data;
	              
	        });
    },
    
  }
</script>

<style lang='scss'>

.search {
	& .commoditys {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;

		& .commodity {
			background: white;
			margin-top: 30px;
			text-align: center;
			& p:nth-child(4) {
				font-size: 11px;
			}
		}
	}
}
</style>
