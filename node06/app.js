
var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var path = require('path');

//express·�ɹ���
var router = express.Router();


//���͹��������ݸ�ʽ
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function(req,res,next){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    next();//ÿ���м�����ֹ�����Ȩ��������next
});

//��̬�ļ�������  ��̬�ļ��� __dirname/public��Ϊ��Ŀ¼����˼
app.use(express.static(path.join(__dirname, 'public')));



//����html���͵�ģ�����ejs __express��������Ⱦ(��ejsģ���ļ�ʹ����չ��Ϊhtml���ļ�)
app.set('view engine','html');//ָ��ģ������
//����ģ�������ҳ��ģ���λ��
app.set('views', path.join(__dirname, 'views')); //ģ���ļ��� __dirname/views��Ϊ��Ŀ¼����˼
app.engine('html',require('ejs').__express);


//д·�� �����ʵ�url��/loginʱ ����loginģ����Ⱦ(// __dirname/views/login.html)
//app.get('/login',function(req,res){
//    // __dirname/views/login.html
//    res.render('login',{username:'zhangsan'});
//});

app.get('/index',function(req,res){
    // __dirname/view/index.html
    res.render('index',{username:'zhangsan'});//��Ⱦ�����index.htmlģ�壬�����������ģ���data
});


//router.get('/login', function(req, res) {
//    res.render('login',{username:'zhangsan'});
//});


//express·�ɹ���Router:

router.get('/about', function(req, res) {
    res.send('����');
});

//·������ʽ�ķ�ʽ���δ���get put post delete ��http����
router.route('/login') //��·��Ϊ/loginʱ
    .get(function(req, res) {  //��·��Ϊ/loginʱ ����Ϊget����ʱ��һ�����ҳ�涼��get���� ��loginģ����Ⱦ
        res.render('login', { title: '111' });
    })
    .post(function(req, res) { //��·��Ϊ/loginʱ ���������ҳ�淢��post����ʱ��һ��Ϊ�����½��ť����post���� ,�û�����������ȷ(��½����)����indexģ����Ⱦ
        var user={
            username: 'admin',
            password: '123456'
        }
        console.log(req.body)
        if(req.body.username === user.username && req.body.password === user.password){
            var data=true;
            //res.redirect('/index');//��ajax�����post������
            res.send(data);
            return;
        }
        res.redirect('/login');//�����û���������֤��ͨ��  ���ص�½ҳ��

    });

//��·��Ϊ /invest/desc/:id ʱ��������Ⱦ�����ҳ�� invest/desc
//router.route('/invest/desc/:id')
//    .get(router.action("invest/desc"));


app.use('/', router);


app.listen(8080)


/**
��Can��t set headers after they are sent.�� => �����ܷ���headers��Ϊ�Ѿ����͹�һ���ˡ�
 => �ڴ���HTTP����ʱ�����������������Ӧͷ��Ȼ��������������ݣ�
 ��һ�������һ����Ӧͷ������ִ�й� res.writeHead() �� res.write() �� res.end()����
 ���ٳ���ͨ�� res.setHeader() �� res.writeHead() ��������Ӧͷʱ
 ����Щ�������� res.redirect() ����� res.writeHead()�����ͻᱨ�������

��˵����express�е� res.header() �൱�� res.writeHead() ��res.send() �൱�� res.write() ��

ԭ���������������⣬�ظ�������Ӧ������ԭ��ܶ࣬��Ҫ�Լ��������ϵ�ԭ�����ų���
 */
