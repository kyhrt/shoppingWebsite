<template>
<div class="search container">
	<div class="row">
		<div class="col-sm-6 col-sm-offset-3">
			<div class="input-group">
				<input type="text" class="form-control" placeholder="search for...">
				<span class="input-group-btn">
					<button class="btn btn-success">
						search!
					</button>
				</span>
			</div>
		</div>
	</div>
	<div class="grid" data-masonry='{ "columnWidth": 50, "itemSelector": ".grid-item", "percentPosition": true, "horizontalOrder": true}'>
		<div class="grid-item">
			<a href=""><img src="" alt=""></a>
			<p>价格：&nbsp;￥&nbsp;<span></span></p>
			<p>描述：&nbsp;<span></span></p>
		</div>
	</div>
</div>
</template>

<script>

  export default {
    name: 'search',
    data() {
    	return {
    		
    	}
    }
    
  }
</script>

<style lang='scss'>

.search {
	& .row {
		margin-bottom: 20px;
	}
}
/* ---- grid ---- */
.grid { 
	box-sizing: border-box; 
}

/* .grid {
  background: #EEE;
  max-width: 1200px;
} */

/* clearfix */
.grid:after {
  content: '';
  display: block;
  clear: both;
}

/* ---- grid-item ---- */

.grid-sizer,
.grid-item {
  width: 20%;
}

.grid-item {
  height: 120px;
  float: left;
  /* background: #D26; */
  border: 2px solid #333;
  border-color: hsla(0, 0%, 0%, 0.5);
  border-radius: 5px;
}

.grid-item--width2 { width:  40%; }
.grid-item--width3 { width:  60%; }

.grid-item--height2 { height: 200px; }
.grid-item--height3 { height: 260px; }
.grid-item--height4 { height: 360px; }
</style>
