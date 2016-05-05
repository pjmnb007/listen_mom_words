var mongoose = require('mongoose');
// mongodb 数据库
mongoose.connect('localhost:27017/test_full');

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
