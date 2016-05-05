var Controller = require('./../controller');

var cbGet = function(req, res) {
        Controller.get(req, res);
    },
    cbGetAll = function(req, res) {
        Controller.getAll(req, res);
    },
    cbRetrieve = function(req, res) {
      Controller.retrieve(req, res);
  },
   
    cbDelete = function(req, res) {
        Controller.remove(req, res);
    },
    cbSave = function(req,res){
        Controller.save(req,res);
    }
  ;
// cbCreate = function(req, res) {
//     Controller.create(req, res);
//   },
   // cbUpdate = function(req, res) {
   //      Controller.update(req, res);
   //  },
// {
//   action: 'create',
//   method: 'post',
//   url: '/',
//   callback: cbCreate
// },
// ,{
    //     action: 'update',
    //     method: 'put',
    //     url: '/edit/:id',
    //     callback: cbSave
    // }
var routes = [{
      action: 'retrieve',
      method: 'get',
      url: '/list',
      callback: cbRetrieve
    },{
        action: 'get',
        method: 'get',
        url: '/view/:id',
        callback: cbGet
    },{
        action: 'get',
        method: 'get',
        url: '/all/:id',
        callback: cbGetAll
    },{
        action: 'remove',
        method: 'delete',
        url: '/remove/:id',
        callback: cbDelete
    }
];
// 根据routers构建 express.Routers()
// 定义中间件
// express.Routers.get('/',function(req,res)){}
//
// express.Routers['get']('/',function(req, res) {
//      Controller.get(req, res);
//  });

module.exports = routes;
