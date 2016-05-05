var expess_router = require('express').Router(),
		teachers = require('./teachers');
		// students = require('./students'),
		// classes = require('./classes'),
		// courses = require('./courses')
var apiArry = ['teachers','students','classes','courses'];

var Routes = {
  router: {}, 
  /**
   * [createRoute 单个创建express routerde方法 ]
   * @param  {[对象 ]} element [包含基本信息的字符串]
   * @param  {[整数]} index   [description]
   * @param  {[数组]} array   [description]
   * @return {[null]}         [返还值无效]
   */
  createRoute: function(element, index, array) {
    // 在foreach中没有循环控制语句 break,contiune
    // return , return false, return ture 相当于 contiune;
    return Routes.router[element.method](element.url, element.callback);
  }, 
  /**
   * [createModuleRoutes 循环创建express api.touters]
   * @param  {[express.Router()]} router [description]
   * @param  {[数组]} routes [构建express Router需要的数组]
   * @return {[express.Router]}        [构建好的 expressRouter]
   */
  createModuleRoutes: function(router, routes) {
    if(router) {
      Routes.router = router;
    }
    if( Routes.router === {}   || 
        Routes.router === null || 
        Routes.router === undefined){

        return false;  
    }
      
    return routes.forEach(Routes.createRoute);
  }
};

function generateApi(apiArry){
	for(var i = 0;i < apiArry.length ;i++){
		Routes.createModuleRoutes(expess_router, apiArry[i]);
	}
}

module.exports = expess_router;
