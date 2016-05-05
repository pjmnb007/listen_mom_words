var mongoose = require('mongoose');

var port = process.env.MONGODB_PORT_27017_TCP_PORT;
var addr = process.env.MONGODB_PORT_27017_TCP_ADDR;
var instance = process.env.MONGODB_INSTANCE_NAME;
var password = process.env.MONGODB_PASSWORD;
var username = process.env.MONGODB_USERNAME;
// 'mongodb://user:pass@localhost:port/database'
mongoose.connect('mongodb://' + username + ':' + password +'@' + addr + ':' + port + '/' + instance);

// mongodb 数据库
//mongoose.connect('localhost:27017/test_full');

var db = mongoose.connection; // 返回当前mongodb数据库连接
db.on('error', function(err){
    console.log('error on connectting mongodb .', err);
});
db.on('open', function () {
  console.log('open mongodb connection')
});
db.on('connected', function(err){
    console.log('connection connected')
});
db.on('disconnected', function(err){
    console.log('connection borken')
});

db.on('error',function (err) {
  console.log('occour error' + err);
});

process.on ('SIGINT', function () {
  db.close (function () {
    console.log ('Mongoose desconectada ');
    process.exit (0);
  });
});

module.exports = db;
