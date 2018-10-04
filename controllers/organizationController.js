let JsonBack = require("../utils/JsonBack");
let organizationDao = require("../dao/organizationDao");
let organizationControllerCollection={
    getAllOrganization:function (req,res) {
        organizationDao.getAllOrganization().then((result)=>{
            if(result){
                JsonBack(true,"获取全部社团信息成功",result,res);
            }else{
                JsonBack(false,"获取全部社团信息失败",null,res);
            }
        });
    },
    insertIntoOrganization:function (req,res) {
        organizationDao.insertIntoOrganization(req.body).then((result)=>{
            if(result){
                JsonBack(true,"插入社团成功",null,res);
            }else{
                JsonBack(false,"插入社团失败",null,res);
            }
        });
    },
    deleteOrganization:function (req,res) {
        organizationDao.deleteOrganization(req.params.id).then((result)=>{
            if(result){
                JsonBack(true,"删除社团成功",null,res);
            }else{
                JsonBack(false,"删除社团失败",null,res);
            }
        });
    },
    updateOrganization:function (req,res) {
        organizationDao.updateOrganization(req.body).then((result)=>{
            if(result){
                JsonBack(true,"更新社团信息成功",null,res);
            }else{
                JsonBack(false,"更新社团信息失败",null,res)
            }
        });
    },
    //根据前端选择的学校携带university_code获取对应的社团信息。
    getUniversityOrganization:function (req,res) {
        console.log(req.query);
        organizationDao.getUniversityOrganization(req.query.university_code).then((result)=>{
            if(result){
                JsonBack(true,"获取大学社团信息成功",result,res);
            }else{
                JsonBack(false,"获取大学社团信息失败",null,res);
            }
        });
    }
}




module.exports = organizationControllerCollection;
