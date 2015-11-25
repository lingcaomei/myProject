var buf=new Buffer(12);//长度为字节 12个字节 utf8编码 1个中文字符==>个字节
console.log(buf);
//<Buffer 02 00 00 00 00 00 00 00 00 00 00 02> 12位

//var buf1 = new Buffer([1,2,3,4,5,6,10,11,12,15,16,17]);
//<Buffer 01 02 03 04 05 06 0a 0b 0c 0f 10 11>十六进制 10~15 0a~0f 满十六进1 16==>10  17==>11
var buf1 = new Buffer([0x65,0x66,0x67]);
console.log(buf1);
//<Buffer 65 66 67>
console.log(buf1.toString());
var buf4 = new Buffer(buf1);
console.log(buf4)


var buf2 = new Buffer('www.runoob.com');
var json = buf2.toJSON(buf);

console.log(json);

var buf5=new Buffer('这是一个字符串','utf8');
console.log(buf5);
var buf6=buf5.slice(0,12);
console.log(buf6.toString());
console.log(buf5);
//buf5  <Buffer e8 bf 99 e6 98 af e4 b8 80 e4 b8 aa e5 ad 97 e7 ac a6 e4 b8 b2>
//buf6  <Buffer e8 bf 99 e6 98 af e4 b8 80 e4 b8 aa e5>
//buf5  <Buffer e8 bf 99 e6 98 af e4 b8 80 e4 b8 aa e5 ad 97 e7 ac a6 e4 b8 b2>

var buf7=new Buffer('开心','utf8');
var buf8=new Buffer('的事','utf8');
console.log(buf7)
buf7.copy(buf8, 0, 12);
console.log(buf7)


var buffer1 = new Buffer('1234567');
// 拷贝一个缓冲区
var buffer2 = new Buffer('ABCEFG',0);
buffer1.copy(buffer2,2,0,(buffer1.length));
console.log("buffer2 content: " + buffer2.toString());


var buf11=new Buffer('开心的事');
console.log(buf11)
//<Buffer e5 bc 80 e5 bf 83 e7 9a 84 e4 ba 8b>
var buf12=buf11.slice(0,6);
buf12[0]=15;//对切去后得到的buffer进行了修改 改了第一个
console.log(buf11)
//<Buffer 0f bc 80 e5 bf 83 e7 9a 84 e4 ba 8b>//原来的buffer对应的那一个也会改变


var a1 = new Buffer('10');
var a2 = new Buffer('50');
var a3 = new Buffer('123');

// a1小于a2
console.log(Buffer.compare(a1,a2));
//> -1

// a2小于a3
console.log(Buffer.compare(a2,a3));
//> 1

// a1,a2,a3排序输出
console.log([a1,a2,a3].sort(Buffer.compare));
//> [ <Buffer 31 30>, <Buffer 31 32 33>, <Buffer 35 30> ]

// a1,a2,a3排序输出，以utf-8的编码输出
console.log([a1,a2,a3].sort(Buffer.compare).toString());
//> 10,123,50



// 创建空间大小为64字节的Buffer
var buf = new Buffer(64);

// 从开始写入Buffer，偏移0
var len1 = buf.write('从开始写入');

// 打印数据的长度，打印Buffer的0到len1位置的数据
console.log(len1 + " bytes: " + buf.toString('utf8', 0, len1));


var buf01=new Buffer(12);
console.log(buf01.length)
var len=buf01.write('开始',0,6,'utf8');
var len1=buf01.write('写入',6,6,'utf8');

console.log(len + buf01.toString('utf8',0,12))


var buf02=new Buffer('开心');
console.log(buf02.toJSON())


var src = new Buffer('开心的事');
var target = new Buffer('这真的是一件让人激动的事情呢，对不？');
src.copy(target,18,0,12)//从target第六个字开始 即3*6=18个字节 开始放，从0的位置开始拷贝，拷贝12个字符
console.log('copy'+target);
//copy这真的是一件开心的事的事情呢，对不？
