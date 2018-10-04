let JsonBack = require("../utils/JsonBack");
let roleDao = require("../dao/roleDao");
let roleControllerCollection={
    getAllRole:function (req,res) {
        roleDao.getAllRole().then((result)=>{
            if(result){
                JsonBack(true,"获取全部职位信息成功",result,res);
            }else{
                JsonBack(false,"获取全部职位信息失败",null,res);
            }
        });
    },
    insertIntoRole:function (req,res) {
        roleDao.insertIntoRole(req.body).then((result)=>{
            if(result){
                JsonBack(true,"插入职位信息成功",null,res);
            }else{
                JsonBack(false,"插入职位信息失败",null,res);
            }
        });
    },
    deleteRole:function (req,res) {
        roleDao.deleteRole(req.params.id).then((result)=>{});
        if(result){
            JsonBack(true,"删除职位信息成功",null,res);
        }else{
            JsonBack(false,"删除职位信息失败",null,res);
        }
    },
    updateRole:function (req,res) {
        roleDao.updateRole(res.body).then((result)=>{
            if(result){
                JsonBack(true,"更新职位信息成功",null,res);
            }else{
                JsonBack(false,"更新职位信息失败",null,res);
            }
        });
    }
}




module.exports = roleControllerCollection;
