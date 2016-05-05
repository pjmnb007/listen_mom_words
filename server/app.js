var db = require('./config/db'),
    express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');

var app = express();
var api = require('./api');

// view engine setup
// app.set('views', path.join(__dirname, '/modules')); //  设置试视图路径

app.use(express.static(path.join(__dirname, '../web/www')));
app.use('/app',express.static(path.join(__dirname, '../app/www')));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// app.set('view engine', 'html'); // 模版渲染引擎
// 设置静态路径

app.use(logger('dev')); // 日志记录
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// 设置跨域共享，存在一定安全隐患，实际部署需要将 * 切换成具体域名
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use('/app',function(req,res){
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname,'../app/www/index.html'));
});

app.use('/',function(req,res){
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname,'../web/www/index.html'));

});

// 首先处理main 模块下的入口模块中间件
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('main/views/error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('main/views/error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
