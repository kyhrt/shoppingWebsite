<template>
<div class="commoditys">
	<commodity></commodity>
	<navtab></navtab>
</div>
</template>

<script>
import commodity from '@/components/commodity'
import navtab from '@/components/navtab'

  export default {
    name: 'commoditys',
    data() {
    	return {
    		id: ''
    	}
    },
    // created: function() {
    //   var that = this;
    //   var id = that.$route.params.id;
    //   axios.get('/api/commodity/product',{
    //       params: {
    //         ID: id
    //       }
    //     }).then(function (response) {
    //           // console.log(id)
    //           // console.log(response.data)
    //           // nth-child()是从1开始的
    //           var data = response.data;
    //           that.information['title'] = data[0]['name'];
    //           that.information['price'] = data[0]['price'];
    //           that.information['stock'] = data[0]['stock'];
    //           that.information['infor'] = data[0]['infor'];
    //           that.information['imageURL'] = data[0]['imageURL'];
    //           // console.log(that.information)
    //     });
    // },

    created() {
    	this.id = this.$route.params.id;	
    },
    components: {
    	commodity,
    	navtab
    }
  }
</script>

<style lang='scss'>
	
</style>