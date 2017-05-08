var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

// 增加用户接口
// 注册
router.post('/addUser', (req, res) => {
    var use = $sql.db.into;
    var sql = $sql.addUser.add1;  
    var get = $sql.getUser.get;
    var a = 1;
    var params = req.body;    
    
    conn.query(use);
    conn.query(get, params.name, function(err, result) {    
        if (err) {       
            a = 0;
        }        
        if (result) {
            
            // res.send(result[0]['name'] == params.name)
            var r = JSON.stringify(result);
            if(r[0]['name'] == params.name){
                a = 0;
                res.send('0')
            }
        }
    });

    if (a == 1) {
        conn.query(use);
        conn.query(sql, [params.name, params.password], function(err, result) {    
            if (err) {       
                console.log(err);
            }        
            res.send('1');
        })
    }
    
});
//编辑资料
router.post('/edituser', (req, res, next) => {
    var use = $sql.db.into;
    var sql = $sql.addUser.add2;    
    var params = req.body;
    console.log(params)
    conn.query(use);
    conn.query(sql, [params.name,params.password,params.birth,params.sex,params.bankcart,params.area], function(err, result) {    
        if (err) {       
            console.log(err);
        }        
        if (result) {
            res.send('添加成功');
        }
    })
    
});

// 获取资料
router.get('/getmessage', (req, res, next) => {
    var use = $sql.db.into;
    var sql = $sql.getUser.get;    
    var params = req.query.name;
    
    conn.query(use);
    conn.query(sql, params, function(err, result) {    
        if (err) {       
            console.log(err);
        }        
        if (result) {
            // console.log(result)
            res.send(result);
        }
    })
});

//登录
router.post('/getUser', (req, res, next) => {
    var use = $sql.db.into;
    var sql = $sql.getUser.login;    
    var params = req.body;
    
    conn.query(use);
    conn.query(sql, params.name, function(err, result) {    
        if (err) {       
            console.log(err);
        }        
        if (result) {
            if(result[0]['password'] == params.password){
                res.send('1')
            }
            else {
                res.send('0')
            }
            
        }
    })
    // next();
});
module.exports = router;