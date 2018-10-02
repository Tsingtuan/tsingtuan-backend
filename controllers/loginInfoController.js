let JsonBack = require("../utils/JsonBack");
let studentDao=require("../dao/studentDao");
let positionDao=require("../dao/positionDao");
let universityDao=require("../dao/universityDao");
let organizationDao=require("../dao/organizationDao");
let loginControllerCollection= {
    loginInfo: async function (req, res) {
        //判断是学校不存在还是社团不存在或者都存在那么直接插入申请加入社团的信息。
        //学校不存在&&社团不存在，根据自己输入的学校，后台插入学校并根据输入的社团进行插入，最后插入社员信息。
        if(req.body.university&&req.body.organization){
            let resultUniversity=universityDao.insertIntoUniversity(req.body.university);
            let resultOrganization=organizationDao.insertIntoOrganization(req.body.organization);
            let resultStudent=studentDao.insertIntoStudent(req.body.student);
            let resultPosition=positionDao.insertIntoPosition(req.body.position);
            if(resultUniversity&&resultOrganization&&resultStudent&&resultPosition){
                JsonBack(true,"插入信息成功",null,res);
            }else{
                JsonBack(false,"插入信息失败",null,res);
            }
        //学校存在，社团不存在，插入新增社团信息并插入社员信息。
        }else if(req.body.organization){
                let resultOrganization=organizationDao.insertIntoOrganization(req.body.organization);
                let resultStudent=studentDao.insertIntoStudent(req.body.student);
                let resultPosition=positionDao.insertIntoPosition(req.body.position);
                if(resultOrganization&&resultStudent&&resultPosition){
                    JsonBack(true,"插入信息成功",null,res);
                }else {
                    JsonBack(false, "插入信息失败", null, res);
                }
        //学校存在，社团存在，插入社员信息。
        }else{
                let resultStudent=studentDao.insertIntoStudent(req.body.student);
                let resultPosition=positionDao.insertIntoPosition(req.body.position);
                if(resultStudent&&resultPosition){
                    JsonBack(true,"插入信息成功",null,res);
                }else{
                    JsonBack(false,"插入信息失败",null,res);
                }
        }
        },
        //根据wechat_id获取注册社员的信息。
        getAllInfoPersonal:async function (req, res) {
        await studentDao.getStudentInfoAll(req.body.wechat_id).then((result) => {
            if (result) {
                JsonBack(true, "获取注册成员信息成功", result, res);
            } else {
                JsonBack(false, "获取注册成员信息失败", null, res);
            }
        }
    );
}

}
module.exports=loginControllerCollection;