## 静态作用域     

##### 函数的作用域基于函数定义时的环境，而不是触发时的环境

~~~
// var x = "global scope";
// function check(){
//     var x = "local scope";
//     function f(){
//         return x;
//     }
//     return f;
// }
// console.log(check()());

var x = "global scope";
function check(){
    var x = "local scope";
    function f(){
        return x;
    }
    return f();
}
console.log(check());
~~~

## 执行上下文栈ECS

##### 代码按顺序执行，中间可能穿插变量提升和函数提升

#### 变量提升

~~~
var foo = function () {
    console.log('foo1');
}

foo(); 

var foo = function () {
    console.log('foo2');
}

foo(); 
~~~
~~~
//执行顺序    变量提升
var foo;
var foo;

foo = function () {
    console.log("foo1");
}

foo();

foo = function () {
    console.log("foo2");
}

foo();
~~~
#### 函数提升

~~~
function foo() {
    console.log('foo1');
}

foo();

function foo() {
    console.log('foo2');
}

foo();
~~~
~~~
//执行顺序     函数提升
function foo() {
    console.log("foo1");
}

function foo() {
    console.log("foo2");
}

foo();

foo();
~~~

#### ECS栈底是全局执行上下文

##### 函数执行  解析时创建一个执行上下文（即当前环境）推入栈ECS，函数执行结束时弹出

函数:

+ 定义
+ 执行期
  + 解析
  + 执行
  + 结束

执行上下文

+ 变量对象
+ 作用域链
+ this

~~~
ECS.push(check1);
ECS.push(f);
ECS.pop(f);
ECS.pop(check1);
~~~

~~~
ECS.push(check2);
ECS.pop(check2);
ECS.push(f);
ECS.pop(f);
~~~

### 变量对象

1. ### 全局上下文

   全局上下文中的变量对象初始化是全局对象Window && Global

   alert() => window.alert()

   Math  =>  window.Math

   包括所有自己定义的函数，变量，均作为全局对象的属性存在


2. ### 函数上下文

   + 形参集合 arguments
   + 函数内变量声明
   + 函数内的函数声明

3. ### 执行上下文的变量对象

   + 大多数情况是以函数上下文的形式入栈

     ~~~
     var m = 1;
     function add(x, y) {
         var result = 0;
         function count() {};
         result = x + y;
         return result;
     }

     add(1, 2);
     ~~~

     ~~~
     //定义时   只有arguments对象
     VO = {
         arguments: {
             0: undefined,
             1: undefined,
             length: 2
         }
     }

     //执行期  解析时   初始化内部变量，函数声明
     AO = {
         arguments: {
             0: undefined,
             1: undefined,
             length: 2
         },
         count: function count() {}
         result: undefined  
     }
     //执行  
     AO = {
         arguments: {
             0: 1,
             1: 2,
             length: 2
         },
         count: function count() {}
         result: 3
     }
     ~~~





### 作用域链

##### 优先从当前执行上下文查找变量对象，如果没有，向上查找（函数嵌套），一直到全局上下文的变量对象，这一连串变量对象集合为作用域链      ？？？

~~~
function a() {
    function b() {
        function c() {
          
        }
    }
}
a.scope = [a.AO, GLOBAL]
b.scope = [b.AO, a.VO, GLOBAL]
c.scope = [c.AO, b.VO, a.VO, GLOBAL]
~~~

### 执行上下文

```
var x = "global scope";
function check(){
    var x = "local scope";
    function f(){
        return x;
    }
    return f();
}
check();
```

~~~
//全局上下文globalContext
globalContext = {
    VO: {
        x: "global scope",
        checkscope: function checkscope() {},
        window: window // global 
    },
    scope: [GLOBAL],
    this: GLOBAL
}

ECS = [globalContext];
~~~

~~~
//函数创建
checkContext = {
    VO: {
        arguments: {
           length: 0
        }
    },
    scope: [GLOBAL],
    this: undefined
}
fContext = {
    VO: {
        arguments: {
            length: 0
        }
    },
    scope: [checkContext.VO, GLOBAL],
    this: undefined
}
ECS = [globalContext];
~~~

~~~
//check()执行
//解析期
checkContext = {
    AO: {
      arguments: {
        length: 0
      },
      x: undefined,
      f: function f() {}
    },
    scope: [checkContext.AO, GLOBAL],
    this: undefined
}
ECS = [checkContext, globalContext];
fContext = {
    AO: {
        arguments: {
            length: 0
        }
    },
    scope: [fContext.AO, checkContext.VO, GLOBAL],
    this: undefined
}
ECS = [fContext, checkContext, globalContex];

//执行
checkContext = {
    AO: {
      arguments: {
        length: 0
      },
      x: "local scope",
      f: function f() {}
    },
    scope: [checkContext.AO, GLOBAL],
    this: undefined
}
fContext = {
    AO: {
        arguments: {
            length: 0
        }
    },
    scope: [fContext.AO, checkContext.VO, GLOBAL],
    this: undefined
}
fContext.AO 没有 x, 向上找
checkContext.VO.x = "local scope"   √
ECS = [checkContext, globalContext]  "local scope"
ECS = [globalContext] "local scope"
~~~

### this

##### Reference <--- ref <---- MemberExpression <----this ?

```
function a() {
    console.log(this);
}
a();
```

```
//伪代码
Reference = {
    base: undefined, an Object, a Boolean, a String, a Number, or an environment record,
    name: "name",
    strict: false,
}
GetValue = function (Reference) {
    return Reference.base;
}
IsPropertyReference = function (Reference) {
    return Reference.base === "object";
}
```

##### MemberExpression

+ 原始表达式  true false  null  undefined ...    x
+ 初始化表达式  var x = 1;      x        
+ 函数定义表达式  function a() {}      x
+ 属性访问表达式  a.b       √    baseReference
+ 调用表达式 Math.max(1, 2)     ?   func
+ 对象创建表达式   new Obejct()  构造函数      √  constructor

##### this的流程

```
//伪代码
ref = MemberExpression.result;
if (ref typeof Reference) {
    if（isPropertyReference(ref) {
        return GetValue(ref);
    } else {
        return undefined;
    }
} else {
    return undefined;
}
```

```
var value = 1;

var foo = {
  value: 2,
  bar: function () {
    return this.value;
  }
}

console.log(foo.bar()); 
console.log((foo.bar)());
console.log((foo.bar = foo.bar)());
console.log((false || foo.bar)());
console.log((foo.bar, foo.bar)());
```

