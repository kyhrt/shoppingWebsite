// node 后端服务器
// Express 服务器入口文件
const userApi = require('./api/userApi');
const homeApi = require('./api/homeApi');
const commodityApi = require('./api/commodityApi');
const searchApi = require('./api/searchApi');

const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// 后端api路由
app.use('/api/user', userApi);
app.use('/api/home', homeApi);
app.use('/api/commodity', commodityApi);
app.use('/api/search', searchApi);
// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');