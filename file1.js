function verifyuser(username,callback)
{
    if(username=="pravali")
      callback(username)
    else
    callback("wrong user");
}
var p=["user","hr","admin"];
function getroles(username,callback)
{
    if(username=="pravali")
    callback(p)
    else
    callback("invalid");
}
function checkuseracess(a,callback)
{
    for(i=0;i<p.length;i++)
    {
        if(p[i]=="admin"){
        callback("success");
        break;
        }
        else
        callback("failure");
    }
}
function autenticationuser(username,pswrd,callback)
{
    if(username=="pravali"&&pswrd=="123")
    callback("valid user");
    else
    callback("invalid user");
}
autenticationuser("pravali","123",function(res1){
    verifyuser(res1,function(res2){
        getroles(res2,function(res3){
            checkuseracess(res3,function(res4){
                console.log(res4);
            })
        })
    })


})



