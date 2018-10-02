let JsonBack = require("../utils/JsonBack");
let studentDao=require("../dao/studentDao");
let studentControllerCollection={
    getAllStudent:function (req,res) {
        studentDao.getAllStudent().then((result)=>{
            if(result){
                JsonBack(true,"获取全部学生信息成功",result,res);
            }else{
                JsonBack(false,"获取全部学生信息失败",null,res);
            }
        });
    },
    insertIntoStudent:function (req,res) {
        studentDao.insertIntoStudent(res.body).then((result)=>{
            if(result){
                JsonBack(true,"插入学生信息成功",null,res);
            }else{
                JsonBack(false,"插入学生信息失败",null,res);
            }
        });
    },
    deleteStudent:function (req,res) {
        studentDao.deleteStudent(req.params.id).then((result)=>{
            if(result){
                JsonBack(true,"删除学生信息成功",null,res);
            }else{
                JsonBack(false,"删除学生信息失败",null,res);
            }
        });
    },
    updateStudent:function (req,res) {
        studentDao.updateStudent(req.body).then((result)=>{
            if(result){
                JsonBack(true,"更新学生信息成功",null,res);
            }else{
                JsonBack(false,"更新学生信息失败",null,res);
            }
        });
    }
}




module.exports = studentControllerCollection;