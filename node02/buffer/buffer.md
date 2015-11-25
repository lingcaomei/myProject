##Buffer  ������

1��JavaScript ��������ֻ���ַ����������ͣ�û�ж������������͡�

2�����ڴ�����TCP�����ļ���ʱ������ʹ�õ����������ݡ������ Node.js�У�������һ�� Buffer �࣬
������������һ��ר�Ŵ�Ŷ��������ݵĻ�������

3���� Node.js �У�Buffer ������ Node �ں�һ�𷢲��ĺ��Ŀ⡣Buffer ��Ϊ Node.js ������һ�ִ洢ԭʼ���ݵķ�����
������ Node.js ������������ݣ�ÿ����Ҫ�� Node.js �д���I/O�������ƶ�������ʱ�����п���ʹ�� Buffer �⡣
ԭʼ���ݴ洢�� Buffer ���ʵ���С�һ�� Buffer ������һ���������飬������Ӧ�� V8 ���ڴ�֮���һ��ԭʼ�ڴ档

##��δ���Buffer ����(���۴���Ĳ�����ʲô �����Ǹ��ݴ���Ĳ������;��������Buffer������ڴ��С��)

#1�����ݳ��ȴ�����

	var buf=new Buffer(size);Buffer ����length����  //���ȵ�λΪ�ֽ� 12���ֽ� utf8���� 1�������ַ�==>���ֽ�

	****ʹ��new Buffer(size)����Ļ���������δ��ʼ����Ŷ���ǿ��ڴ����������ģ�ʲô��������У�
	    ʹ��buf.fill()�������һ�¾ͺ��ˣ�
	
	    buf.fill(0);ʹ��ָ���� value �������� buffer��ȫ����Ϊ0��Ȼ����������д��Ϳ�����

#2���������飨�ֽ����飩������
 
	var buf=new Buffer([1,2,3,4,5,6]);�����һ����Ҫ��ָ����ֵ������������
	var buf3 = new Buffer([0x65,0x66,0x67]);

#3�������ַ���������

	var buf=new Bufffer('���Ǵ�����ַ�����','utf8'); ʹ���ַ�������ʼ��


##utf-8 ��Ĭ�ϵı��뷽ʽ��Buffer֧�ֵı����ʽ

	1��ascii   ASCII�ַ���
	2��utf8    utf8����
	3��base64  ����base64�������ַ���
	4��binary  ����������
	5��hex     ʮ�����Ʊ�ʾ���ַ���

##д�뻺���� write()

buf.write(string[, offset][, length][, encoding]);

    string - д�뻺�������ַ�����

    offset - ��������ʼд�������ֵ��Ĭ��Ϊ 0 ��

    length - д����ֽ�����Ĭ��Ϊ buffer.length

    encoding - ʹ�õı��롣Ĭ��Ϊ 'utf8' ��

****����ʵ��д��Ĵ�С����� buffer �ռ䲻�㣬 ��ֻ��д�벿���ַ�����

##����һ���ַ���ռ�õ��ֽڳ���

   ����ʹ��Buffer.byteLength(string[,encoding])����������������һ���ַ�����ָ�������ʽ��ռ�õ��ֽڳ��ȡ�

   string :Ҫ�����ֽڳ��ȵ��ַ���
   [,encoding]�������ʽ ͨ��utf8

##StringDecoder ��bufferת�����ַ���

    //��toString()���ƣ�����������

    var aa=new Buffer([0xe5, 0xbc, 0x80, 0xe5, 0xbf, 0x83,0xe7]);
    var bb=new Buffer([ 0x9a, 0x84, 0xe4, 0xba, 0x8b]);

    //���������� ��Ϊaa�������һ���ֽڱ�����bb��
    console.log(aa.toString())
    console.log(bb.toString())
    //����*
    //**��
    //��������벻�˵ı�����ȴ��������ٸ���һ���Զ�ʶ�������ַ�
    var StringDecoder=require('string_decoder').StringDecoder;
    var decoder=new StringDecoder();
    console.log(decoder.write(aa))
    console.log(decoder.write(bb))
    //����
    //����

    //aa <Buffer e5 bc 80 e5 bf 83>//����
    //bb <Buffer e7 9a 84 e4 ba 8b>//����

##��Buffer�������ü�

    buf.slice([start[, end]])

   1�����Ը�����ֹλ�ã�����������λ�ö�Ӧ�����ݣ���һ��������������Ƭ������һ���µ�Buffer���󣬷������ǲ�����������ĳ������
   2����Ƭ���ݵ��޸ģ�ʵ�����޸ĵ���ԭʼ�Ļ������������������һ��������Ƭ��Buffer����
   3�������ⲻ�Ǹ��������Ƕ�ԭ����buffer�����ã�����Է��ص�Buffer���󣬽����޸ģ�ԭ����Buffer����Ҳ��ı䡣

	���磺

	var buf11=new Buffer('���ĵ���');

	console.log(buf11)

	//<Buffer e5 bc 80 e5 bf 83 e7 9a 84 e4 ba 8b>

	var buf12=buf11.slice(0,6);

	buf12[0]=15;//����ȥ��õ���buffer�������޸� ���˵�һ��

	console.log(buf11)

	//<Buffer 0f bc 80 e5 bf 83 e7 9a 84 e4 ba 8b>//ԭ����buffer��Ӧ����һ��Ҳ��ı�

##���ƻ������� ��һ��������ָ����������ݿ�������һ�������ָ������ 

	****���ڴ�����ƣ����������ֽڳ��Ȳ��ܳ���������Buffer����ʣ��ĳ����ڴ棬���������
	****�ӷ��õ�λ�ÿ�ʼ����������ݶ��ᱻ�������������ݸ��ǣ�ʣ�����ʾԭ��������

	buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])

��������Buffer.copy(��������Buffer,���ĸ�λ�ÿ�ʼ���ÿ������������ݣ��ӱ�������Buffer�������Ǹ�λ�ÿ�ʼ���ƣ��ӱ�������Buffer�������Ǹ�λ�ý���)

	targetStartָ��Ŀ�껺��������ʼƫ�ƣ���������Buffer��

	sourceStartָ��Դ����������ʼƫ�ƣ�����Ĭ�϶���0�������ĸ�λ�ÿ�ʼ������

	sourceEndָ��Դ�������Ľ���λ�ã�Ĭ����Դ����������������Buffer�����ĳ��ȡ�

	ʵ�ʸ���ʱ����Ƚ�Ŀ�껺�����ĳ��Ⱥʹ���������ĳ��ȣ��ĸ�С���ĸ���������Խ�硣

	sourceEnd-sourceStart>targetBuffer.length-targetStart?targetBuffer.length-targetStart:sourceEnd-sourceStart
	
	����1��
	var buffer1 = new Buffer('1234');
	// ����һ��������
	var buffer2 = new Buffer('ABCEFG',0);
	//ʵ�����ǰ�buffer1�Ͽ�����Ŀ�� buffer2�ϣ������
	buffer1.copy(buffer2,2,0,buffer1.length);

	console.log("buffer2 content: " + buffer2.toString());
	
	����2��
	var src = new Buffer('���ĵ���');
	var target = new Buffer('�������һ�����˼����������أ��Բ���');
	src.copy(target,18,0,12)//��target�������ֿ�ʼ ��3*6=18���ֽ� ��ʼ�ţ���0��λ�ÿ�ʼ����������12���ַ�
	console.log('copy'+target);
	//copy�������һ�����ĵ��µ������أ��Բ���


##Buffer ����������

	var buf=new Buffer('����');
	 buf.length ==> 6 ��λ���ֽ� һ������3���ֽڣ����� Buffer ������ռ�ݵ��ڴ泤�ȣ�

	****������� buffer �� bytes ����ע����δ���� buffer �������ݵĴ�С��length �� buffer ������������ڴ�����
	
	������������� buffer �������ݵĸı���ı䡣

##�� Buffer ת��Ϊ JSON ����

	var buf=new Buffer('����');
	buf.toJSON()

	�����
	{ type: 'Buffer', data: [ 229, 188, 128, 229, 191, 131 ] }


	var buf = new Buffer('test');
	var json = JSON.stringify(buf);//��ʽ������toJSON�������������
	console.log(json);
	// {"type":"Buffer","data":[116,101,115,116]}

	��json��data���ݸ��ƣ���������һ��Buffer����

	var copy = JSON.parse(json, function(key, value) {
   	      return value && value.type === 'Buffer'? new Buffer(value.data) : value;
  	});

	console.log(copy);
	// <Buffer 74 65 73 74>

##Buffer��������ֵ������໥ת��

	buf.readUInt8();
	buf.writeUInt8()

##�ж�һ�������Ƿ�ΪBuffer���� 

	Buffer.isBuffer(obj);����true or false

##�����ַ�����ʵ���ֽڳ���

	 Buffer.byteLength(string, [encoding]);

		string:�ַ���
		encoding:�ַ�����

##�ж�Buffer�Ƿ�֧�����ֱ����ʽ
	 
	Buffer.isEncoding('utf8')

##Buffer����ĺϲ� ����һ���µ�Buffer����
        Buffer.concat([buf1,buf2,buf3,...],�ϲ�����Ҫ��ȡ�ĳ���)
	var bbb=new Buffer([ 0x9a, 0x84, 0xe4, 0xba, 0x8b]);
	var eee=new Buffer([ 0xe7,0x9a, 0x84, 0xe4, 0xba, 0x8b]);

	var ccc=Buffer.concat([aaa,bbb,eee]).toString()
	var ccc=Buffer.concat([aaa,bbb,eee],9).toString()aaa=new Buffer([0xe5, 0xbc, 0x80, 0xe5, 0xbf, 0x83,0xe7]);
	var bbb=new Buffer([ 0x9a, 0x84, 0xe4, 0xba, 0x8b]);
	var eee=new Buffer([ 0xe7,0x9a, 0x84, 0xe4, 0xba, 0x8b]);

	var ccc=Buffer.concat([aaa,bbb,eee]).toString()
	var ccc=Buffer.concat([aaa,bbb,eee],9).toString()
