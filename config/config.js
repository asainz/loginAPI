var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'loginapi'
    },
    port: 3000,
    db: 'mongodb://localhost/loginapi-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'loginapi'
    },
    port: 3000,
    db: 'mongodb://localhost/loginapi-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'loginapi'
    },
    port: 3000,
    db: 'mongodb://localhost/loginapi-production'
  }
};

module.exports = config[env];
