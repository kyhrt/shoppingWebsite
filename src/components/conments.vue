<!-- 组件最后一行要空一行；对象最后一个不能加逗号； -->
<template>
<div class="comments">
	<div class="media" v-for='item in comment'>
		<div class="media-left">
			<a href="">
				<img :src = "item['imageURL']" alt="" class="media-object">
			</a>
			
		</div>
		<div class="media-body">	
			<p class="media-heading">{{item['userName']}}</p>
			<p>{{item['comments']}}</p>
			<p><span>{{item['date']}}</span></p>
		</div>
		<hr>
	</div>
</div>
</template>

<script>
/**
 * 
 */
  export default {
  	prop: {
  		
  	},
    name: 'comments',
    data() {
    	return {
    		comment: [{
    			imageURL: '',
    			userName: '',
    			comments: '',
    			date: ''
    		}
    		]
    	}
    },
    created: function() {
		  var that = this;
  		  var id = that.$route.params.id;
  		  console.log(id)
	      axios.get('/api/commodity/comments',{
	          params: {
	            ID: id
	          }
	        }).then(function (response) {
	          
	              console.log(response.data)
	              // nth-child()是从1开始的
	              
	              var data = response.data;
	              // 直接赋值，不要循环赋值，因为是相同类型
	              // 循环赋值会导致1以后的对象属性会报错undefined
	              that.comment = data;
	              
	        });
    }
    
  }
</script>

<style lang='scss'>
	.comments {
		& .media {
			& img {
				width: 50px;
				height: 50px;
			}
			& .media-body {
				& p:nth-child(1) {
					color: red;
				}
			}
		}
	}
</style>
