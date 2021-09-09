Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        newToDo: '',
        toDoList: [{
                toDo: 'fare i compiti',
                check: false
            },
            {
                toDo: 'fare la spesa',
                check: false
            },
            {
                toDo: 'fare il bucato',
                check: false
            }
        ]
    },
    methods: {
        addToDo() {
            if (this.newToDo != '') {
                this.toDoList.push({ toDo: this.newToDo, check: false })
                this.newToDo = '';
            }
        },
        removeToDo(index) {
            this.toDoList.splice(index, 1);
        }
    }
});