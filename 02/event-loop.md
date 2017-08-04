## 事件循环

#### 上节课回顾

```
var scope = "global scope";
function check(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}

check()();
```

##### xhr     worker   Promise  setTimeout   ？

##### 进程 线程  队列 堆栈

### 网页的几个线程

+ UI渲染
+ JS执行
+ I/O
+ http
+ 定时器


### JavaScript主线程

+ ECS栈
+ 消息队列
  + macro-task宏队列
    + set家族
    + xhr
    + I/O
  + micro-task微队列
    + promise
    + process.nextTick

```
setTimeout(function() {
    console.log('timeout1');
})

new Promise(function(resolve) {
    console.log('promise1');
    resolve();
    console.log('promise2');
}).then(function() {
    console.log('then1');
})

console.log('global1');
```

```
console.log('golb1');

setTimeout(function() {
    console.log('timeout1');
    process.nextTick(function() {
        console.log('timeout1_nextTick');
    })
    new Promise(function(resolve) {
        console.log('timeout1_promise');
        resolve();
    }).then(function() {
        console.log('timeout1_then')
    })
})

setImmediate(function() {
    console.log('immediate1');
    process.nextTick(function() {
        console.log('immediate1_nextTick');
    })
    new Promise(function(resolve) {
        console.log('immediate1_promise');
        resolve();
    }).then(function() {
        console.log('immediate1_then')
    })
})

process.nextTick(function() {
    console.log('glob1_nextTick');
})
new Promise(function(resolve) {
    console.log('glob1_promise');
    resolve();
}).then(function() {
    console.log('glob1_then')
})
```

