define(function (require, exports, module) {
    var $ = require('jquery'),
        cache = require('common/cache'),
        Swiped = require('common/swiped'),
        util = {};
    util.el = '#wrap';
    util.getAjax = function (url, data) {
        var token = cache.get(cache.keys.token);
        return $.ajax({
            url: url,
            type: 'get',
            data: data,
            headers: { "X.TOKEN.AUTH": token }
        });
    };
    util.postAjax = function (url, data) {
        return $.ajax({
            url: url,
            type: 'post',
            data: data,
            headers: { "X.TOKEN.AUTH": token }
        });
    };

    util.swiped = function () {
        Swiped.init({
            query: '.js-swiped .item',
            list: true,
            right: 80
        });
    };
    return util;
});