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
		<transition-group name='fade'>
			<div class="commodity" v-for='item in commoditys' key='item.name'>
				<a :href='"/#/commodity/"+item["name"]'><img :src="item['imageURL']" alt=""></a>
				<p>{{item['name']}}</p>
				<p>价格：&nbsp;￥&nbsp;<span>{{item['price']}}</span></p>
				<p>描述：&nbsp;<span>{{item['infor']}}</span></p>
			</div>
		</transition-group>
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
    	  // console.log(that.search)
	      axios.get('/api/search/get',{
	          params: {
	            ID: that.search
	          }
	        }).then(function (response) {	              
	              var data = response.data;
	              that.commoditys = data;
	              
	        });
    	}
    },
    created: function() {
		  var that = this;
		  console.log(that.$route.params.id)
		  if (that.$route.params.id != 'all') {
		  	// console.log(that.$route.params.id)
		  	that.search = that.$route.params.id;
		  	that.submit();
		  	// console.log('1')
		  }
		  else {
		  	// console.log('2')
		  	axios.get('/api/search/all',{
	          // params: {
	          //   ID: id
	          // }
	        }).then(function (response) {
	              var data = response.data;
	              that.commoditys = data;
	        });
		  }
	      
    },
    
  }
</script>

<style lang='scss'>
.fade-enter-active, .fade-leave-active {
	transition: opacity 1s
}

.fade-enter, .fade-leave-active {
	opacity: 0
}

.search {
	& .commoditys>span{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

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
