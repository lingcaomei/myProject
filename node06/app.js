
var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var path = require('path');

//express路由工具
var router = express.Router();


//发送过来的数据格式
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function(req,res,next){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    next();//每个中间有中止请求的权利，不调next
});

//静态文件服务器  静态文件以 __dirname/public作为根目录的意思
app.use(express.static(path.join(__dirname, 'public')));



//对于html类型的模板调用ejs __express来进行渲染(让ejs模板文件使用扩展名为html的文件)
app.set('view engine','html');//指定模板引擎
//设置模板引擎和页面模板的位置
app.set('views', path.join(__dirname, 'views')); //模板文件以 __dirname/views作为根目录的意思
app.engine('html',require('ejs').__express);


//写路由 当访问的url是/login时 就用login模板渲染(// __dirname/views/login.html)
//app.get('/login',function(req,res){
//    // __dirname/views/login.html
//    res.render('login',{username:'zhangsan'});
//});

app.get('/index',function(req,res){
    // __dirname/view/index.html
    res.render('index',{username:'zhangsan'});//渲染输出到index.html模板，后面是输出到模板的data
});


//router.get('/login', function(req, res) {
//    res.render('login',{username:'zhangsan'});
//});


//express路由工具Router:

router.get('/about', function(req, res) {
    res.send('关于');
});

//路由以链式的方式依次处理get put post delete 等http请求
router.route('/login') //当路径为/login时
    .get(function(req, res) {  //当路径为/login时 ，且为get请求时（一般加载页面都是get请求） 用login模板渲染
        res.render('login', { title: '111' });
    })
    .post(function(req, res) { //当路径为/login时 ，且在这个页面发起post请求时（一般为点击登陆按钮发起post请求） ,用户名和密码正确(登陆操作)，用index模板渲染
        var user={
            username: 'admin',
            password: '123456'
        }
        console.log(req.body)
        if(req.body.username === user.username && req.body.password === user.password){
            var data=true;
            //res.redirect('/index');//用ajax请求的post不管用
            res.send(data);
            return;
        }
        res.redirect('/login');//否则用户名密码验证不通过  返回登陆页面

    });

//当路径为 /invest/desc/:id 时，加载渲染到这个页面 invest/desc
//router.route('/invest/desc/:id')
//    .get(router.action("invest/desc"));


app.use('/', router);


app.listen(8080)


/**
“Can’t set headers after they are sent.” => “不能发送headers因为已经发送过一次了”
 => 在处理HTTP请求时，服务器会先输出响应头，然后再输出主体内容，
 而一旦输出过一次响应头（比如执行过 res.writeHead() 或 res.write() 或 res.end()），
 你再尝试通过 res.setHeader() 或 res.writeHead() 来设置响应头时
 （有些方法比如 res.redirect() 会调用 res.writeHead()），就会报这个错误。

（说明：express中的 res.header() 相当于 res.writeHead() ，res.send() 相当于 res.write() ）

原因就是你程序有问题，重复作出响应，具体原因很多，需要自己根据以上的原则来排除。
 */
