let JsonBack = require("../utils/JsonBack");
let universityDao=require("../dao/universityDao");
let universityControllerCollection={
    getAllUniversity:async function (req,res) {
        await universityDao.getAllUniversity().then((result)=>{
            if(result){
                JsonBack(true,"获取全部大学信息成功",result,res);
            }else{
                JsonBack(false,"获取全部大学信息失败",null,res);
            }
        })
        }
    ,
    insertIntoUniversity:function (req,res) {
        //如果大学不存在，则创建大学+创建大学+加入社团
        universityDao.insertIntoUniversity(req.body).then((result)=>{
            if(result){
                JsonBack(true,"插入大学信息成功",null,res);
            }else{
                JsonBack(false,"插入大学信息失败",null,res)
            }
        });
    },
    deleteUniversity:function (req,res) {
        universityDao.deleteUniversity(req.params.id).then((result)=>{
            if(result){
                JsonBack(true,"删除大学信息成功",null,res);
            }else{
                JsonBack(false,"删除大学信息失败",null,res);
            }
        });
    },
    updateUniversity:function (req,res) {
        universityDao.updateUniversity(res.body).then((result)=>{
            if(result){
                JsonBack(true,"更新大学信息成功",null,res);
            }else{
                JsonBack(false,"更新大学信息失败",null,res);
            }
        });
    },
}
module.exports = universityControllerCollection;