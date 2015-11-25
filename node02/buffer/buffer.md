##Buffer  缓冲区

1、JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。

2、但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，
该类用来创建一个专门存放二进制数据的缓存区。

3、在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。Buffer 库为 Node.js 带来了一种存储原始数据的方法，
可以让 Node.js 处理二进制数据，每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。
原始数据存储在 Buffer 类的实例中。一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。

##如何创建Buffer 对象(无论传入的参数是什么 ，都是根据传入的参数，就决定了这个Buffer对象的内存大小了)

#1、根据长度创建：

	var buf=new Buffer(size);Buffer 具有length属性  //长度单位为字节 12个字节 utf8编码 1个中文字符==>个字节

	****使用new Buffer(size)分配的缓冲区，是未初始化的哦。那块内存里，可能是脏的，什么玩意儿都有，
	    使用buf.fill()方法填充一下就好了：
	
	    buf.fill(0);使用指定的 value 来填充这个 buffer。全部置为0，然后再往里面写入就可以了

#2、根据数组（字节数组）创建：
 
	var buf=new Buffer([1,2,3,4,5,6]);存放了一个需要被指定数值的数组来创建
	var buf3 = new Buffer([0x65,0x66,0x67]);

#3、根据字符串创建：

	var buf=new Bufffer('这是传入的字符串啊','utf8'); 使用字符串来初始化


##utf-8 是默认的编码方式，Buffer支持的编码格式

	1、ascii   ASCII字符串
	2、utf8    utf8编码
	3、base64  经过base64编码后的字符串
	4、binary  二进制数据
	5、hex     十六进制表示的字符串

##写入缓冲区 write()

buf.write(string[, offset][, length][, encoding]);

    string - 写入缓冲区的字符串。

    offset - 缓冲区开始写入的索引值，默认为 0 。

    length - 写入的字节数，默认为 buffer.length

    encoding - 使用的编码。默认为 'utf8' 。

****返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。

##衡量一个字符串占用的字节长度

   可以使用Buffer.byteLength(string[,encoding])这个方法，它会测量一个字符串在指定编码格式下占用的字节长度。

   string :要衡量字节长度的字符串
   [,encoding]：编码格式 通常utf8

##StringDecoder 将buffer转换成字符串

    //与toString()相似，但更有优势

    var aa=new Buffer([0xe5, 0xbc, 0x80, 0xe5, 0xbf, 0x83,0xe7]);
    var bb=new Buffer([ 0x9a, 0x84, 0xe4, 0xba, 0x8b]);

    //出现了乱码 因为aa上面多了一个字节编码是bb的
    console.log(aa.toString())
    console.log(bb.toString())
    //开心*
    //**事
    //解决：编译不了的编码会先存起来，再跟下一个自动识别编译成字符
    var StringDecoder=require('string_decoder').StringDecoder;
    var decoder=new StringDecoder();
    console.log(decoder.write(aa))
    console.log(decoder.write(bb))
    //开心
    //的事

    //aa <Buffer e5 bc 80 e5 bf 83>//开心
    //bb <Buffer e7 9a 84 e4 ba 8b>//的事

##对Buffer缓冲区裁剪

    buf.slice([start[, end]])

   1、可以根据起止位置（不包含结束位置对应的数据）对一个缓冲区进行切片，返回一个新的Buffer对象，方便我们操作缓冲区的某个区域。
   2、切片内容的修改，实际上修改的是原始的缓冲区。这个方法返回一个代表切片的Buffer对象。
   3、但是这不是副本，而是对原来的buffer的引用，如果对返回的Buffer对象，进行修改，原来的Buffer对象也会改变。

	例如：

	var buf11=new Buffer('开心的事');

	console.log(buf11)

	//<Buffer e5 bc 80 e5 bf 83 e7 9a 84 e4 ba 8b>

	var buf12=buf11.slice(0,6);

	buf12[0]=15;//对切去后得到的buffer进行了修改 改了第一个

	console.log(buf11)

	//<Buffer 0f bc 80 e5 bf 83 e7 9a 84 e4 ba 8b>//原来的buffer对应的那一个也会改变

##复制缓存数据 将一个缓冲区指定区域的内容拷贝到另一个缓冲的指定区域 

	****有内存的限制，被拷贝的字节长度不能超过拷贝到Buffer对象剩余的长度内存，超过则忽略
	****从放置的位置开始，后面的内容都会被拷贝过来的内容覆盖，剩余的显示原来的内容

	buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])

被拷贝的Buffer.copy(拷贝到的Buffer,从哪个位置开始放置拷贝过来的内容，从被拷贝的Buffer对象中那个位置开始复制，从被拷贝的Buffer对象中那个位置结束)

	targetStart指定目标缓冲区的起始偏移（拷贝到的Buffer）

	sourceStart指定源缓冲区的起始偏移，它们默认都是0；（从哪个位置开始拷贝）

	sourceEnd指定源缓冲区的结束位置，默认是源缓冲区（被拷贝的Buffer））的长度。

	实际复制时，会比较目标缓冲区的长度和待复制区域的长度，哪个小按哪个来，不会越界。

	sourceEnd-sourceStart>targetBuffer.length-targetStart?targetBuffer.length-targetStart:sourceEnd-sourceStart
	
	例子1：
	var buffer1 = new Buffer('1234');
	// 拷贝一个缓冲区
	var buffer2 = new Buffer('ABCEFG',0);
	//实际上是把buffer1上拷贝到目标 buffer2上，下面的
	buffer1.copy(buffer2,2,0,buffer1.length);

	console.log("buffer2 content: " + buffer2.toString());
	
	例子2：
	var src = new Buffer('开心的事');
	var target = new Buffer('这真的是一件让人激动的事情呢，对不？');
	src.copy(target,18,0,12)//从target第六个字开始 即3*6=18个字节 开始放，从0的位置开始拷贝，拷贝12个字符
	console.log('copy'+target);
	//copy这真的是一件开心的事的事情呢，对不？


##Buffer 缓冲区长度

	var buf=new Buffer('开心');
	 buf.length ==> 6 单位是字节 一个汉字3个字节（返回 Buffer 对象所占据的内存长度）

	****返回这个 buffer 的 bytes 数。注意这未必是 buffer 里面内容的大小。length 是 buffer 对象所分配的内存数，
	
	它不会随着这个 buffer 对象内容的改变而改变。

##将 Buffer 转换为 JSON 对象

	var buf=new Buffer('开心');
	buf.toJSON()

	输出：
	{ type: 'Buffer', data: [ 229, 188, 128, 229, 191, 131 ] }


	var buf = new Buffer('test');
	var json = JSON.stringify(buf);//隐式调用了toJSON（）这个函数；
	console.log(json);
	// {"type":"Buffer","data":[116,101,115,116]}

	把json的data数据复制，并创建了一个Buffer对象：

	var copy = JSON.parse(json, function(key, value) {
   	      return value && value.type === 'Buffer'? new Buffer(value.data) : value;
  	});

	console.log(copy);
	// <Buffer 74 65 73 74>

##Buffer对象与数值对象的相互转换

	buf.readUInt8();
	buf.writeUInt8()

##判断一个对象是否为Buffer对象 

	Buffer.isBuffer(obj);返回true or false

##计算字符串真实的字节长度

	 Buffer.byteLength(string, [encoding]);

		string:字符串
		encoding:字符编码

##判断Buffer是否支持这种编码格式
	 
	Buffer.isEncoding('utf8')

##Buffer对象的合并 返回一个新的Buffer对象
        Buffer.concat([buf1,buf2,buf3,...],合并后需要截取的长度)
	var bbb=new Buffer([ 0x9a, 0x84, 0xe4, 0xba, 0x8b]);
	var eee=new Buffer([ 0xe7,0x9a, 0x84, 0xe4, 0xba, 0x8b]);

	var ccc=Buffer.concat([aaa,bbb,eee]).toString()
	var ccc=Buffer.concat([aaa,bbb,eee],9).toString()aaa=new Buffer([0xe5, 0xbc, 0x80, 0xe5, 0xbf, 0x83,0xe7]);
	var bbb=new Buffer([ 0x9a, 0x84, 0xe4, 0xba, 0x8b]);
	var eee=new Buffer([ 0xe7,0x9a, 0x84, 0xe4, 0xba, 0x8b]);

	var ccc=Buffer.concat([aaa,bbb,eee]).toString()
	var ccc=Buffer.concat([aaa,bbb,eee],9).toString()
