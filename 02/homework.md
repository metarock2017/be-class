## 
+ 用 web worker 写排序, 你最拿手的排序，尽量不要冒泡。

+ 用 promise 实现 ajax 类，要求
    - 传输数据可以用字符串或者对象
    
***
比如你的类名叫 Ajax
调用方法：

1.

```js
Ajax({
  method: 'post',
  url: '/type',
  data: {
    typeName: 'Fred'
  }
})
    .then(res => {...});
```
2.

```js
Ajax.get('/type?name=hhh')
    .then(res => {...})

```
3.

```js
Ajax.post('/type?key=value', {
    typeName: 'Fred'
})
    .then(res => {...})

```

可参考： [axios](https://github.com/mzabriskie/axios)

8号之前交到 metarock2017 的仓库 

