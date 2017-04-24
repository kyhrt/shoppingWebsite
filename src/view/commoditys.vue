<template>
<div class="commoditys">
	<commodity :id='id'></commodity>
	<navtab :id='id'></navtab>
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
    created() {
    	this.id = this.$route.params.id;
    	console.log(this.id);
    },
    components: {
    	commodity,
    	navtab
    }
  }
</script>

<style lang='scss'>
	
</style>