##1. ��ζ�ȡһ��txt�ı������ҽ����������

        var http=require('http');
        var fs=require('fs');
        var readTxt=function(req,res){
           //var content= fs.readFileSync('1.txt','utf8');  //ͬ����ȡ
           //res.end(content);

           fs.readFile('1.txt','utf8',function(err,data){ //�첽��ȡ
                if(err){
                    console.log('ʧ��')
                }else{
                    res.end(data)
                }
           })
        }
        var server=http.createServer(readTxt);
        server.listen('8080');

        ****���readFile && readFileSync ָ���˱���utf8�������ļ�����ı�����ANSI���������������ʼ���޷�
            ������д���ļ���һֱ���룬��ȡ����
        ****ʹ��node.js����ʱ�������Ǵ����ļ�������Ҫ��д�������ļ���������ʹ��UTF8�����ʽ���棬
            ����������������ģ��֧��


##2. ʵ��һ���򵥵��¼����� ������Ӽ���  �����¼� �Ƴ�����

        var EventEmitter=require('events');  //�¼�ģ��
        var util=require('util');
        util.inherits(All,EventEmitter);  //All���� �̳�EventEmitter��̳����Ĺ��캯��

        function All(){};   //���캯��
        var All=new All();  //����

        All.addListener('ask',function(){     //����¼�����
            console.log('who are you?')
        })
        All.addListener('ask1',function(){     //����¼�����
            console.log('where do you come from?')
        })
        All.removeListener('ask1',function(){    //�Ƴ��¼�����
            console.log('where do you come from?')
        })
        All.emit('ask');                   //�����¼�������һ���¼���

        function Person(name,response){
            this.name=name;
            this.response=response;
        }
        var p1=new Person('gogo',function(){
            console.log('����gogo')
        })
        var p2=new Person('sandy',function(){
            console.log('����sandy')
        })
        All.addListener('who',p1.response);  //����¼�����
        All.addListener('who',p2.response);  //����¼�����
        All.removeListener('who',p1.response);//�Ƴ��¼�����
        All.emit('who');   //�����¼�������һ���¼���

