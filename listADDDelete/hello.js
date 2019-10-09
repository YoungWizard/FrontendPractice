var vm = new Vue({
    el: "#app",
    data: {
        id: "",
        name: "",
        keyword: "",
        lists: [{
                id: 1,
                name: "kia",
                ctime: new Date()
            },
            {
                id: 2,
                name: "bwm",
                ctime: new Date()
            },
        ]
    },
    methods: {
        add() {
            var car = {
                id: this.id,
                name: this.name,
                ctime: new Date()
            };
            this.lists.push(car);
            this.id = this.name = "";
        },
        del(id) {
            let index = this.lists.findIndex(item => {
                return item.id === id;
            })
            this.lists.splice(index, 1);
        },
        search(keyword) {
            return this.lists.filter(list => list.name.indexOf(keyword) != -1);
        }



    },
    filters: {
        dateFormat(dateV) {
            let date = new Date(dateV);
            let y=date.getFullYear();
            let m=(date.getMonth()+1).toString().padStart(2,"0");
            let d=date.getDate().toString().padStart(2,"0");
            let hh=date.getHours().toString().padStart(2,"0");
            let mm=date.getMinutes().toString().padStart(2,"0");
            let ss=date.getSeconds().toString().padStart(2,"0");
            return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
        }
    },
    directives: {
        focus: {
          // 指令的定义
          inserted: function (el) {
            el.focus()
          }
        }
      }
});