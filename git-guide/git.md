
##����
1��ע���Լ����˺�

2�� fork ����(leader) �ĵ���Ŀ

3�� ��¡�Լ�����Ŀ

4�� ������Ŀ�ļ���

5����homework �½����Լ����ֵ��ļ��У������readme.md�ļ���

6��git add -A

7��git commit -m"�ύ����ʷ��"

8��git push origin master �ύ�� github��

9�����뵽�Լ���github�ֿ��ļ��У��Լ����ֵ��ļ��У��޸Ĺ����ļ��У�����һ��pull request

10������(leader) �ϲ�����


##��ʼ��һ���ֿ�
    #### $ git init

##�ύ�ļ�
    �����ߣ�
    һ���ύ��������
    $ git add file1.txt
    $ git add file2.txt file3.txt

    һ���ύ����ʷ�� �����ύ����������һ�����ύ����ʷ����ʵ���Ͼ��ǰ��ݴ��������������ύ����ǰ��֧��
    $ git commit -m "add 3 files."

##�Ƚϰ汾����Ͳ鿴�汾��״̬

Ҫ��ʱ���չ��������ݴ�����״̬��ʹ��$ git status���

���$ git status���������ļ����޸Ĺ���

$ git diff �ɲ鿴���������ݴ����Ĳ��졣
         $ diff --git a/index.html b/index.html //�Ƚ�����index.html
$ git diff HEAD �ɲ鿴��������HEAD����ǰ������֧����ȵĲ���
$ git diff --cached �ɲ鿴�ݴ�������ʷ���Ĳ���.
$ git log �鿴��ʷ��¼
$ git log --oneline �鿴��ʷ��¼����ʾ���ǰ汾�ţ�
���磺
521cb3d add diff
728bab9 add index.js
da19241 ��index.html�������� 1 2

##�汾����

Git����֪����ǰ�汾���ĸ��汾����Git�У���HEAD��ʾ��ǰ�汾��
Ҳ�������µ��ύ521cb3d��ע���ҵ��ύID����Ŀ϶���һ������
��һ���汾����HEAD^������һ���汾����HEAD^^����Ȼ����100���汾д100��^�Ƚ�������������������д��HEAD~100��

$ git reset --hard HEAD^

$ cat index.html (�鿴��ǰ��index.html�ǲ��� �Ͱ汾����ָ���һ��)

git log �鿴��ǰ�İ汾��ʷ

*****����Ӱ汾3���˵��˰汾2�����ֲ�������������˵��汾3 ����ô�죿

        ֻҪ����������д��ڻ�û�б��ص�����Ϳ���˳�������Ұ��Ұ���
        �ҵ��汾3��commit id��521cb3d�����ǾͿ���ָ���ص�δ����ĳ���汾��

        $ git reset --hard 521cb3d         (�汾��û��Ҫдȫ��ǰ7λ�Ϳ�����)
        //HEAD is now at 521cb3d add diff

######  $ git reflog  ������¼���ÿһ������

���ڣ�����˵���ĳ���汾���ص��˵��ԣ��ڶ������Ͼͺ���ˣ���ָ����°汾��ô�죿�Ҳ����°汾�� commit id ��ô�죿
��Git�У������к��ҩ���ԳԵġ�������$ git reset --hard HEAD^���˵�add index.js�汾ʱ������ָ���add diff��
�ͱ����ҵ�add diff�� commit id ��Git�ṩ��һ������git reflog������¼���ÿһ�����

        ���磺
        521cb3d HEAD@{0}: reset: moving to 521cb3d
        728bab9 HEAD@{1}: reset: moving to HEAD^
        521cb3d HEAD@{2}: commit: add diff
        728bab9 HEAD@{3}: commit: add index.js
        da19241 HEAD@{4}: commit (initial): ��index.html�������� 1 2

    *****�ҵ��汾�ţ����ֿ��Իص���Ĺ��İ汾��
        $ git reset --hard 521cb3d
        HEAD is now at 521cb3d add diff

        ����ǰ����git log���Բ鿴�ύ��ʷ���Ա�ȷ��Ҫ���˵��ĸ��汾��

        Ҫ�ط�δ������git reflog�鿴������ʷ���Ա�ȷ��Ҫ�ص�δ�����ĸ��汾��

        git reset��չ
        $ git reset �Cmixed����ΪĬ�Ϸ�ʽ�������κβ�����git reset����ʱ���ַ�ʽ�������˵�ĳ���汾, ������ ���䣬������ʷ�� �� �ݴ���
        $ git reset �Csoft�����˵�ĳ���汾��ֻ��������ʷ������Ϣ�������� �� �ݴ��� ������
        $ git reset �Chard�����׻��˵�ĳ���汾������ ������ ����ʷ�� �� �ݴ��� ��
....................................................................................
######ע��
  1)�����һ���յ��ļ��л�����һ���յ��ļ����ϴ�����ȥ��

  2)���������������Ϣ˵������ǰ���ص�git��û��ע��

    $ git config --global user.email "...."
    $ git config --global user.name "...."

    ����취:
    $ git config --global user.email "�������(��������ǵ�githubע�����䱣��һ��)"
    $ git config --global user.name "�������(�����github�û�������һ��)"


****��һ��fork ����(leader) �Ĵ��룬�����Լ����Լ��޸ĵĶ�push ���Լ��Ĳֿ����ˣ�
    ����Ժ���� ����(leader) ��github���������°�����Ҫ��

$ git remote add teacher https://github.com/zhufengnodejs/201508node.git

$ git pull teacher master

##��֧

Git��������ʹ�÷�֧��

�鿴��֧��$ git branch

������֧��$ git branch <name>

�л���֧��$ git checkout <name>

����+�л���֧��$ git checkout -b <name>

�ϲ�ĳ��֧����ǰ��֧��$ git merge <name>

ɾ����֧��$ git branch -d <name>

....................................................................................

##�ѱ����ļ����͵�Զ�ֿ̲� ��
######��github�½��õĲֿ����������Щ���� �����òֿ�ĵ�ַ��

1���ڱ��ؽ���һ���ļ��� ��project�����������Ŀ��
2��$ git init         //��ʼ���ã��ֿ⣩�ļ���
3��$ git add -A       //������� ���ύ���ݴ�����
4��$ git commit -m "�޸���ʲô ��ע˵��"   //�ύ����ʷ�����ύ����֧��
����Ҫ���������������
5��$ git remote add origin https://github.com/lingcaomei/11.git  //Ҫ���͵�github�� Զ�ֿ̲⣨github�ֿ��ַ���ĵ�ַ
6��$ git push -u origin master  //���͵�github�ֿ��� ����ȫȷ�������˲���ִ�У������޷�����ˣ�
7��$ ����github���û��� ������

..........................................

##ɾ��һ��Զ��github�ֿ�

1���򿪲ֿ� �����һ��Settings  ���
2������ҳ������� Delete this repository ���
3������Ҫɾ���Ĳֿ�����ȷ�ϼ���

.........................................

##��gihub�ϸ���һ����Ŀ�������ļ���

1���򿪱��ط�����Ŀ���ļ��� ���У�
   $ git clone https://github.com/lingcaomei/201508node-1.git //������Ҫ���Ƶ���Ŀ��ַ��github����ĵ�ַ��

.........................................

##ɾ��һ���ļ�/�ļ���

   ���뱾����Ŀ���ļ��� ���У�

   1��$ ls //���Բ鿴���ļ����µ�һ���ļ�Ŀ¼
	
	���磺201508node/  demo.txt  http_model.js  index.html  node01/

   2��$ git rm ��Ҫɾ�����ļ����ļ������� -r -f

..........................................

##�鿴��ǰ��Ŀ�ļ��е�״̬�������޸ĵģ�
  
   $ git status

..........................................

##  ��β���һ����Դ��Ŀ�أ�

�����������ߵ�bootstrap��Ŀ������һ���ǳ�ǿ���CSS��ܣ�

����Է�������github�ϵ���Ŀ��ҳ https://github.com/twbs/bootstrap��

�㡰Fork�������Լ����˺��¿�¡��һ��bootstrap�ֿ⣬Ȼ�󣬴��Լ����˺���clone��

   $ git clone git@github.com:michaelliao/bootstrap.git

..........................................

##���������ݴ���

���������������ڵ������ܿ�����Ŀ¼�������ҵ�learngit�ļ��о���һ����������
�ݴ�����git add���ļ���ӽ�ȥ��ʵ���Ͼ��ǰ��ļ��޸���ӵ��ݴ�����
�ύ����ǰ��֧����git commit�ύ���ģ�ʵ���Ͼ��ǰ��ݴ��������������ύ����ǰ��֧��


�汾�⣨Repository��

��������һ������Ŀ¼.git��������㹤����������Git�İ汾�⡣

Git�İ汾������˺ܶණ������������Ҫ�ľ��ǳ�Ϊstage�����߽�index�����ݴ���������GitΪ�����Զ������ĵ�һ����֧master���Լ�ָ��master��һ��ָ���HEAD��

..........................................

##�����޸ģ�ֻ�ܶ����������е��޸ģ�

	$ git checkout -- readme.txt

����git checkout -- readme.txt��˼���ǣ���readme.txt�ļ��ڹ��������޸�ȫ�����������������������

һ����readme.txt���޸ĺ�û�б��ŵ��ݴ��������ڣ������޸ľͻص��Ͱ汾��һģһ����״̬��

һ����readme.txt�Ѿ���ӵ��ݴ���(git add)���������޸�(��������)�����ڣ������޸ľͻص���ӵ��ݴ������״̬���������Ǵ˴��ڹ��������޸ģ���

��֮������������ļ��ص����һ��git commit��git addʱ��״̬��

...........................................

##ɾ��һ���ļ�

 1�����һ���ļ��Ѿ���ӵ��ݴ�����git add��,�����ύ���˰汾�⣨��֧����git commit -m '�޸�˵��'��
 	$ git add test.txt
 	$ git commit -m "add test.txt"

 2����ʱ��ִ���� ɾ�� ����ļ��Ĳ���
	
	$ rm test.txt
	
    ���ع�������text.txt ����ļ��ͻ���ʧ�����Ǵ�ʱ�������Ͱ汾��Ͳ�һ���ˣ��汾���test.txt�ļ�����

    ****���Ҫ����ɾ�� ���ð汾��͹�����һ�£���ôִ�����²�����

	$ git rm test.txt
	$ git commit -m "remove test.txt"
   
   	�����ͳ���ɾ���ˣ����ɻָ�

   ****���ִ����rm test.txt ,ɾ�����ļ�������ɾ���ˡ����ԴӰ汾���лָ��������������ִ���˳���ɾ���������Ǿ��ǽ��汾���е�Ҳɾ���ˣ����޷��ָ��ˣ���
	
	$ git checkout -- test.txt
	
	����ֻ�ܻ��˵��汾���еİ汾�������ύ�汾������޸ģ��ǽ��޷��ָ�����ʧ�ύ�汾���������޸ģ�

.........................................

##�����github����һ��������վ���򲩿ͣ���http://m.blog.csdn.net/blog/wangyi1988wang/41494281

1�� ע��Git�˺�

    �½�repository���ֿ⣩

2��������վ��

a���ڲֿ�ҳ��������ҵ�Settings �������

b���ڸ�ҳ���������ҵ�GitHub Pages���"Automatic page generator"

c����ת��ҳ��: ���continue to layouts
		 Project name:��վ����

		 Tagline����վ������

		Body����ҳԴ��

		Google Analytics Tracking ID����������ץȡ�ؼ���

		������Щ���Ƕ������Զ���,��Ĭ�ϼ��ɡ�
	
		�����,���"Continue to Layouts" ѡ���Լ��Ĳ�������


d��Ȼ����"Publish page"�ɹ�֮��ص���Ŀҳ����Կ����Զ����ɵ�һЩ�ļ�

e�����������ǾͿ����������������http://itmyline.github.io/blog��Ԥ��һ��

	itmyline:�û���, blog:��Ŀ��

f��clone(��¡)���롢�޸�

    �������̸�Ŀ¼��(����ΪD��)�Ѵ���clone����


    git clone git@github.com:itmyline/blog.git 


g��������������Ҫ�ϴ����ļ����Ƶ���Ŀ¼��

h���ύ���ϴ�

����D\blogĿ¼,�Ҽ�Git Bash ��������

    git branch  

�鿴��ǰ��֧Ϊgh-pages

��������

     git add .  
     git commit -m "blog"  
     git remote add origin https://github.com/lingcaomei/Personal.git 
     git push -u origin gh-pages 

����GitHub�鿴 �����������ļ��������ˡ�
����������ַhttp://lingcaomei.github.io/Personal/ ����Ԥ�����Ǵ����վ��

.....................................

�鿴ȫ���˿�ռ��
netstat -anto

�鿴�ض� ����8080 �˿�ռ��
netstat -anto | findstr "8080"

git push origin master








