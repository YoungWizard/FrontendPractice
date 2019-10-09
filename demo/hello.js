var vm = new Vue({
    el: "#app",
    data: {
        msg: "hello,Vue!",
        internalId: null,
    },
    methods: {
        act: function () {
            if (this.internalId != null) return;
            this.internalId = setInterval(() => {
                var str = this.msg;
                this.msg = str.substring(1) + str.substring(0, 1);
            }, 500);
        },
        stp: function () {
            clearInterval(this.internalId);
            this.internalId = null;
        }
    }
});