let pool = require("../database-pool.js");
let sqlMap = require("../sql/sqlMap");
let roleCollection = {
    insertIntoRole:function (params) {
        let {organization_id,division,name,wechat_id}=params;
        let sql=sqlMap.Role.insertIntoRole;
        return  pool.query(sql,[organization_id,division,name,wechat_id]).then((data)=>{
            if(data.affectedRows>0){
                return true;
            }else{
                return false;
            }
        })
    },
    deleteRole:async function(id){
        let sql=sqlMap.Role.deleteRole;
        return await pool.query(sql,[id]).then((data)=>{
            if(data){
                return true;
            }else{
                return false;
            }
        })
    },
    updateRole:async function(params){
        let {id,organization_id,division,name,wechat_id}=params;
        let sql=sqlMap.Role.updateRole;
        return await pool.query(sql,[organization_id,division,name,wechat_id,id]).then((data)=>{
            if(data){
                return true;
            }else{
                return false;
            }
        })
    },
    getAllRole:async function(){
        let sql=sqlMap.Role.getAllRole;
        return await pool.query(sql).then((data)=>{
            if(data){
                return data;
            }else {
                return false;
            }
        })
    }
};

module.exports = roleCollection;
