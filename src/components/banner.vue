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
				<img :src="bannerURL['first']" alt="">
				<div class="carousel-caption"></div>
			</div>
			<div class="item">
				<img :src="bannerURL['second']" alt="">
				<div class="carousel-caption"></div>
			</div>
			<div class="item">
				<img :src="bannerURL['third']" alt="">
				<div class="carousel-caption"></div>
			</div>
		</div>

		<!-- 左右控制按钮 -->
		<a href="#carousel" class="left carousel-control" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>
		<a href="#carousel" class="right carousel-control" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
	</div>
</template>

<script>
  export default {
    name: 'banner',
    data: function () {
    	return {
    		bannerURL: {
    			first: '',
    			second: '',
    			third: ''
    		}
    	}
    },
    created: function() {
    	var that = this;
    	
        axios.get('/api/home/banner',{
          
        }).then(function (response) {
          
              // console.log(response.data)
              // nth-child()是从1开始的
              var data = response.data;
              // console.log(data)
              
                that.bannerURL['first'] = data[0]['imageURL'];
                that.bannerURL['second'] = data[1]['imageURL'];
                that.bannerURL['third'] = data[2]['imageURL'];
              
            });
      
    }
  }
</script>

<style lang='scss'>
  #carousel {
  	margin-left: 50px;
  	margin-right: 50px;
  	& div.carousel-inner {
  		/* 通过添加100%使图片自动填充 */
		& img {
			width: 100%;
		}
  	}
  }

</style>
