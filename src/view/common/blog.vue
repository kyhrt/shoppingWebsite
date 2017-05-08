<template>
  <div class="container forum">
      <img src="assets/1.png" alt="首页背景" class="img-responsive">

      <!-- 标签栏 -->
      <ul class="nav nav-pills nav-justified">
        <li class="nav-item"><a role='button' class="nav-link">Home</a></li>
        <li class="nav-item"><a href="" class="nav-link">About</a></li>
        
        <!-- 图片 -->
        <li class="nav-item"><a href="" class="nav-link"><span></span></a></li>

        <!-- 下拉菜单示例 -->
        <li class="nav-item dropdown"><a role='button' class="nav-link dropdown-toggle" data-toggle='dropdown'>Category <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="">Diary</a></li>
            <li><a href="">Personal</a></li>
            <li></li>
            <li><a href="">Holiday</a></li>
            <li><a href="">Work</a></li>
          </ul>
        </li>

        <li class="nav-item"><a href="" class="nav-link">Contact</a></li>
      </ul>
      <p id="info">Hello,Welcome to my Blog</p>
      
      <!-- 文章示例 -->
      <div class="media">
        <div class="media-left"><p class="media-object">31&nbsp;jul</p></div>
        <div class="media-body">
          <p>cat:&nbsp;<span class="highlight small">Diary,Personal</span>&nbsp;|&nbsp;
          <span class="glyphicon glyphicon-heart"></span>&nbsp;<span class="highlight small">123赞</span>&nbsp;|&nbsp;
          <span class="glyphicon glyphicon-comment"></span>&nbsp; <span class="highlight small">4个评论</span></p>
          <hr>
          <h4 class="media-heading">the title</h4>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum </p>
          <button class="btn btn-success btn-sm">learn more</button>
        </div>
      </div>

      <div class="media">
        <div class="media-left"><p class="media-object">31&nbsp;jul</p></div>
        <div class="media-body">
          <p>cat:&nbsp;<span class="highlight small">Diary,Personal</span>&nbsp;|&nbsp;
          <span class="glyphicon glyphicon-heart"></span>&nbsp;<span class="highlight small">123赞</span>&nbsp;|&nbsp;
          <span class="glyphicon glyphicon-comment"></span>&nbsp; <span class="highlight small">4个评论</span></p>
          <hr>
          <h4 class="media-heading">the title</h4>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum </p>
          <button class="btn btn-success btn-sm">learn more</button>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'navbar',
  }
</script>

<style lang='scss'>
    .forum {
        /* text-align: center; */
        color: #bcbcbc;
        & #info {
        margin-top: 50px;
        text-align: center;

        }

        & .media {
        padding-left: 50px;
        padding-right: 50px;
        overflow: visible;
        margin: 50px;
        padding-bottom: 20px;
        border-bottom: 1px dashed #bcbcbc;
      }

      & .media-object {
        width: 70px;
        height: 70px;
        border-radius: 70px;
        margin-top: -10px;
        vertical-align: middle;
        text-align: center;
        border: 2px solid #bcbcbc;
        padding-top: 25px;
      }

      & hr {
        margin: 0;
        padding: 0;
      }

      & h4 {
        padding-top: 10px;
      }

      & ul.nav>li:nth-child(3) {
        position: relative;
        /* cursor: none; */
      }

      & ul.nav>li:nth-child(3) span {
        display: inline-block;
        width: 130px;
        height: 130px;
        border-radius: 130px;
        background: #3eb3a5;
        position: absolute;
        top: -80px;
        left: -10px;
        z-index: 10000;
        border: 10px solid white;
        /* 此处输入头像背景 */
        background-image: url('');
        background-repeat: no-repeat;
      }

      & .highlight {
        color: #3eb3a5;
      }
      &>img {
        height: 100px;
      }
      &>ul {
        padding-left: 100px;
        padding-right: 100px;
        font-size: 16px;
        font-weight: bolder;
      }
      &>ul>li>a {
        color: #bcbcbc;
      }
      &>ul>li>a:hover {
        color: green;
      }
    }
</style>
