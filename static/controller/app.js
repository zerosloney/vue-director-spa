define(function (require, exports, module) {
    var Vue = require('vue'),
        user = require('component/user'),

        instance = new Vue({
            el: '#wrap',
            data: {
                key:'',
                currentView: 'home'
            },
            components: {
                'login': user.login,
                'home': user.center
            },
            events: {
                'msg': function (msg) {
                    console.log(msg)
                }
            }
        });
    return instance;
});