let pool = require("../database-pool.js");
let sqlMap = require("../sql/sqlMap");
let organizationCollection = {
    insertIntoOrganization:function(params){
        let {name,university_code,organization_id,image}=params;
        let sql=sqlMap.Organization.insertIntoOrganization;
        return pool.query(sql,[name,university_code,organization_id,image]).then((data)=>{
            if(data.affectedRows>0){
                return true;
            }else{
                return false;
            }
        })
    },
    deleteOrganization:async function(id){
        let sql=sqlMap.Organization.deleteOrganization;
        return await pool.query(sql,[id]).then((data)=>{
            if(data){
                return true;
            }else{
                return false;
            }
        })
    },
    updateOrganization:async function(params){
        let {id,name,university_code,organization_id,image}=params;
        let sql=sqlMap.Organization.updateOrganization;
        return await pool.query(sql,[name,university_code,organization_id,image,id]).then((data)=>{
            if(data){
                return true;
            }else{
                return false;
            }
        })

    },
    getAllOrganization:async function(){
        let sql =sqlMap.Organization.getAllOrganization;
        return await pool.query(sql).then((data)=>{
            if(data){
                return data;
            }else{
                return false;
            }
        })
    },
    /**
     * @Description: 根据university_code来获取大学社团信息
     * @author nbut_Mickey
     * @date 2018/9/29
     */
    getUniversityOrganization:async function(university_code){
        let sql=sqlMap.University.getUniversityWithOrganization;
        return await pool.query(sql,[university_code]).then((data)=>{
            if(data){
                return data;
            }else{
                return false;
            }
        })
    }
};

module.exports = organizationCollection;