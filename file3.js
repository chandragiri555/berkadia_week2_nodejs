function verifyuser(username){
    var a=new Promise(function(resolve,reject){
        if(username=="pravali")
        resolve(username)
        else
        reject("invalid");
    })
    return a;
}
var arr=["hr","admin","senior"]
function getroles(username){
    return new Promise(function(resolve,reject){
        if(username=="pravali")
        resolve(arr);
        else
        reject("invalid user");
    })
}
    function checkuseraccess(arr){
        return new Promise(function(resolve,reject){
            for(i=0;i<arr.length;i++)
            {
                if(arr[i]=="hr")
            
                    resolve("success");
                else
                    reject("failure");
            
            }
        })
    }
function autenticateuser(username,password){
    return new Promise(function(resolve,reject){
        if(username=="pravali"&&password=="123")
        resolve("username");
        else
        reject("invalid user");
    })
}
async function result(){
    try{
        var m=await autenticateuser("pravali","123");
        var n=await verifyuser(m);
        var o=await getroles(n);
        var q=await checkuseracess(o);
         console.log(q);
    }
    catch(e)
    {
        console.log("error",e);
    }

    }
  result();
