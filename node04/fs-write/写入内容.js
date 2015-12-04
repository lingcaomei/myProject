/**
 * Created by Window 7 on 2015/12/1.
 */
/**
 * 写入文件：
 *
 * 1.打开文件   异步打开文件 fs.open('./a.txt','w',function(err,fd){}) 回调里面写入 ；'./a.txt'有则写入，无则会自动创建
 * 2.写文件     fs.write(fd,buf,0,6,0,function(err,bytesWritten,buff){})
 * write
 *   fd 文件描述符
 *   buffer buffer对象  从buffer缓冲区里面 读取内容 写入打开的文件中 （存放要写入内容的缓冲区）
 *   offset 是从缓存区哪个位置开始读
 *   length 读多少个字节
 *   position 写入文件的起始位置 从文件的哪个位置开始写起
 *   callback
 * 3.关闭文件
 */

var fs=require('fs');
fs.open('./a.txt','w',function(err,fd){
    if(err){
        console.log(err);
    }else{
        var buf=new Buffer('开心的事')
        fs.write(fd,buf,0,6,0,function(err,bytesWritten,buff){
            console.log('成功写入了'+bytesWritten+'字节')
            //接着写入
            fs.write(fd,buf,6,6,function(err,bytesWritten,buff){
                console.log('成功写入了'+bytesWritten+'字节')
                fs.close(fd);//写完要记得关闭文件
            })
        })
    }
})

//以下为异步模式下写入文件的语法格式：

//fs.writeFile(filename, data[, options], callback)
//如果文件存在，该方法写入的内容会覆盖旧的文件内容。
/**
* path - 文件路径。
* data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(流) 对象。
* options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
* callback - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回。
*/



//获取文件信息
fs.stat('./a.txt', function(err,stats){
    if(err){
        console.log(err)
    }else{
        console.log(stats)
    }

})

/**{ dev: 824334,
*    mode: 33206,
*    nlink: 1,
*    uid: 0,
*    gid: 0,
*    rdev: 0,
*    blksize: undefined,
*    ino: 1125899906859947,
*    size: 6,
*    blocks: undefined,
*    atime: Tue Dec 01 2015 12:41:00 GMT+0800 (中国标准时间),
*    mtime: Tue Dec 01 2015 12:42:09 GMT+0800 (中国标准时间),
*    ctime: Tue Dec 01 2015 12:42:09 GMT+0800 (中国标准时间),
*    birthtime: Tue Dec 01 2015 12:41:00 GMT+0800 (中国标准时间) }
 */

/**
 * 以下为异步模式下读取文件的语法格式：
 * fs.read(fd, buffer, offset, length, position, callback)
 * 该方法使用了文件描述符来读取文件。
 *
 * fd - 通过 fs.open() 方法返回的文件描述符。
 * buffer - 数据写入的缓冲区。
 * offset - 缓冲区写入的写入偏移量。
 * length - 要从文件中读取的字节数。
 * position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
 * callback - 回调函数，有三个参数err, bytesRead, buffer;
 *                             err 为错误信息，
 *                             bytesRead 表示读取的字节数，buffer 为缓冲区对象。
 *
 */
