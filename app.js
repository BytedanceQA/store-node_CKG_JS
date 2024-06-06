const path = require('path');
const express = require('express');
const config = require('config-lite')(__dirname);
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cookieParser = require('cookie-parser');
const history = require('connect-history-api-fallback');
const router = require('./router/index');
var { expressjwt: jwt } = require('express-jwt');

require('./mongodb/db');

// 创建 express 对象
const app = express();

// 针对所有请求
app.all('*', (req, res, next) => {
  const { origin, Origin, referer, Referer } = req.headers;
  const allowOrigin = origin || Origin || referer || Referer || '*';

  // 设置请求头
  res.header('Access-Control-Allow-Origin', allowOrigin);
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Credentials', true); // 可以带cookies
  res.header('X-Powered-By', 'Express');

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// 使用 cookie-parser 中间件，方便操作客户端中的 cookie 值
app.use(cookieParser());

// 使用 express-session 中间件，
app.use(session({
  name: config.session.name,
  secret: config.session.secret,
  resave: true,
  saveUninitialized: false,
  cookie: config.session.cookie,
  store: MongoStore.create({
    mongoUrl: config.url
  })
}));

// 用于解析传递过来的 token
// unless 设置不需要 token 也能访问的 api 接口
app.use(jwt({
  secret: config.secretKey,
  algorithms: ['HS256']
}).unless({
  path: config.apiList
}));

// 页面路由
app.use('/', router);

app.use(history());

// 实现静态资源访问功能
// express.static 的参数为静态资源的存放目录
app.use(express.static(path.join(__dirname, 'statics')));

// 错误处理中间件
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    return res.send({ code: 401, msg: 'accessToken无效' });
  }
  
  res.send({ code: 500, msg: 'Unknown error' });
});

// 监听端口
app.listen(config.port, () => {
  console.log(`应用正在运行：http://localhost:${config.port}`);
});
