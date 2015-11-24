1.注册自己的账号
2. fork老师的的项目
3. 克隆自己的项目
4. 进入项目文件夹
5.在homework 下建立自己名字的文件夹，并添加readme.md文件。
6.git add -A 
7.git commit -m"提交到历史区"
8.git push origin master 提交到 github上
9.进入到自己的github仓库文件夹，自己名字的文件夹（修改过的文件夹）发起一个pull request
10.老师合并代码



  1)如果是一个空的文件夹或者是一个空的文件是上传不上去的
  2)如果出现这两个信息说明，当前本地的git还没有注册
    git config --global user.email "...."
    git config --global user.name "...."
    解决办法:
    $ git config --global user.email "你的邮箱(建议和你们的github注册邮箱保持一致)"
    $ git config --global user.name "你的名字(建议和github用户名保持一致)"


****从老师的github上面拉代码：

git remote add teacher https://github.com/zhufengnodejs/201508node.git
git pull teacher master


git push origin master

https://github.com/zhufengnodejs/201508node/pull/1



第一次fork老师的代码，并且自己把自己修改的都push 到自己的仓库里了
如果以后想拉去老师最新的代码，就要

git remote add teacher https://github.com/zhufengnodejs/201508node.git

git pull teacher master

..........................................

##把本地文件推送到远程仓库 ：（github新建好的仓库上面会有这些步骤 包括该仓库的地址）

1、在本地建立一个文件夹 ：project（放置你的项目）
2、git init         //初始化该（仓库）文件夹
3、git add -A       //添加所有 （提交到暂存区）
4、git commit -m "修改了什么 备注说明"   //提交到历史区（提交到分支）
（主要是下面的两步：）
5、git remote add origin https://github.com/lingcaomei/11.git  //要推送到github的 远程仓库（github仓库地址）的地址 
6、git push -u origin master  //推送到github仓库上 （完全确定无误了才能执行，否则无法挽回了）
7、输入github的用户名 和密码 

..........................................

##删除一个远程github仓库

1、打开仓库 左边有一个Settings  点击
2、进入页面最后有 Delete this repository 点击
3、输入要删除的仓库名字确认即可

.........................................

##从gihub上复制一个项目到本地文件夹

1、打开本地放置项目的文件夹 运行：
   git clone https://github.com/lingcaomei/201508node-1.git //后面是要复制的项目地址（github上面的地址）

.........................................

##删除一个文件/文件夹

   进入本地项目的文件夹 运行：

   1、ls //可以查看该文件夹下的一级文件目录
	
	例如：201508node/  demo.txt  http_model.js  index.html  node01/

   2、git rm 需要删除的文件或文件夹名字 -r -f  

..........................................

##查看当前项目文件夹的状态（有无修改的）
  
   git status

..........................................

##  如何参与一个开源项目呢？

比如人气极高的bootstrap项目，这是一个非常强大的CSS框架，

你可以访问它的github上的项目主页 https://github.com/twbs/bootstrap，

点“Fork”就在自己的账号下克隆了一个bootstrap仓库，然后，从自己的账号下clone：

   git clone git@github.com:michaelliao/bootstrap.git

..........................................

##工作区和暂存区

工作区：就是你在电脑里能看到的目录，比如我的learngit文件夹就是一个工作区；
暂存区：git add把文件添加进去，实际上就是把文件修改添加到暂存区；
提交到当前分支：用git commit提交更改，实际上就是把暂存区的所有内容提交到当前分支。


版本库（Repository）

工作区有一个隐藏目录.git，这个不算工作区，而是Git的版本库。

Git的版本库里存了很多东西，其中最重要的就是称为stage（或者叫index）的暂存区，还有Git为我们自动创建的第一个分支master，以及指向master的一个指针叫HEAD。

..........................................

##撤销修改（只能丢弃工作区中的修改）

	git checkout -- readme.txt

命令git checkout -- readme.txt意思就是，把readme.txt文件在工作区的修改全部撤销，这里有两种情况：

一种是readme.txt自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；

一种是readme.txt已经添加到暂存区(git add)后，又作了修改(工作区中)，现在，撤销修改就回到添加到暂存区后的状态（撤销的是此次在工作区的修改）。

总之，就是让这个文件回到最近一次git commit或git add时的状态。

...........................................

##删除一个文件

 1、如果一个文件已经添加到暂存区（git add）,并且提交到了版本库（分支）（git commit -m '修改说明'）
 	git add test.txt
 	git commit -m "add test.txt"

 2、此时你执行了 删除 这个文件的操作
	
	rm test.txt
	
    本地工作区的text.txt 这个文件就会消失，但是此时工作区和版本库就不一致了，版本库的test.txt文件还在

    ****如果要彻底删除 ，让版本库和工作区一致，那么执行以下操作：

	git rm test.txt
	git commit -m "remove test.txt"
   
   	这样就彻底删除了，不可恢复

   ****如果执行了rm test.txt ,删除了文件，发现删错了。可以从版本库中恢复过来（但是如果执行了彻底删除操作，那就是将版本库中的也删除了，将无法恢复了）：
	
	git checkout -- test.txt
	
	但是只能回退到版本库中的版本，如若提交版本库后还有修改，那将无法恢复（丢失提交版本库后的所有修改）

.........................................

##如何在github上面搭建一个个人网站（或博客）：http://m.blog.csdn.net/blog/wangyi1988wang/41494281

1、 注册Git账号

    新建repository（仓库）

2、设置网站：

a、在仓库页面中左边找到Settings 点击进入

b、在该页面中我们找到GitHub Pages点击"Automatic page generator"

c、跳转的页面: 点击continue to layouts
		 Project name:网站标题

		 Tagline：网站副标题

		Body：网页源码

		Google Analytics Tracking ID：搜索引擎抓取关键字

		以上这些我们都可以自定义,暂默认即可。
	
		填完后,点击"Continue to Layouts" 选择自己的博客主题


d、然后点击"Publish page"成功之后回到项目页面可以看到自动生成的一些文件

e、接下来我们就可以在浏览器中输入http://itmyline.github.io/blog来预览一下

	itmyline:用户名, blog:项目名

f、clone(克隆)代码、修改

    在任意盘根目录下(本例为D盘)把代码clone下来


    git clone git@github.com:itmyline/blog.git 


g、接下来把我们要上传的文件复制到此目录下

h、提交、上传

进入D\blog目录,右键Git Bash 打开命令行

    git branch  

查看当前分支为gh-pages

接下来：

     git add .  
     git commit -m "blog"  
     git remote add origin https://github.com/lingcaomei/Personal.git 
     git push -u origin gh-pages 

进入GitHub查看 我们新增的文件都出来了。
浏览器输入地址http://lingcaomei.github.io/Personal/ 即可预览我们搭建的网站。

.....................................

查看全部端口占用
netstat -anto

查看特定 例如8080 端口占用
netstat -anto | findstr "8080"

git push origin master



老师的github地址:https://github.com/zhufengnodejs/201508node
珠峰的github地址:https://github.com/zhufengnodejs




