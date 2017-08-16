//直接创建函数

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



//减少全局变量 把方法封装到一个对象中

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
// //缺点 复用性低

// function checkObj(n,i) {
//     this.checkName = function() {
//         if(name == n) {
//             console.log('yes');
//         }else{
//             console.log('fail');
//         }
//     };
//     this.checkId = function(id) {
//         if(id == i) {
//             console.log('yes');
//         }else {
//             console.log('fail');
//         }
//     }
// }

// // //构造函数方法 复用性变高 新创建的类也可以继承

// var b = new checkObj('llp','zbl');
// var c = new 
// b.checkId('llp');


//写在原型链可以优化性能 不用一直去创建
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



// // 让方法更简单
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




// //原型链最常见的应用


//直接在Function上加函数
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

// // 原型链的继承
// function prototypeExtend() {
//     var args = arguments,
//         F = function(){},
//         len = args.length;

//     for(var i = 0 ; i < len ; i++){
//         for(var j in args[i]){
//             F.prototype[j] = args[i][j];
//         }
//     }
//     return new F();
// }

// var a = prototypeExtend({
//     name: 'kjj',
//     age: 20
// },{
//     work: 'student'
// })

// console.log(a);





// function inheritObject(o) {
//     function F(){}; // 过渡
//     F.prototype = o;
//     return new F();
// }

// function inheritPrototype(subClass,superClass) {
//     var  p = inheritObject(superClass.prototype);
//     p.constructor = subClass;
//     subClass.prototype = p;
// }


var LoopImages = function(imgArr,container) {
    this.imgagesArray = imgArr; // 轮播图片数组
    this.container = container; //轮播图片容器
}

LoopImages.prototype = {
    //创建轮播图片
    createImage: function() {
        console.log('LoopImage create');
    },
    //切换下一张图片
    changeImage: function() {
        console.log('LoopImage change');
    }
}
//滑动类轮播
var SlideLoopImage = function(imgArr,container) {
    LoopImages.call(this,imgArr,container);
}
inheritPrototype(SlideLoopImage,LoopImages);

SlideLoopImage.prototype.changeImage = function() {
    console.log('SlideLoopImage change');
}

//渐影切换类轮播
var FadeImage = function(imgArr,container) {
    LoopImages.call(this,imgArr,container);
}
inheritPrototype(FadeImage,LoopImages);
FadeImage.prototype.changeImage = function() {
    console.log('FadeLoopImage change');    
}







