# websocket

* WebSocket协议是基于TCP的一种新的网络协议
* 由HTML5开始

## 先看看我们比较熟悉的HTTP

* 无状态协议，不支持持久连接
* 客户端只有发送了请求服务器才会有回应
* 服务器不能主动发送数据给客户端

缺陷：被动，无法及时获得服务器的动态更新

## 轮询

客户端周期性的向服务器发送Ajax请求

## 长轮询

客户端向服务器发送Ajax请求，服务器接到请求后挂住连接，直到有新消息才返回响应信息并关闭连接，客户端处理完响应信息后再向服务器发送新的请求。

## websocket

#### 原理与建立过程

* 使用**单个TCP连接**双向通信
* 握手
* 客户端和服务器之间形成一条快速通道
* 双方相互直接数据传输

##### 握手过程

* 借助HTTP完成

* 请求

  ```
  GET /chat HTTP/1.1

  Host: server.example.com

  Upgrade: websocket

  Connection: Upgrade

  Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==

  Sec-WebSocket-Protocol: chat, superchat

  Sec-WebSocket-Version: 13

  ```

* 响应

  ```
  HTTP/1.1 101 Switching Protocols
  Upgrade: websocket
  Connection: Upgrade
  Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
  Sec-WebSocket-Protocol: chat
  ```

  ​

* HTTP帮助建立websocket连接后，不再使用，后面使用websocket协议通信，直到连接被关闭

## websocket 属性&&API

* Socket.readyState

  * 0  连接尚未建立

  * 1  表示连接已建立，可以进行通信

  * 2  表示连接正在进行关闭

  * 3 表示连接已经关闭或者连接不能打开

    ​

* Socket.onopen 连接的建立

* Socket.onerror 处理错误的回调

* Socket.onmessage  发送

* Socket.send 发送

* Socket.onclose 关闭

* Socket.url

* 构造函数

  ```
  var ws = new WebSocket('ws://localhost:8080');
  ```

  ​

### 基于node的服务端

* ws模块

* socket.io模块

  ​

### 简单实现

服务端

```io.on(&#39;connection&#39;, function(socket) {
io.on('connection', function(socket) {
    console.log('a user has connected');
});

http.listen(port, function() {
    console.log('listening on ' + port);
});

io.on('connection', function(socket) {
    socket.on('chat message', function(msg) {
        console.log('message: ' + msg);
    });
});

io.on('connection', function(socket) {
    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
    });
});console.log('a user has connected');
```



客户端

```
 var socket = io();

 $('form').submit(function() {
 		socket.emit('chat message', $('#input').val());
        $('#input').val('');
         return false;
 });

 socket.on('chat message', function(msg) {
       $('#messages').append($('<li>').text(msg));
      });
 });
```

