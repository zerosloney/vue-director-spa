define(function (require, exports, module) {
    var cache = {};
    cache.set = function (key, value) {
        window.localStorage.setItem(key, value)
    };
    cache.get = function (key) {
        return JSON.parse(window.localStorage.getItem(key));
    };
    cache.remove = function (key) {
        window.localStorage.removeItem(key);
    };
    cache.getStr = function (key) {
        return window.localStorage.getItem(key);
    };
    cache.keys = {
        user: 'user'
    };
    cache.isLogin = function () {
        var user = cache.get(cache.keys.user);
        if (user != null && user != undefined) {
            return true;
        }
        return false;
    };
    return cache;
});