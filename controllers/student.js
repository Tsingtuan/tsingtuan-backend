let pool = require("../database-pool.js");
let JsonBack=require("../utils/JsonBack");
/**
 * @Description: 实现student表的增删改查功能
 * @author nbut_Mickey
 * @date 2018/9/17
*/
var studentCollection = {
    insertIntoStudent:async function(req,res){
        console.log(req.body, "12");
        let {name,wechat_id,wechat_name,university_code,avatar_image}=req.body;
        let sql="INSERT INTO student (name,wechat_id,wechat_name,university_code,avatar_image) VALUES (?,?,?,?,?)";
        await pool.query(sql,[name,wechat_id,wechat_name,university_code,avatar_image]).then((data)=>{
            if(data){
                JsonBack(true,"新增学生成功",null,res);
            }else{
                JsonBack(false,"新增学生失败",null,res);
            }
        })
    },
    deleteStudent:async function(req,res){
        let id=req.body.id;
        let sql="DELETE FROM student WHERE id=?";
        await pool.query(sql,[id]).then((data)=>{
            if(data){
                JsonBack(true,"删除学生成功",null,res);
            }else{
                JsonBack(false,"删除学生失败",null,res);
            }
        })
    },
    updateStudent:async function(req,res){
        let {id,name,wechat_id,wechat_name,university_code,avatar_image}=req.body;
        let sql="UPDATE student SET name=?,wechat_id=?,wechat_name=?,university_code=?,avatar_image=? WHERE id=?";
        await pool.query(sql,[name,wechat_id,wechat_name,university_code,avatar_image,id]).then((data)=>{
            if(data){
                JsonBack(true,"更新学生信息成功",null,res);
            }else{
                JsonBack(false,"更新学生信息失败",null,res);
            }
        })
    },
    getAllStudent:async function(req,res){
        let sql="SELECT * FROM student";
        await pool.query(sql).then((data)=>{
            if(data){
                JsonBack(true,"获取学生列表成功",data,res);
            }else{
                JsonBack(false,"获取学生列表失败",null,res);
            }
        })
    }
};

module.exports = studentCollection;
