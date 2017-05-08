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


router.get('/all', (req, res, next) => {
    var use = $sql.db.into;
    var sql = $sql.spshow.get;    
    // var params = req.body;

    conn.query(use);
    conn.query(sql, function(err, result) {    
        if (err) {       
            console.log(err);
        }        
        if (result) {
            res.send(result);
        }
    })
    
});

router.get('/get', (req, res, next) => {
    var use = $sql.db.into;
    var sql = $sql.spshow.get;    
    // var params = req.body;
    var params = req.query.ID;

    conn.query(use);
    conn.query(sql, function(err, result) {    
        if (err) {       
            console.log(err);
        }        
        if (result) {
            res.send(result);
        }
    })
    
});

module.exports = router;
