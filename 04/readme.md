## 第四次课件
+ REST API
+ mysql

#### REST API ( (资源) 表现层状态转化 API)
> 说的通俗一点，改变url写法，让它带有状态，即语义化

REST 是浏览器与服务器通信方式的一种设计风格。
它的全称是“REpresentational State Transfer”，中文意为“表现层状态转换”。

+ Resource：资源
+ Representation：表现层
+ State：状态
+ Transfer：转换

***
REST 的核心概念

1. 每一个URI代表一种资源；
2. 客户端和服务器之间，传递这种资源的某种表现层；
3. 客户端通过四个HTTP动词，对服务器端资源进行操作，实现"表现层状态转化"。

***

URL 设计

> URI 是资源的唯一**识别**符。（资源标识）
> URL 是资源的统一**定位**符。（资源位置）
> URN

URI 例子： 

`http://www.taobao.com/store.html#footer`
url为：
`http://www.taobao.com/store.html`

***

HTTP 动词

<table>
<thead>
<tr>
<th>操作</th>
<th>SQL方法</th>
<th>HTTP动词</th>
</tr>
</thead>
<tbody>
<tr>
<td>CREATE</td>
<td>INSERT</td>
<td>POST</td>
</tr>
<tr>
<td>READ</td>
<td>SELECT</td>
<td>GET</td>
</tr>
<tr>
<td>UPDATE</td>
<td>UPDATE</td>
<td>PUT/PATCH</td>
</tr>
<tr>
<td>DELETE</td>
<td>DELETE</td>
<td>DELETE</td>
</tr></tbody></table>

#### mysql

+ select
+ update
+ delete
+ insert

## 作业和下次课一起


