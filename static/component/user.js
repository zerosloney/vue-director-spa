define(function (require, exports, module) {
    var user = {},
        Vue = require('vue'),
        validator = require('validator'),
        cache = require('common/cache'),
        data = require('model/userData');
    Vue.use(validator);

    user.center = Vue.extend({
        props: {
            id: String
        },
        activate: function (done) {
            console.log(this.id)
            //异步加载数据
            done();
        },
        data: function () {
            return {list: data.list};
        },
        template: require('text!view/home.html'),
        events: {
            'page': function (msg) {
                this.page = msg;
                console.log(msg)
            }
        }
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
                        location.href = '#!home/1';
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
