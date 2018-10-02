let JsonBack=function (isSuccess,message,result,response) {
   response.json({
        isSuccess:isSuccess,
        message:message,
        result:result
    })
}
module.exports=JsonBack;