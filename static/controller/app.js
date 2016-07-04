﻿define(function (require, exports, module) {
    var Vue = require('vue'),
        user = require('component/user'),

    instance = new Vue({
        el: '#wrap',
        data: {
            key: '',
            currentView: 'home'
        },

        components: {
            'home': user.center,
            'login': user.login
        },
        events: {
            'msg': function (msg) {
                console.log(msg)
            }
        }
    });
    return instance;
});