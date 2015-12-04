/**
 * Created by Window 7 on 2015/12/1.
 */
/**
 * 真实读取一个文件的过程
 * 1、打开文件  var fd=fs.openSync('./a.txt','r');
 * 2、读取文件  读到缓冲区（缓冲区没有的话要创建） fs.readSync(fd,buffer,offet,length,position);
 * 3、关闭文件  fs.closeSync(fd);
 *
 * fs.readSync(fd,buffer,offet,length,position);
 * fd 文件描述符   索引
 * buffer 从文件中读到哪个缓存区中
 * offset 向缓存区中的写入数据时的开始位置（缓存区的位置）
 * length 从文件中读取到多少个字节
 * position 从文件中读取的时候的开始位置 字节的位置 这个索引如果不给的话，就从文件的当时位置开始读取(上一次的读取位置+上一
 */

var fs=require('fs');
var fd=fs.openSync('./a.txt','r');
var buffer=new Buffer(1024);
buffer.fill(0)
fs.readSync(fd,buffer,0,18,0);//这是一件值
fs.readSync(fd,buffer,18,19);//得开心的事呢~

fs.closeSync(fd);
console.log(buffer.toString())