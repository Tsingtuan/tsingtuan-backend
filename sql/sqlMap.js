let sqlMap={
    Student:{
        insertIntoStudentSql:'INSERT INTO student (name,wechat_id,wechat_name,university_code,avatar_image) VALUES (?,?,?,?,?)',
        deleteStudentSql:'DELETE FROM student WHERE id=?',
        updateStudentSql:'UPDATE student SET name=?,wechat_id=?,wechat_name=?,university_code=?,avatar_image=? WHERE id=?',
        getAllStudent:'SELECT * FROM student',
        getStudentAllInfo:'SELECT student.name as sname,university.name as uname,organization.name as oname,position.name as pname FROM student,university,organization,position WHERE student.wechat_id = position.wechat_id AND position.organization_id = organization.organization_id AND organization.university_code = university.university_code AND student.wechat_id=?'
    },
    Role:{
        insertIntoRole:'INSERT INTO role (organization_id,division,name,wechat_id) VALUES (?,?,?,?)',
        deleteRole:'DELETE FROM role WHERE id=?',
        updateRole:'UPDATE role SET organization_id=?,division=?,name=?,wechat_id=? WHERE id=?',
        getAllRole:'SELECT * FROM role'
    },
    University:{
        insertIntoUniversity:'INSERT INTO university (name,university_code) VALUES (?,?)',
        deleteUniversity:'DELETE FROM university WHERE id=?',
        updateUniversity:'UPDATE university SET name=?,university_code=? WHERE id=?',
        getUniversityWithOrganization:'SELECT * FROM organization WHERE university_code=?',
        getAllUniversity:'SELECT * FROM university'
    },
    Organization:{
        insertIntoOrganization:'INSERT INTO organization (name,university_code,organization_id,image) VALUES (?,?,?,?)',
        deleteOrganization:'DELETE FROM organization WHERE id=?',
        updateOrganization:'UPDATE organization SET name=?,university_code=?,organization_id=?,image=? WHERE id=?',
        getAllOrganization:'SELECT * FROM organization'
    }
}
module.exports=sqlMap;
