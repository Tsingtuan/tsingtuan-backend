let pool = require("../database-pool.js");
let JsonBack = require("../utils/JsonBack.js");
/**
 * @Description: 实现pisition表的增删改查功能
 * @author nbut_Mickey
 * @date 2018/9/17
 */
var roleCollection = {
    insertIntorole: async function (req, res) {
            let {organization_id,division,name,wechat_id} = req.body;
            console.log(req.body, "11");
            let sql = `INSERT INTO role (organization_id,division,name,wechat_id) VALUES (?,?,?,?)`;
            
            await pool.query(sql, [organization_id, division, name, wechat_id]).then((data) => {
                if (data) {
                    JsonBack(true, "新增一个职位成功", null, res);
                } else {
                    JsonBack(false, "新增一个职位失败", null, res);
                }
            })
        },
        deleterole: async function (req, res) {
                let id = req.body.id;
                let sql = "DELETE FROM role WHERE id=?";
                await pool.query(sql, [id]).then((data) => {
                    if (data) {
                        JsonBack(true, "删除一个职位成功", null, res);
                    } else {
                        JsonBack(false, "删除一个职位失败", null, res);
                    }
                })
            },
            updaterole: async function (req, res) {
                    let {
                        id,
                        organization_id,
                        division,
                        name,
                        wechat_id
                    } = req.body;
                    let sql = "UPDATE role SET organization_id=?,division=?,name=?,wechat_id=? WHERE id=?";
                    await pool.query(sql, [organization_id, division, name, wechat_id, id]).then((data) => {
                        if (data) {
                            JsonBack(true, "更新一个职位成功", null, res);
                        } else {
                            JsonBack(false, "更新一个职位失败", null, res);
                        }
                    })
                },
                getAllrole: async function (req, res) {
                    let sql = "SELECT * FROM role";
                    await pool.query(sql).then((data) => {
                        if (data) {
                            JsonBack(true, "获取职位列表成功", data, res);
                        } else {
                            JsonBack(false, "获取职位列表失败", null, res);
                        }
                    })
                }
};

module.exports = roleCollection;