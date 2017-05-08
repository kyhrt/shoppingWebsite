<!-- 组件最后一行要空一行；对象最后一个不能加逗号； -->
<template>
  <div class="spshow">
  	<div class="spshow1" v-show='shape'>
  		<p>{{title}}</p>
  		<ul>
  			<li v-for='item in spshow'>
          <a :href=' "/#/commodity/" + item["name"] '><img :src="item['imageURL']" alt=""></a>
          <p>{{item['name']}}</p>
          <p>{{item['infor']}}</p>
          <p><span>{{item['price']}}</span>元</p>
        </li>
  		</ul>
  	</div>
    <div class="spshow2" v-show='!shape'>
      <p>{{title}}</p>
      <ul>
        <li><a href=""><img src="" alt=""></a></li>
        <li><a href=""><img src="" alt=""></a></li>
        <li><a href=""><img src="" alt=""></a></li>
        <li><a href=""><img src="" alt=""></a></li>
        <li><a href=""><img src="" alt=""></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
/**
 * title: 标题
 * shape：有两种形状，第一种是从左向右等大li排列
 * 第二种是可以有一个li占两列或两行
 */
  export default {
  	props: {
  		title: {
  			type: String,
  			default: '热门商品'
  		},
      shape: {
        type: Boolean,
        default: true
      }
  	},
    name: 'spshow',
    data: function () {
      return {
        
        spshow: [
          {
            imageURL: 'static/image/spshow1/1.jpg',
            name: '小米净水器',
            infor: '4月28日-5月5日，赠米家3位长线版',
            price: '1299',
          },
          {
            imageURL: 'static/image/spshow1/1.jpg',
            name: '小米净水器',
            infor: '4月28日-5月5日，赠米家3位长线版',
            price: '1299',
            
          },
          {
            imageURL: 'static/image/spshow1/1.jpg',
            name: '小米净水器',
            infor: '4月28日-5月5日，赠米家3位长线版',
            price: '1299',
            
          },
          {
            imageURL: 'static/image/spshow1/1.jpg',
            name: '小米净水器',
            infor: '4月28日-5月5日，赠米家3位长线版',
            price: '1298',
            
          }
          ]
        }
    },
    created: function() {
        var that = this;
      
        axios.get('/api/home/spshow',{
          
        }).then(function (response) {
          
              // console.log(response.data)
              // nth-child()是从1开始的
              var data = response.data;
              for(let i = 0; i < 4; i++) {
                that.spshow[i]['imageURL'] = data[i]['imageURL'];
                that.spshow[i]['name'] = data[i]['name'];
                that.spshow[i]['infor'] = data[i]['infor'];
                that.spshow[i]['price'] = data[i]['price'];
                // that.spshow[i]['url'] = data[i]['url'];
              }
            });
    }
  }
</script>

<style lang='scss'>
  .spshow {
    margin: 20px 40px;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    & ul, & li {
      margin: 0;
      padding: 0;
    }
    & div>p {
    height: 40px;
    font-weight: bold;
    line-height: 40px;
    word-spacing: 5px;
    padding-left: 10px;
    /* text-align: left; */
    }
    & li {
      list-style: none;
      display: inline-block;
      margin: 8px 8px;
      text-align: center;
      background: white;
      /* 400=normal,700=bold */
      & p:nth-child(2) {
        font-weight: 500;
      }
      & p:nth-child(3) {
        font-size: 10px;
      }
      & p:nth-child(4) {
        color: red;
      }

    }

  }
  .spshow2 {
    display: flex;
    flex-wrap: wrap;
  }
</style>
