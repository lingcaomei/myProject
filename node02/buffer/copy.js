/**
 * Created by Window 7 on 2015/11/25.
 */

Buffer.prototype.cp = function(targetBuffer, targetStart, sourceStart, sourceEnd) {
    var length = sourceEnd - sourceStart > targetBuffer.length - targetStart ?
    targetBuffer.length - targetStart : sourceEnd - sourceStart
    for(var i=sourceStart;i<sourceStart+length;i++){
        targetBuffer[targetStart++] = this[i];
        console.log(i);
    }

}


var buf1=new Buffer('开心','utf8');
var buf2=new Buffer('这是激动的事','utf8');
buf1.cp(buf2,6,0,6);
console.log(buf2.toString());



