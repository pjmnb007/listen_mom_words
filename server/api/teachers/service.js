(function(){
  // 获取 Group 模型
  var Model = require('./model');

  function create(req, res, cb) {
    var dados = req.body,
        _model = new Model(dados);  // new方法 生成Group 实体entity
    console.log('req.body'+dados);     
    _model.save(function (err, data) { // 实体具有操作数据库的能力，执行该方法后保存数据
      if (err){
        console.log('Error: ', err);
        res.json(err);
      
      }else{
        cb(req, res, data);
      }
    });
  };
  
  function retrieve(req, res, cb) {
    var query = {};
    Model.find(query, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        res.json(err);
      
      }else{
        cb(req, res, data);
      }
    });
  };
  function get(req, res, cb) {
    var query = {_id: req.params.id} ;
    Model.findOne(query, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        res.json(err);
      
      }else{
        console.log('获取小组信息成功！');
        cb(req, res, data);
      }
    });   
  };
  function getAll(req, res, cb) {

      var query = {_id: req.params.id} ;
      Model.find(query, function (err, data) {
        if (err){
          console.log('Erro: ', err);
          res.json(err);
        
        }else{
          console.log('获取小组信息成功！');
          cb(req, res, data);
        }
      });   
 
  };
  function update(req, res, cb) {

    var query = {_id: req.params.id} ,
        mod = req.body,
        optional = {
          upsert: false,
          multi: false
        }; 


    Model.update(query, mod, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        res.json(err);
      
      }else{
        cb(req, res, data);
      }
    });

  };
  function remove(req, res, cb) {

    var query = {_id: req.params.id} ;
    Model.remove(query, function(err, data) {
      if (err){
        console.log('Erro: ', err);
        res.json(err);
      
      }else{
        cb(req, res, data);
      }
    });

  };
  function save(req,res,cb){

  };
  var Service = {
    retrieve : retrieve,
    save: save,
    get: get,
    remove: remove,
    getAll : getAll
  }
  module.exports = Service;
})();
