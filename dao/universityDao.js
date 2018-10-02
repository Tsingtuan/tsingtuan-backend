let pool = require("../database-pool.js");
let sqlMap = require("../sql/sqlMap");
let universityCollection={
    insertIntoUniversity:function(params){
        let {name,university_code}=params;
        let sql = sqlMap.University.insertIntoUniversity;
        return pool.query(sql,[name,university_code]).then((data)=>{
            if(data){
                return true;
            }else{

                return false;
            }
        });
    },
    deleteUniversity:async function(id){
        let sql=sqlMap.University.deleteUniversity;
        return await pool.query(sql,[id]).then((data)=>{
            if(data){
                return true;
            }else{
                return false;
            }
        })
    },
    updateUniversity:async function(params){
        let {id,name,university_code}=params;
        let sql=sqlMap.University.updateUniversity;
        return await pool.query(sql,[name,university_code,id]).then((data)=>{
            if(data){
                return true;
            }else{
                return false;
            }
        })
    },
    getAllUniversity: async function() {
        let sql = sqlMap.University.getAllUniversity;
        return await pool.query(sql).then((data)=>{
            console.log(data);
            if(data){
                return data;
            }else{
                return false;
            }
        });
    }
}

module.exports = universityCollection;