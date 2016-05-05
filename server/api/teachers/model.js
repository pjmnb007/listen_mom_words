var _schema = {
      name: String,
      members:[]
    };
var mongoose = require('mongoose'),
		modelName = 'Teachers', 
    collectionName = 'teachers',
   	schema = new mongoose.Schema(_schema);


module.exports = mongoose.model(modelName, schema, collectionName);