let JsonBack = require("../utils/JsonBack");
let positionDao = require("../dao/positionDao");
let positionControllerCollection={
    getAllPosition:function (req,res) {
        positionDao.getAllPosition().then((result)=>{
            if(result){
                JsonBack(true,"获取全部职位信息成功",result,res);
            }else{
                JsonBack(false,"获取全部职位信息失败",null,res);
            }
        });
    },
    insertIntoPosition:function (req,res) {
        positionDao.insertIntoPosition(req.body).then((result)=>{
            if(result){
                JsonBack(true,"插入职位信息成功",null,res);
            }else{
                JsonBack(false,"插入职位信息失败",null,res);
            }
        });
    },
    deletePosition:function (req,res) {
        positionDao.deletePosition(req.params.id).then((result)=>{});
        if(result){
            JsonBack(true,"删除职位信息成功",null,res);
        }else{
            JsonBack(false,"删除职位信息失败",null,res);
        }
    },
    updatePosition:function (req,res) {
        positionDao.updatePosition(res.body).then((result)=>{
            if(result){
                JsonBack(true,"更新职位信息成功",null,res);
            }else{
                JsonBack(false,"更新职位信息失败",null,res);
            }
        });
    }
}




module.exports = positionControllerCollection;