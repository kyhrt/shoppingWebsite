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

    function tounicode(data) {
       // if(data == '') return '请输入汉字';
       var str =''; 
       for(var i=0;i<data.length;i++)
       {
          str+=","+parseInt(data[i].charCodeAt(0),10).toString(16);
       }
       return str;
    }

    function tohanzi(data) {
        // if(data == '') return '请输入十六进制unicode';
        data = data.split("\\u");
        var str ='';
        for(var i=0;i<data.length;i++)
        {
            str+=String.fromCharCode(parseInt(data[i],16).toString(10));
        }
        return str;
    }
    params = tounicode(params);

    // console.log(params)

    var arr = [];
    var str = '';
    conn.query(use);
    conn.query(sql, function(err, result) {    
        if (err) {       
            console.log(err);
        }        
        if (result) {
            for (let i of result) {
                // console.log(i.name)
                // console.log(tounicode(i.name)+':'+params)
                str = tounicode(i.name);
                // console.log(str)
                // console.log(params)
                
                // console.log(str.match(params))
                if(str.match(params)) {
                    arr.push(i);
                    
                    console.log(arr);
                }
            }
            // console.log(result)
            console.log(arr)
            res.send(arr);
        }
    })
    
});

module.exports = router;
