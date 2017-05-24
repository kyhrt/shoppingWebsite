<!-- 组件最后一行要空一行；对象最后一个不能加逗号； -->
<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="nav-heading"><a href="/#" class="navbar-brand"><img src="static/logo.jpg" alt="brand"></a>
      </div>
      
      <form action="" class="navbar-form navbar-right">
        <div class="form-group">
        <input type="text" class="form-control" placeholder="search" v-model='search'>
        <a role='button' :href='"/#/search/" + search'><span class="glyphicon glyphicon-search"></span></a>
        </div>
      </form>

      <div>
        <ul class="nav navbar-nav navbar-right">
          <li class="nav-item"><a href="http://www.anruan.com" role='button' class="nav-link">应用下载</a></li>
          <li class="nav-item"><a href="/#/forum" role='button' class="nav-link">论坛</a></li>
          <li class="nav-item"><a role='button' class="nav-link">手机商</a></li>
          <li class="nav-item"><a role='button' class="nav-link" @click='alert'>投诉</a></li>
          <li class="nav-item"><a role='button' class="nav-link" title="账户" data-toggle='modal' data-target='#user'><span class="glyphicon glyphicon-user"></span></a></li>
          <li class="nav-item"><a href="/#/user" class="nav-link" title="购物车"><span class="glyphicon glyphicon-shopping-cart"></span></a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'navbar',
    data: function () {
      return {
        search: ''
      }
    },
    methods: {
      alert: function () {
        alert('QQ:****')
      }
      
    }
  }
</script>

<style lang='scss'>
  .css3 {
    &:hover {
      box-shadow: 5px 5px 5px #888;
      transition: all .2s linear;
    }
  }


  body {
    padding-top: 70px;
  }
  nav.navbar {
    & .nav-heading {

     margin-bottom: 10px;
    }
  }
</style>
