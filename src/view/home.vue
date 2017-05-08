<template>
<div class="home">
	<navs></navs>
	<banner></banner>
	<spshow :title='title'></spshow>
</div>
</template>

<script>

import banner from '@/components/banner'
import spshow from '@/components/spshow'

import navs from '@/components/nav'
  export default {
    name: 'home',
    data: function () {
        return {
            title: '商品'
        }
    },
    components: {
    	
    	banner,
    	spshow,
    	// 不能命名为footer
    	
    	navs
    }
  }
</script>

<style lang='scss'>
	
</style>
