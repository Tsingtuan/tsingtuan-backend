let JsonBack=function (isSuccess,message,result,res) {
    res.json({
        isSuccess:isSuccess,
        message:message,
        result:result
    })
}
module.exports=JsonBack;