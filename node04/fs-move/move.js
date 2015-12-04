/**
 * Created by Window 7 on 2015/12/1.
 */
var fs=require('fs');
//文件的复制 sourcePath源文件 targetPath 复制到的文件名（没有就会创建）
function move(sourcePath,targetPath){
    fs.readFile(sourcePath,function(err,data){
        if(err){
            console.log(err);
        }else{
            fs.writeFile(targetPath,data,function(err){
                if(err){
                    console.log(err)
                }
            })
        }
    })
}
//复制a.txt 到b.txt  b.txt原来要是有内容会被覆盖
move('a.txt','b.txt')

/**
 * 截取文件:

 * 以下为异步模式下截取文件的语法格式：
 * fs.ftruncate(fd, len, callback)
 * 该方法使用了文件描述符来读取文件。
 *
 * 参数使用说明如下：
 * fd - 通过 fs.open() 方法返回的文件描述符。
 * len - 文件内容截取的长度。
 * callback - 回调函数，没有参数。

 */
var buf=new Buffer(1024);
buf.fill(0);

//读取文件的信息
fs.stat('./a.txt',function(err,stat){
    console.log(stat)
})
fs.open('./a.txt','r+',function(err,fd){
    console.log(buf);
    //截取文件 18截取的长度   直接改变文件本身，只剩截取的内容
    fs.ftruncate(fd,7,function(){
        console.log('截取成功');
        //读取相同的文件 输出的文件内容就只剩下截取了的内容了   bytes 返回的是读到的字节总长度
        //把文件内容读取到buf，缓冲区里面
        fs.read(fd,buf,0,buf.length,0,function(err,bytes){
            if(bytes > 0){
                console.log(buf.slice(0, bytes).toString());
            }

            // 关闭文件
            fs.close(fd, function(err){
                if (err){
                    console.log(err);
                }
                console.log("文件关闭成功！");
            });
        })
    })
})

//删除文件 fs.unlink(path, callback);  path文件的路径 回调函数没有参数
fs.unlink('b.jpg',function(){
    console.log('删除成功')
})
