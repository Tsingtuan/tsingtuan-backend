let pool = require("../database-pool.js");
let sqlMap = require("../sql/sqlMap");
let studentCollection={
    insertIntoStudent:function(params){
        let {name,wechat_id,wechat_name,university_code,avatar_image}=params;
        let sql=sqlMap.Student.insertIntoStudentSql;
        return pool.query(sql,[name,wechat_id,wechat_name,university_code,avatar_image]).then((data)=>{
            if(data){
                return true;
            }else{
                return false;
            }
        })
    },
    deleteStudent:async function(id){
        let sql=sqlMap.Student.deleteStudentSql;
        return await pool.query(sql,[id]).then((data)=>{
            if(data){
                return true;
            }else{
                return false;
            }
        })
    },
    updateStudent:async function(params){
        let {id,name,wechat_id,wechat_name,university_code,avatar_image}=params;
        let sql=sqlMap.Student.updateStudentSql;
        return await pool.query(sql,[name,wechat_id,wechat_name,university_code,avatar_image,id]).then((data)=>{
            if(data){
                return true;
            }else{
                return false;
            }
        })
    },
    getStudentInfoAll:async function(wechat_id){
        let sql=sqlMap.Student.getStudentAllInfo;
        return await pool.query(sql,[wechat_id]).then((data)=>{
            if(data){
                return data[0];
            }else{
                return false;
            }
        })
    },
    getAllStudent:async function(){
        let sql=sqlMap.Student.getAllStudent;
        return  await pool.query(sql).then((data)=>{
            if(data){
                return data;
            }else{
                return false;
            }
        })
    },
}

module.exports = studentCollection;