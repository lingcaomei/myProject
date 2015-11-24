##1. 如何读取一个txt文本，并且解决乱码问题

        var http=require('http');
        var fs=require('fs');
        var readTxt=function(req,res){
           //var content= fs.readFileSync('1.txt','utf8');  //同步读取
           //res.end(content);

           fs.readFile('1.txt','utf8',function(err,data){ //异步读取
                if(err){
                    console.log('失败')
                }else{
                    res.end(data)
                }
           })
        }
        var server=http.createServer(readTxt);
        server.listen('8080');

        ****如果readFile && readFileSync 指定了编码utf8，但是文件本身的编码是ANSI（或其它），则会始终无法
            把中文写入文件，一直乱码，读取正常
        ****使用node.js开发时，无论是代码文件，还是要读写的其它文件，都建议使用UTF8编码格式保存，
            这样可以无需额外的模块支持


##2. 实现一个简单的事件监听 包括添加监听  发射事件 移除监听

        var EventEmitter=require('events');  //事件模块
        var util=require('util');
        util.inherits(All,EventEmitter);  //All对象 继承EventEmitter与继承他的构造函数

        function All(){};   //构造函数
        var All=new All();  //对象

        All.addListener('ask',function(){     //添加事件监听
            console.log('who are you?')
        })
        All.addListener('ask1',function(){     //添加事件监听
            console.log('where do you come from?')
        })
        All.removeListener('ask1',function(){    //移除事件监听
            console.log('where do you come from?')
        })
        All.emit('ask');                   //发射事件（触发一个事件）

        function Person(name,response){
            this.name=name;
            this.response=response;
        }
        var p1=new Person('gogo',function(){
            console.log('我是gogo')
        })
        var p2=new Person('sandy',function(){
            console.log('我是sandy')
        })
        All.addListener('who',p1.response);  //添加事件监听
        All.addListener('who',p2.response);  //添加事件监听
        All.removeListener('who',p1.response);//移除事件监听
        All.emit('who');   //发射事件（触发一个事件）

