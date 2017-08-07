## Gulp

> 基于nodejs的前端构建工具。易于使用 构建快速 插件高质 易于使用

```
npm install gulp -g
npm install --save-dev gulp
```

- gulpfile.js

```javascript
//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less');
 
//定义一个testLess任务（自定义任务名称）
gulp.task('testLess', function () {
    gulp.src('src/less/index.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('src/css')); //将会在src/css下生成index.css
});
 
gulp.task('default',['testLess', 'elseTask']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务
 
//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径
```

http://www.browsersync.cn/docs/gulp/

http://www.ituring.com.cn/article/197786

http://i5ting.github.io/stuq-gulp/#10603

# SASS

> Sass 是采用 **Ruby **语言编写的一款 CSS 预处理语言，它诞生于2007年，是最大的成熟的 CSS 预处理语言。

#### SASS and SCSS

```scss
$color: #f66;
$bgcolor: #fcc;

//SASS  缩jin
body
	color: $color
	background-color: $bgcolor

//SCSS  我们习惯称的SASS
body {
  color: $color;
  background-color: $bgcolor;
}
```

- 变量


- 嵌套

  ```scss
  //选择器嵌套
  .shadow {
      margin: 0 auto;    
      width: 300px;
      height: 200px;
      img {
          width: 100px;
          height: 100px;       
      }
  }
  //属性嵌套
  p {
    font: {
      family: sans-serif;
      size: 14px;
    }
  }
  ```

- Mixin

  ```scss
  @mixin name {
    //styles
  }

  选择器 {
    include();
  }
  ```


- 选择器继承

  ```scss
  .error {
    border: 1px solid red;
    background-color: #fdd;
  }
  .seriousError {
    @extend .error;
    border-width: 3px;
  }
  ```


## LESS

## BFC:Block formatting contexts

> Formatting context 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。最常见的 Formatting context 有 Block fomatting context (简称**BFC**)和 Inline formatting context (简称**IFC**)

- 触发条件

  - 根元素


  - float 的值不为 none
  - position 的值不为 static 或 relative
  - display 的值为 table-cell、table-caption、inline-block、flex 或 inline-flex
  - overflow 的值不为 visibility

- 布局规则

  - 内部的Box会在垂直方向，一个接一个地放置。
  - Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
  - 每个盒子的左边缘与包含块的左边相接触(对于从左往右的格式化，否则相反)。
  - BFC的区域不会与float box重叠。
  - BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
  - 计算BFC的高度时，浮动元素也参与计算

- 🌰

  - margin叠加
  - 自适应布局
  - 清除内部浮动

## IFC:line-block formatting contexts