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
//复制到b.txt  b.txt原来要是有内容会被覆盖
move('a.txt','b.txt')