/**
 * Created by Window 7 on 2015/12/2.
 */
$(function(){

    var $name=$('#username');
    var $psw=$('#password');
    var $regbtn=$('#regbtn');

    var userinfo={}

    $regbtn.click(function(){
        userinfo={
            username:$name.val(),
            password:$psw.val()
        }
        $.ajax({
                url:'/user?action=reg',
                type:'POST',
                data:userinfo,
                success:function(data){
                    alert('×¢²á³É¹¦')
                    if(data){
                        location.href = "./login.html";
                    }
                },
                error:function(err){
                    console.log(err)
                }
            }
        )
    })
})

/**
 * Created by Window 7 on 2015/12/2.
 */
