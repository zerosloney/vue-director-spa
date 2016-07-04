require.config({
    baseUrl: 'static/',
    shim: {
        underscore: {
            exports: '_'
        }
    },
    paths: {
        jquery: 'vendor/jquery-min',
        text: 'vendor/text-min',
        underscore: 'vendor/underscore-min',
        vue: 'vendor/vue-min',
        director: 'vendor/director-min'
    },
    urlArgs: "bust=" + (new Date()).getTime()
});


require([
    'controller/router'
], function (router) {
    router.init();
    if (location.href.indexOf('#!') != -1) {
        var arr = location.href.split('#!');
        if (arr[1] == '') {
            location.href = '#!home';
        }
    } else {
        location.href = '#!home';
    }
});