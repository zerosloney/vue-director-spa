define(function (require, exports, module) {

    var router = require('director'),
        home = require('controller/home');

    var routes = {
        '': home.index,
        '!home': home.index,
        '!login': home.login
    };
    return Router(routes);

});
