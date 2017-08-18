


// var koa = require('koa');
// var app = koa();

// app.use(function *(){
//   this.body = 'Hello World';
// });

// app.listen(3000);














// const Koa = require('koa');
// const app = new Koa();

// app.use(async ctx => {
// 	//response.end();
// 	//response.render();
// 	//response.json();
//   ctx.body = {
//   	name: 'llp'
//   }
  


// });

// app.listen(3000);
// app.listen(3001);
// console.log('localshot:3000');







// const Koa = require('koa');
// const app = new Koa();
// app.keys = ['im a newer secret', 'i like turtle'];
// // app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');
// app.use(async ctx => {

//   ctx.body = 'Hello World';
//   // console.log(ctx);
//   console.log(ctx.request.url);
//   ctx.cookies.set('name', 'tobi', { signed: true });
//   // console.log(ctx.cookies.get('name'));

// });

// app.listen(3000);









// const Koa = require('koa');
// const app = new Koa();
// app.keys = ['im a newer secret', 'i like turtle'];
// // app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');
// app.use(async ctx => {
// 	// console.log(ctx.query)
// 	console.log(ctx.ip)
//   ctx.body = 'Hello World';
//   // console.log(ctx);
//   // console.log(ctx.request.url);
//   // ctx.cookies.set('name', 'tobi', { signed: true });
//   // console.log(ctx.cookies.get('name'));

// });

// app.listen(3000);
// console.log('localshot:3000');










const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {

  
  	
  	// if (ctx.request.path=="/test/" || ctx.request.path=="/test") {
  	// 	ctx.body={
  	// 	test:"ok"
  	// 	}
  	// } else {
  	// 	ctx.body = 'Hello World';
 		// // console.log(ctx.request.query);
  	// 	}
	// console.log(ctx.request.path)


  	if (ctx.request.path=="/test/" || ctx.request.path=="/test") {
  		ctx.body={
  		test:"ok"
  		}
  	} else if (ctx.request.path=="/index") {
  		ctx.body = 'Hello World';
  		console.log(ctx.request.query);
  	} else {
  		ctx.throw(404,'当前内容未找到')
  	}
  	// console.log(ctx.request.path)
  	// console.log(ctx.request.query);

});

app.listen(3000);
console.log('localshot:3000');


