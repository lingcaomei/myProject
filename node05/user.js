
/**
 * Created by Window 7 on 2015/12/2.
 */
var users=[];
module.exports=function(req,res,next){
    var action = req.query.action;
    var logininfo=req.body;
    var data='';
    //×¢²á
    if(action=='reg') {
        users.push(logininfo);
        data=true;
    }
    //µÇÂ½
    if(action=='login'){
        if(logininfo){
            for(var i=0;i<users.length;i++){
                var user=users[i];
                if(user.username==logininfo.username && user.password==logininfo.password){
                    data=true;
                }else{
                    data=false;
                }
            }
        }
    }

    res.send(data)
}