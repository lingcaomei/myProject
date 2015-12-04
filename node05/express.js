/**
 * Created by Window 7 on 2015/12/2.
 */
/**
 * #8.用express实现一个注册登录的功能
 * 1.用户访问 /显示注册表单。
 * 2.点击注册按钮，先把当前用户填写的内容得到保存内存。
 * [{username:'zhangsan',password:'lisi'}]
 * 保存之后跳到登陆页。
 * 3.在登陆页填写用户和密码，点击登陆，
 * 4后台判断用户名和密码是否正确 ，如果匹配则跳到欢迎页，
 * 如果不匹配返回重新填写登陆表单。
 */

var express=require('express');
var app=express();
var path = require('path');
var bodyParser = require('body-parser');
//var session = require('express-session');
var user=require('./user.js')

//发送过来的数据格式
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//静态文件服务器
app.use(express.static(__dirname +'/static'));



//中间件 统一声明文档类型
app.use(function(req,res,next){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    next();
});


app.use('/user',user)

app.listen(8002);