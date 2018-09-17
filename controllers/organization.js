let pool = require("../database-pool.js");
let JsonBack=require("../utils/JsonBack");
/**
 * @Description: 实现organization表的增删改查功能
 * @author nbut_Mickey
 * @date 2018/9/17
*/
var organizationCollection = {
    insertIntoOrganization:async function(req,res){
        let {name,university_code,organization_id,image}=req.body;
        let sql="INSERT INTO organization (name,university_code,organization_id,image) VALUES (?,?,?,?)";
        await pool.query(sql,[name,university_code,organization_id,image]).then((data)=>{
            if(data){
                JsonBack(true,"新增组织成功",null,res);
            }else{
                JsonBack(false,"新增组织失败",null,res);
            }
        })
    },
    deleteOrganization:async function(req,res){
        let id=req.body.id;
        let sql="DELETE FROM organization WHERE id=?";
        await pool.query(sql,[id]).then((data)=>{
            if(data){
                JsonBack(true,"删除组织成功",null,res);
            }else{
                JsonBack(false,"删除组织失败",null,res);
            }
        })
    },
    updateOrganization:async function(req,res){
        let {id,name,university_code,organization_id,image}=req.body;
        let sql="UPDATE organization SET name=?,university_code=?,organization_id=?,image=? WHERE id=?";
        await pool.query(sql,[name,university_code,organization_id,image,id]).then((data)=>{
            if(data){
                JsonBack(true,"更新组织信息成功",data,res);
            }else{
                JsonBack(false,"更新组织信息失败",null,res);
            }
        })

    },
    getAllOrganization:async function(req,res){
        let sql ="SELECT * FROM organization";
        await pool.query(sql).then((data)=>{
            if(data){
                JsonBack(true,"获取全部组织信息成功",data,res);
            }else{
                JsonBack(false,"获取全部组织信息失败",null,res);
            }
        })
    }
};

module.exports = organizationCollection;
