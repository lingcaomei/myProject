
var eventEmitter=require('events');//事件模块
var util=require('util');
util.inherits(All,eventEmitter);//All对象 继承EventEmitter与继承他的构造函数

function All(){

}
var All=new All();

function Person(name,response){
	this.name=name;
	this.response=response;
}

var p1=new Person('gogo',function(){
	console.log('我是gogo')
});
console.log(p1.name)
var p2=new Person('sandy',function(){
	console.log('我是sandy')
});
var p3=new Person('sasa',function(){
	console.log('我是sasa')
});

All.addListener('who',p2.response)//添加监听
All.addListener('who',p3.response)//添加监听
All.on('who',p1.response);//为指定事件注册一个监听器

All.removeListener('who',p3.response)//移除指定事件的监听
All.emit('who');//发射事件（触发一个事件）

All.addListener('ask',function(){     //添加事件监听
    console.log('who are you?')
})
All.addListener('ask1',function(){     //添加事件监听
    console.log('where do you come from?')
})
All.removeListener('ask1',function(){    //移除事件监听
    console.log('where do you come from?')
})
All.emit('ask');//发射事件（触发一个事件）

