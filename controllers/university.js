let pool = require("../database-pool.js");
let JsonBack=require("../utils/JsonBack");
/**
 * @Description: 实现university表的增删改查功能
 * @author nbut_Mickey
 * @date 2018/9/17
*/
var universityCollection = {
  insertIntoUniversity:async function(req,res){
      let {name,university_code}=req.body;
      let sql = "INSERT INTO university (name,university_code) VALUES (?,?)";
      await pool.query(sql,[name,university_code]).then((data)=>{
          if(data){
              JsonBack(true,"添加学校成功",null,res);
          }else{
              JsonBack(false,"添加学校失败",null,res);
          }
      });
  },
  deleteUniversity:async function(req,res){
    let id=req.body.id;
    let sql="DELETE FROM university WHERE id=?";
    await pool.query(sql,[id]).then((data)=>{
        if(data){
            JsonBack(true,"删除学校成功",null,res);
        }else{
            JsonBack(false,"删除学校失败",null,res);
        }
    })
  },
  updateUniversity:async function(req,res){
    let {id,name,university_code}=req.body;
    let sql="UPDATE university SET name=?,university_code=? WHERE id=?";
    await pool.query(sql,[name,university_code,id]).then((data)=>{
        if(data){
            JsonBack(true,"更新学校成功",null,res);
        }else{
            JsonBack(false,"更新学校失败",null,res);
        }
    })
  },
  getAllUniversity: async (req,res)=> {
    let sql = "SELECT * FROM university";
    await pool.query(sql).then(((data)=>{
        if(data){
            JsonBack(true,"获取数据成功",data,res);
        }else{
            JsonBack(false,"获取数据失败",null,res);
        }
    }));
  },
};

module.exports = universityCollection;
