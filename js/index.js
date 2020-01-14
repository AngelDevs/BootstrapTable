/* //clase interfaz
class UI {
    //constructor que inicializa el metodo init
    constructor() {
        this.init();
    }

    // al instanciar la clase inir llama los metodos loadtable y eventListeners
    init() {
        this.loadTable();
        this.eventListeners();
    }

    //se obtiene el json de jsonplaceholder
    async fetchUsers() {

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const jsonResponse = await response.json();

        return jsonResponse
    }

    //se crean las tablas
    async loadTable() {

        //se crea la variable users con el json de fetchusers
        let users = await this.fetchUsers();

        //se crea una fila para cada valor del json usando for each
        users.forEach((element) => {
            let tableBody = document.querySelector('#table-body');
            let tableRow = document.createElement('tr');

            tableRow.classList.add('table-row-class');

            tableRow.innerHTML = `
                <th scope="col" class="table-head-id">${element.id}</th>
                <td>${element.name}</td>
                <td>${element.username}</td>
                <td>${element.email}</td>
                <td>${element.website}</td>
                <td class=" font-weight-bold text-danger"><span class="remove-trigger">X</span></td>`;
            tableBody.appendChild(tableRow);
        });
    }


    //añade una fila a la tabla tomando como parametro parameters que son los datos de los inputs
    async addRow(parameters) {
        let users = await this.fetchUsers();

        let tableBody = document.querySelector('#table-body');
        let tableRow = document.createElement('tr');

        tableRow.classList.add('table-row-class');

        tableRow.innerHTML = `
            <th scope="col" class="table-head-id">${document.querySelectorAll('.table-row-class').length + 1}</th>
            <td>${parameters[0]}</td>
            <td>${parameters[1]}</td>
            <td>${parameters[2]}</td>
            <td>${parameters[3]}</td>
            <td class=" font-weight-bold text-danger"><span class="remove-trigger">X</span></td>`;
        tableBody.appendChild(tableRow);

    }

    //se llaman los eventos de los botones enviar y remover
    eventListeners() {
        this.buttomEvent();
        this.removeEvent();
    }

    //evento del boton que llama addrow para añadir nueva fila
    buttomEvent() {
        let buttom = document.querySelector('.buttom-class');

        //se crea el event listener
        buttom.addEventListener('click', (e) => {
            e.preventDefault();

            //se crea un array con los parametros de los inputs
            let parameters = [
                document.querySelector('#name-id').value,
                document.querySelector('#spicies-id').value,
                document.querySelector('#age-id').value,
                document.querySelector('#price-id').value
            ];

            //se crea la condicion de si los campos estan correctos
            let condition = true;

            //iteramos sobre cada parametro para ver si esta correcto
            for (let i = 0; i < parameters.length; i++) {

                if (!parameters[i]) {
                    condition = false;
                    break;
                }
            }

            //si estan correctos se añade la fila
            if (condition) {

                //se limpian los campos
                document.querySelector('#name-id').value = "";
                document.querySelector('#spicies-id').value = "";
                document.querySelector('#age-id').value = "";
                document.querySelector('#price-id').value = "";

                //se verifica si el div de alerta ya existe
                if (!document.querySelector('.div-child-success')) {

                    //se crea el div de alerta
                    let divChild = document.createElement('div');
                    let divParent = document.querySelector('.div-alert');

                    divChild.innerText = 'Campos guardados correctamente.'
                    divChild.classList.add('alert', 'bg-success', 'p-1', 'm-2', 'div-child-success');

                    divParent.appendChild(divChild);

                    //se elimina el div de alerta en 3 segundos
                    setTimeout(() => {
                        divChild.remove();
                    }, 3000);
                }

                this.addRow(parameters);

                //si no se cumple
            } else {
                //verificamos si el div de alerta ya existe
                if (!document.querySelector('.div-child-danger')) {
                    //se crea la alerta
                    let divChild = document.createElement('div');
                    let divParent = document.querySelector('.div-alert');

                    divChild.innerText = 'Debe llenar correctamente todos los campos.'
                    divChild.classList.add('alert', 'bg-danger', 'p-1', 'm-2', 'div-child-danger');

                    divParent.appendChild(divChild);

                    //elimimos el div de alerta en 5 segundos
                    setTimeout(() => {
                        divChild.remove();
                    }, 5000);
                }
            }
        });
    }

    //evento de remover
    removeEvent() {
        let table = document.querySelector('.table');

        //se crea el evento
        table.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('click');

            //si al dar click el elemento target tiene la clase remove-trigger se elimina la fila
            if (e.target.classList.contains('remove-trigger')) {
                console.log('te tengo');
                e.target.parentElement.parentElement.remove();
            }

        })
    }
}

//instancia de la clase
let ui = new UI();
 */
