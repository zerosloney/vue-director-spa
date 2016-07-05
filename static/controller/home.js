define(function (require, exports, module) {
    var controller = {},
        util = require('common/util'),
        cache = require('common/cache');
    var instance = require('controller/app');

    controller.index = function (page) {
        if (!cache.isLogin()) {
            return location.href = '#!login';
        }
        instance.$set('key','xxx');
        instance.$set('currentView', 'home');
        instance.$set('key','xxx');
    };

    controller.login = function () {
        instance.$set('currentView', 'login');
    };
    return controller;
});
