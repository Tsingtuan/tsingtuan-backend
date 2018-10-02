let express = require('express');
let router = express.Router();
let university=require("../controllers/university");
let organization=require("../controllers/organization");
let student=require("../controllers/student");
let role=require("../controllers/role");

// 大学信息接口
router.get('/getAllUniversity',(req,res)=>{university.getAllUniversity(req,res)})
router.post('/insertIntoUniversity',(req,res)=>{university.insertIntoUniversity(req,res)})
router.post('/deleteUniversity',(req,res)=>{university.deleteUniversity(req,res)})
router.post('/updateUniversity',(req,res)=>{university.updateUniversity(req,res)})

//组织信息接口
router.get('/getAllOrganization',(req,res)=>{organization.getAllOrganization(req,res)})
router.post('/getOrganizationByUniversityID', (req, res) => {
    organization.getByUniversityID(req, res);
})
router.post('/insertIntoOrganization',(req,res)=>{organization.insertIntoOrganization(req,res)})
router.post('/deleteOrganization',(req,res)=>{organization.deleteOrganization(req,res)})
router.post('/updateOrganization',(req,res)=>{organization.updateOrganization(req,res)})

//职位信息接口
router.get('/getAllrole',(req,res)=>{role.getAllrole(req,res)})
router.post('/insertIntorole',(req,res)=>{role.insertIntorole(req,res)})
router.post('/deleterole',(req,res)=>{role.deleterole(req,res)})
router.post('/updaterole',(req,res)=>{role.updaterole(req,res)})

//学生信息接口
router.get('/getAllStudent',(req,res)=>{student.getAllStudent(req,res)})
router.post('/insertIntoStudent',(req,res)=>{student.insertIntoStudent(req,res)})
router.post('/deleteStudent',(req,res)=>{student.deleteStudent(req,res)})
router.post('updateStudent',(req,res)=>{student.updateStudent(req,res)})

module.exports = router;
