/**
 * Created by Window 7 on 2015/12/1.
 */
/**
 * 创建目录,支持在没有父目录的情况下创建子目录
 * /a/b/c
 * function makeP(path){}
 */
var fs = require("fs");

function makeP(path){
    var pathArr=path[0]=='/'? path.substr(1).split('/') : path.split('/'); //  bb,b,c
    var parentPath=pathArr[0]; //父目录 bb

    var nextPath=pathArr.splice(1);
    var pathStr='/'+nextPath.join('/');
    //var pathStr=path.substr(1)=='/'? path.substr(1) : path;
    console.log(pathArr)

    fs.readdir('./',function(err, files){
        files.forEach( function (file){
            if(file==pathArr[0]){
                console.log('父目录已存在')
            }else{
                console.log('父目录不存在')
                fs.mkdir('./'+pathArr[0]+'/',function(){


                    var arr1=[];
                    for(var i=0;i<nextPath.length;i++){
                        parentPath=parentPath+'/'+nextPath[i];
                        arr1.push(parentPath);
                    }
                    var count=0;
                    var timer=setInterval(show,500)
                    function show(){
                        var aPath=arr1[count];
                        fs.mkdir(aPath,function(){
                            count+=1;
                            if(arr1.length==count){
                                clearInterval(timer)
                                return;
                            }
                            show();
                        })
                    }

                })
            }
        });
    })



}
makeP('/bb/b/c')
//
//fs.mkdir('./bb/b/c/d',function(err){
//    if (err) {
//        return console.error(err);
//    }
//    console.log("目录创建成功。");
//});

//fs.readdir('./',function(err, files){
//    if (err) {
//        return console.error(err);
//    }
//    files.forEach( function (file){
//        console.log( file );
//    });
//});

