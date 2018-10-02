let pool = require("../database-pool.js");
let sqlMap = require("../sql/sqlMap");
let positionCollection = {
    insertIntoPosition:function (params) {
        let {organization_id,division,name,wechat_id}=params;
        let sql=sqlMap.Position.insertIntoPosition;
        return  pool.query(sql,[organization_id,division,name,wechat_id]).then((data)=>{
            if(data.affectedRows>0){
                return true;
            }else{
                return false;
            }
        })
    },
    deletePosition:async function(id){
        let sql=sqlMap.Position.deletePosition;
        return await pool.query(sql,[id]).then((data)=>{
            if(data){
                return true;
            }else{
                return false;
            }
        })
    },
    updatePosition:async function(params){
        let {id,organization_id,division,name,wechat_id}=params;
        let sql=sqlMap.Position.updatePosition;
        return await pool.query(sql,[organization_id,division,name,wechat_id,id]).then((data)=>{
            if(data){
                return true;
            }else{
                return false;
            }
        })
    },
    getAllPosition:async function(){
        let sql=sqlMap.Position.getAllPosition;
        return await pool.query(sql).then((data)=>{
            if(data){
                return data;
            }else {
                return false;
            }
        })
    }
};

module.exports = positionCollection;