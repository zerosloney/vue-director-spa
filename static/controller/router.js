define(function (require, exports, module) {

    var router = require('director'),
        home = require('controller/home');

    var routes = {
        '': home.index,
        '!home/:page': home.index,
        '!login': home.login
    };
    return Router(routes);

});
