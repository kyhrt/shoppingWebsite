// sql语句
var sqlMap = {
	db: {
		into: 'use mysql'
	},
    // 用户
    addUser: {
        add1: 'insert into iduser (name, password) values (?, ?);',
        add2: 'update iduser set name=?,password=?,birth=?,sex=?,bankcart=?,area=?;'
    },
    getUser: {
    	login: 'select name,password from iduser where name = ?;',
        get: 'select * from iduser where name = ?;'
    },
    //home
    banner: {
        get: 'select imageURL from banner;'
    },

    spshow: {
        get: 'select * from spshow;'
    },
    //commodity
    //get 时 in 后面是数组，语法出错
    product: {
        get: 'select * from spshow where name in (?);',
        getName: 'select name from spshow;'
    },
    comments: {
        get: 'select * from comments where product_id = ?;'
    },

    //shoppingcart
    //注意？周围符号，列名和表名都要这个符号
    shoppingcart: {
        crt: 'create table `?` (id int, name varchar(230) character set utf8, primary key (id))',
        get: 'select id,name from `?`;',
        add: 'insert into `?` (id,name) values (?,?);'
    }
    
}

module.exports = sqlMap;