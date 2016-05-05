(function(){

  var Service = require('./service'),
      cb = function(req, res, data) {
        console.log('Success: ', data);
        res.json(data);
      };

  // function create(req, res) {
  //   Service.create(req, res, cb);
  // };
  function retrieve(req, res) {
    Service.retrieve(req, res, cb);
  };
  function get(req, res) {
    console.log('controller get');
    Service.get(req, res, function(data){
       console.log('获取用户组员信息成功')  
       res.json(data);
    });
  };
  function getAll(req, res) {
    console.log('controller get');
    Service.getAll(req, res, function(data){

       res.json(data);

    });
  };
  // function update(req, res) {
  //   Service.update(req, res, cb);
  // };
  function remove(req, res) {
    Service.remove(req, res, cb);
  };
  function save(req, res) {
    Service.save(req, res, cb);
  };

  var Controller = {
    save: save,
    retrieve: retrieve,
    get: get,
    getAll:getAll
  }
  module.exports = Controller;
  
})();
