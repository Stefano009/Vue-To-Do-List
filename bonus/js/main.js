// Descrizione:
// Rifare l'esercizio della to do list come fatto assieme in classe:
// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
// BONUS:
// modificare la struttura dell'array dei todos. Da array di stringhe diventa array di oggetti:
// todos: [{
// 	title: 'Fare i compiti',
// 	done: true
// },
// {
// 	title: 'Fare la spesa',
// 	done: false
// }]
// Con la proprietà done colorare in verde gli <li> di todos  che sono stati svolti, in rosso gli <li> con todos non ancora svolti.
// Al click su un <li> potremo infine modificare la proprietà done, portandola a false se era precedentemente a true e viceversa.
// Buon lavoro :faccia_leggermente_sorridente:
Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        newToDo: '',
        toDoList: [{
                toDo: 'fare i compiti',
                check: true
            },
            {
                toDo: 'fare la spesa',
                check: false
            },
            {
                toDo: 'fare il bucato',
                check: false
            }
        ],
        backgrounds: {
            green: 'checked-list',
            red: 'unchecked-list'
        }
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
        },
        checkButton(index) {
            this.toDoList[index].check = !this.toDoList[index].check
        }
    }
});