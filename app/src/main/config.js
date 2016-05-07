'use strict';

module.exports = {
  "local": {
    "config": {
      "apiUrl": "http://api.angular-docker-sample.app/api/local"
    }
  },
  "test": {
    "config": {
      "apiUrl": "http://api.angular-docker-sample.app/api/test",
    }
  },
  "developement": {
    "config": {
      "apiUrl": "http://api.angular-docker-sample.app/api/production",
    }    
  },
  "production": {
    "config": {
      "apiUrl": "http://api.angular-docker-sample.app/api/production"
    }    
  }
};
