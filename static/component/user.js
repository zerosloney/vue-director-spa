define(function (require, exports, module) {
    var user = {},
        Vue = require('vue'),
        cache = require('common/cache'),
        data = require('model/userData');

    user.center = Vue.extend({
        data: function () {
            return {nickname: '111', mobile: '', orders: 0, coupons: 0};
        },
        template: require('text!view/home.html')
    });

    user.login = Vue.extend({
        data: function () {
            return {phone: '', code: '', show: false, toast: false};
        },
        template: require('text!view/login.html'),
        methods: {
            login: function () {
                if (data.phone == this.phone && data.code == this.code) {
                   this.toast = true;
                    setTimeout(function () {
                        this.toast = false;
                        cache.set(cache.keys.user, JSON.stringify(data));
                        location.href = '#!home';
                    }, 2000);
                } else {
                    this.show = true;
                }
            },
            closeDialog: function () {
                this.show = false;
            }
        }

    });
    return user;
});
