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
    product: {
        get: 'select * from spshow where name = ?;',
        getName: 'select name from spshow;'
    },
    comments: {
        get: 'select * from comments where product_id = ?;'
    },

    //shoppingcart
    shoppingcart: {
        add: 'create table ? (id int);',
        get: 'select id from ?;'
    }
    


}

module.exports = sqlMap;