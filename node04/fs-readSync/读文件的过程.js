/**
 * Created by Window 7 on 2015/12/1.
 */
/**
 * ��ʵ��ȡһ���ļ��Ĺ���
 * 1�����ļ�  var fd=fs.openSync('./a.txt','r');
 * 2����ȡ�ļ�  ������������������û�еĻ�Ҫ������ fs.readSync(fd,buffer,offet,length,position);
 * 3���ر��ļ�  fs.closeSync(fd);
 *
 * fs.readSync(fd,buffer,offet,length,position);
 * fd �ļ�������   ����
 * buffer ���ļ��ж����ĸ���������
 * offset �򻺴����е�д������ʱ�Ŀ�ʼλ�ã���������λ�ã�
 * length ���ļ��ж�ȡ�����ٸ��ֽ�
 * position ���ļ��ж�ȡ��ʱ��Ŀ�ʼλ�� �ֽڵ�λ�� ���������������Ļ����ʹ��ļ��ĵ�ʱλ�ÿ�ʼ��ȡ(��һ�εĶ�ȡλ��+��һ
 */

var fs=require('fs');
var fd=fs.openSync('./a.txt','r');
var buffer=new Buffer(1024);
buffer.fill(0)
fs.readSync(fd,buffer,0,18,0);//����һ��ֵ
fs.readSync(fd,buffer,18,19);//�ÿ��ĵ�����~

fs.closeSync(fd);
console.log(buffer.toString())