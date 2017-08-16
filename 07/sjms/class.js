

// function checkName(name) {
//     if(name == 'zbl') {
//         console.log('yes');
//     }else{
//         console.log('fail');
//     }
// }
// function checkId(id) {
//     if(id == 'idsbllp') {
//         console.log('yes');
//     }else {
//         console.log('fail');
//     }
// }

// checkName('psx');
// checkId('idsbllp');




// var checkObj = {
//     checkName: function(name) {
//         if(name == 'zbl') {
//             console.log('yes');
//         }else{
//             console.log('fail');
//         }
//     },
//     checkId: function(id) {
//         if(id == 'idsbllp') {
//             console.log('yes');
//         }else {
//             console.log('fail');
//         }
//     }
// }

// checkObj.checkName('zbl');
// checkObj.checkId('haha');


// function checkObj() {

//     this.checkName = function(name) {
//         if(name == 'zbl') {
//             console.log('yes');
//         }else{
//             console.log('fail');
//         }
//     };
//     this.checkId = function(id) {
//         if(id == 'idsbllp') {
//             console.log('yes');
//         }else {
//             console.log('fail');
//         }
//     }

// }

// var b = new checkObj();
// b.checkId('zbl');


// function checkObj() {}
// checkObj.prototype = {
//     checkName: function(name) {
//         if(name == 'zbl') {
//             console.log('yes');
//         }else{
//             console.log('fail');
//         }
//     },
//     checkId: function(id) {
//         if(id == 'idsbllp') {
//             console.log('yes');
//         }else {
//             console.log('fail');
//         }
//     }
// }
// var a = new checkObj();
// console.log(a);
// a.checkName('zbl');

// var checkObj = {

//     checkId:function(id) {
//         if(id == 'idsbllp') {
//             console.log('yes');
//         }else {
//             console.log('fail');
//         }
//         return this;
//     },
//     checkName:function(name) {
//         if(name == 'zbl') {
//             console.log('yes');
//         }else{
//             console.log('fail');
//         }
//         return this;
//     }

// }


// checkObj.checkName('zbl').checkId('llp');



// var checkObj = function() {}
// checkObj.prototype = {
//     checkId:function(id) {
//         if(id == 'idsbllp') {
//             console.log('yes');
//         }else {
//             console.log('fail');
//         }
//         return this;
//     },
//     checkName:function(name) {
//         if(name == 'zbl') {
//             console.log('yes');
//         }else{
//             console.log('fail');
//         }
//         return this;
//     }
// }

// var a = new checkObj();

// a.checkName('zbl').checkId('zbl');

// Function.prototype.checkId = function(id) {
//     if(id == 'idsbllp') {
//         console.log('yes');
//     }else {
//         console.log('fail');
//     }
//     return this;
// }

// var ck = function() {};
// ck.checkId('idsbllp');

// Function.prototype.addMethod = function(method,fn) {
//     this[method] = fn;
//     return this;
// }

// var checkObj = function() {};
// checkObj.addMethod('checkId',function(id) {
//     if(id == 'idsbllp') {
//         console.log('yes');
//     }else {
//         console.log('fail');
//     }
//     return this;
// }).addMethod('checkName',function(name) {
//     if(name == 'zbl') {
//         console.log('yes');
//     }else{
//         console.log('fail');
//     }
// })

// checkObj.checkId('idsbllp').checkName('zbl');






// 1.工厂模式


// var Basktball = function() {
//     this.intro = 'kobe';
// }

// Basktball.prototype = {
//     getMember: function() {
//         console.log('4');
//     },
//     getIntro: function() {
//         console.log(this.intro);
//     }
// }

// var Football = function() {
//     this.intro = 'C罗';
// }
// Football.prototype = {
//     getMember: function() {
//         console.log('12');
//     },
//     getIntro: function() {
//         console.log(this.intro);
//     }
// }

// function Factory(type) {
//     switch(type){
//         case 'Basketball':
//             return new Basktball();
//         case 'Football' :
//             return new Football();
//     }
// }



// var Java = function(content) {
//     this.content = content;
//     (function(content){
//         var div = document.createElement('div');
//         div.innerHTML = content;
//         div.style.color = 'green',
//         document.getElementById('container').appendChild(div);
//     })(content)
// }

// var Php = function(content) {
//     this.content = content;
//     (function(content){
//         var div = document.createElement('div');
//         div.innerHTML = content;
//         div.style.color = 'yellow',
//         document.getElementById('container').appendChild(div);
//     })(content)
// }

// function JobFactory(type,content) {
//     switch(type) {
//         case 'java': 
//             return new Java(content);
//         case 'php' : 
//             return new Php(content);
//     }
// }



//抽象工厂模式
// function People(b) {
//     var x = new People[b];
//     console.log(x.name);
//     x.getName();
// }
// People.a = function() {
//     this.name = 'llp';
// }
// People.a.prototype = {
//     getName: function() {
//         console.log('idsbllp');
//     }
// }
// People('a');

// var inheritFactory = function(subType,superType) {
//     if(typeof inheritFactory[supertype] === 'function') {
//         function F(){};
//         F.prototype = new inheritFactory[supertype];
//         subType.constructor = subType;
//         subType = new F();
//     }else{
//         return 'please创建该类';
//     }
// }

// inheritFactory.Car= function () {
//     this.type = 'car';
// }
// inheritFactory.Car.prototype = {
//     getPrice : function(){
//         throw  new Error('未创建该抽象类');
//     },
//     getSpeed : function () {
//         throw new Error('未创建该抽象类');
//     }
// }

// var BMW = function (price, speed) {
//     this.price = price;
//     this.speed = speed;
// }
// inheritFactory(BMW,'Car');
// BMW.prototype.getPrice = function () {
//     return this.price;
// }
// BMW.prototype.getSpeed = function () {
//     return this.speed;
// }
// var bmw = new BMW(1000,100);
// console.info(bmw.getSpeed());
// console.info(bmw.getPrice());

// BMW.prototype.getType = function () {
//     return this.type;
// }
// console.log(bmw.getType());



// var Car = function(param) {
//     this.speed = param.speed;
//     this.price = param.price;
// }

// Car.prototype = {
//     getSpeed: function() {
//         return this.speed;
//     },
//     getPrice: function() {
//         return this.price;
//     }
// }

// var brands = function(feature) {
//     var that = this;
//     (function(special,that) {
//         switch(feature) {
//             case 'quick':
//                 that.brands = 'bwm';
//             case 'expensive':
//                 that.brands = '兰博基尼';
//         }
//     })(work,that);
// }

// Car.prototype.changeCar = function(brands) {
//     this.brands = brands;
// }

// var Person = function(feature,spd,prc) {
//     var _person = new Car({speed:spd,price:prc});
//     _person.brands = new brands(feature);
//     return _person;
// }

// var llp = Person('expensive',200,300);
// console.log(llp.brands);
// console.log(llp.speed);








//单例模式

// function g(id) {
//     return document.getElementById(id);
// }

// function css(id,key,value) {
//     g(id).style[key] = value;
// }

// function on(id,type,fn){
//     g(id).addEventListener(type,fn);
// }

// 命名空间
 
// var psx = {
//     g: function(id) {
//         return document.getElementById(id);        
//     },
//     css: function(id,key,value){
//         this.g(id).style[key] = value;   
//     }
// }

// 模块化  明确每一个模块的功能

// var A = {
//     Ajax:{
//         get:function(){},
//         post:function(){}
//     },
//     Tool:{
//         tool1:function(){},
//         tool2:function(){}
//     }
// }



// 原型继承

