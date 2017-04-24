<!-- 组件最后一行要空一行；对象最后一个不能加逗号； -->
<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="nav-heading"><a href="/#" class="navbar-brand"><img src="" alt="brand"></a>
      </div>
      
      <form action="" class="navbar-form navbar-right">
        <div class="form-group">
        <input type="text" class="form-control" placeholder="search">
        <a role='button'><span class="glyphicon glyphicon-search"></span></a>
        </div>
      </form>

      <div>
        <ul class="nav navbar-nav navbar-right">
          <li class="nav-item"><a role='button' class="nav-link">应用下载</a></li>
          <li class="nav-item"><a role='button' class="nav-link">论坛</a></li>
          <li class="nav-item"><a role='button' class="nav-link">手机商</a></li>
          <li class="nav-item"><a role='button' class="nav-link">投诉</a></li>
          <li class="nav-item"><a role='button' class="nav-link" title="账户" data-toggle='modal' data-target='#user'><span class="glyphicon glyphicon-user"></span></a></li>
          <li class="nav-item"><a href="" class="nav-link" title="购物车"><span class="glyphicon glyphicon-shopping-cart"></span></a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'navbar'
  }
</script>

<style>
  body {
    padding-top: 70px;
  }
</style>
