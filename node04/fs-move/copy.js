/**
 * Created by Window 7 on 2015/12/1.
 */
/**
 * 拷贝文件：边读边写  先读8K 写8K 写完再读
 * 1、先打开文件 获取文件fd
 * 2、创建一个缓冲区 Buffer,储存每次读到的内容
 * 3、读取文件 一部分后（放入缓冲区） （从缓冲区）写入目标文件中  写完后再读...循环
 */
var fs=require('fs');
function copy(sourcePath,targetPath){
    var sourceFd=fs.openSync(sourcePath,'r');
    var targetPath=fs.openSync(targetPath,'w');

    var buf=new Buffer(8*1024);//大小8k

    var readSoFar=0;//从文件的什么地方开始读
    var writeSoFar=0;//从文件的什么地方开始写
    do{
       var read=fs.readSync(sourceFd,buf,0,buf.length,readSoFar);//返回一个 bytesRead (读取的字节数);
        //写入的文件 从哪个缓冲区拿数据 从缓冲区的0位置开始 写入读到的字节长度 从文件的哪个位置开始写
        fs.writeSync(targetPath,buf,0,read,writeSoFar);
        readSoFar+=read;
        writeSoFar+=read;
    }while(read==buf.length)//当读满8K的时候继续循环 不满8k说明已经读完了

    //关闭文件
    fs.closeSync(sourceFd);
    fs.closeSync(targetPath);
}

copy('a.txt','c.txt')