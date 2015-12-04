/**
 * Created by Window 7 on 2015/12/1.
 */
/**
 * �����ļ����߶���д  �ȶ�8K д8K д���ٶ�
 * 1���ȴ��ļ� ��ȡ�ļ�fd
 * 2������һ�������� Buffer,����ÿ�ζ���������
 * 3����ȡ�ļ� һ���ֺ󣨷��뻺������ ���ӻ�������д��Ŀ���ļ���  д����ٶ�...ѭ��
 */
var fs=require('fs');
function copy(sourcePath,targetPath){
    var sourceFd=fs.openSync(sourcePath,'r');
    var targetPath=fs.openSync(targetPath,'w');

    var buf=new Buffer(8*1024);//��С8k

    var readSoFar=0;//���ļ���ʲô�ط���ʼ��
    var writeSoFar=0;//���ļ���ʲô�ط���ʼд
    do{
       var read=fs.readSync(sourceFd,buf,0,buf.length,readSoFar);//����һ�� bytesRead (��ȡ���ֽ���);
        //д����ļ� ���ĸ������������� �ӻ�������0λ�ÿ�ʼ д��������ֽڳ��� ���ļ����ĸ�λ�ÿ�ʼд
        fs.writeSync(targetPath,buf,0,read,writeSoFar);
        readSoFar+=read;
        writeSoFar+=read;
    }while(read==buf.length)//������8K��ʱ�����ѭ�� ����8k˵���Ѿ�������

    //�ر��ļ�
    fs.closeSync(sourceFd);
    fs.closeSync(targetPath);
}

copy('a.txt','c.txt')