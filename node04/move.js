/**
 * Created by Window 7 on 2015/12/1.
 */
var fs=require('fs');
//�ļ��ĸ��� sourcePathԴ�ļ� targetPath ���Ƶ����ļ�����û�оͻᴴ����
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
//���Ƶ�b.txt  b.txtԭ��Ҫ�������ݻᱻ����
move('a.txt','b.txt')