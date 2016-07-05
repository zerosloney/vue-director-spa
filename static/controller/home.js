define(function (require, exports, module) {
    var controller = {},
        util = require('common/util'),
        cache = require('common/cache');
    var instance = require('controller/app');

    controller.index = function () {
        if(!cache.isLogin()){
            return location.href='#!login';
        }
        instance.$set('currentView', 'home');
    };

    controller.login = function () {
        instance.$set('currentView', 'login');
    };
    return controller;
});
