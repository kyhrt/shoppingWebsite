/**
 * 存在的bug：
 * 页面加载后先执行了comments组件的created，再执行commodity
 * 组件created，怎么解决这个问题？
 */


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

// var re = null;
router.get('/product', (req, res, next) => {
    var use = $sql.db.into;
    var sql = $sql.product.get;    
    // var params = req.body;
    var params = req.query.ID;
    // console.log(params)
    
    conn.query(use);
    conn.query(sql, [params], function(err, result) {    
        if (err) {       
            console.log(err);
        }        
        if (result) {
            // console.log("1:"+re);
            // re = result;
            res.send(result);
        }
    })
    // next();
});

router.get('/comments', (req, res, next) => {
    var use = $sql.db.into;
    var sql1 = $sql.comments.get;
    var sql2 = $sql.product.get;   
    
    /*调试结果
     *2:null
     *1:null
     *1:[object Object]
     * 
     */
     // 为什么会执行两次？因为累积评论数你也请求了。
     // 第一次re为null
     
    // var params = req.body;
    // console.log('2:'+re);
    // re = JSON.stringify(re);
    // var params = re[0]['id'];
    var params = req.query.ID;
    conn.query(use);
    
    // console.log(params)
    conn.query(sql2, [params], function(err, result) {    
        if (err) {       
            console.log(err);
        }        
        if (result) {
            
            var p;
            p = result[0]['id'];
            console.log('1:'+p);
            conn.query(sql1, [p], function(err, result) {    
            if (err) {       
                console.log(err);
            }        
            if (result) {
                res.send(result);
            }
        })
            
        }
    })

    
    
    
    // next();
});

module.exports = router;