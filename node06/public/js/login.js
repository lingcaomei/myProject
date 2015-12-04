/**
 * Created by Window 7 on 2015/12/2.
 */
$(function(){

    var $name=$('#username');
    var $psw=$('#password');
    var $loginbtn=$('#loginbtn');

    var userinfo={}

    $loginbtn.click(function(){
        userinfo={
            username:$name.val(),
            password:$psw.val()
        }
        $.ajax({
            url:'/login',
            type:'POST',
            data:userinfo,
            success:function(data){
                console.log(data)
                if(data=='true'){
                    alert('登陆成功')
                    location.href = "/index";
                }else if(data=='false'){
                    alert('登陆失败')
                    location.href = "/login";
                }
            },
            error:function(err){
                console.log(err)
            }
            }
        )
    })
})


