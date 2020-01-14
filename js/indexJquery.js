$(document).ready(() => {
    //URL de jsonPlaceHolder
    let url = 'https://jsonplaceholder.typicode.com/users';

    //metodo Get para objeter el json
    $.get(url, element => {

        //Iteracion sobre los 10 indices del json
        for (let i = 0; i < element.length; i++) {

            //por cada indice se crea una table row dentro del tbody
            $(`
            <tr>
                <th scope="col" class="table-head-id">${element[i].id}</th>
                <td>${element[i].name}</td>
                <td>${element[i].username}</td>
                <td>${element[i].email}</td>
                <td>${element[i].website}</td>
                <td class=" font-weight-bold text-danger"><span class="remove-trigger">X</span></td>
            <tr>
            `).appendTo('tbody#table-body');
        }

        let click = 10;
        //Evento en el boton del formulario - guardar fila
        $('button.buttom-class').click(function (e) {
            e.preventDefault();
            //creamos la condicino que nos dira si todos los campos estan correctos o no
            let condition = true;

            //creamos un array con los valores de los inputs
            let parameters = [
                11,
                $('#name-id').val(),
                $('#spicies-id').val(),
                $('#age-id').val(),
                $('#price-id').val()
            ];

            //iteramos sobre todos los valores del array para ver si alguno esta vacio 

            for (let i = 1; i < parameters.length; i++) {
                if (parameters[i] == "") {
                    condition = false;
                    break;
                }
            }

            //verificamos que la condicion sea verdadera
            if (condition === true) {

                // limpiamos los campos
                $('#name-id').val("");
                $('#spicies-id').val("");
                $('#age-id').val("");
                $('#price-id').val("");

                //verificamos si el mensaje de exito existe
                if ($('.div-child-success').length == 0 && $('.div-child-success').length < 1) {

                    //creamos la alerta
                    $(`<div class="alert bg-success p-1 m-2 div-child-success">Datos guardados correctamente</div>`).appendTo('.div-alert');

                    //despues de 3 segundos elimininamos el mensaje
                    setTimeout(() => {
                        $('.div-child-danger').remove();
                    }, 3000);
                }
                click += 1;
                //creamos la fila nueva en la tabla
                $(`
                <tr>
                    <th scope="col" class="table-head-id">${click}</th>
                    <td>${parameters[1]}</td>
                    <td>${parameters[2]}</td>
                    <td>${parameters[3]}</td>
                    <td>${parameters[4]}</td>
                    <td class=" font-weight-bold text-danger"><span class="remove-trigger">X</span></td>
                <tr>
        `).appendTo('tbody#table-body');

                //en caso de que la condicion sea falsa
            } else {
                //verificamos si el mensaje de exito existe
                if ($('.div-child-danger').length == 0 && $('.div-child-danger').length < 1) {

                    //creamos la alerta
                    $(`<div class="alert bg-danger p-1 m-2 div-child-danger">Llenar los datos correctamente</div>`).appendTo('.div-alert');

                    //despues de 3 segundos elimininamos el mensaje
                    setTimeout(() => {
                        $('.div-child-danger').remove();
                    }, 3000);
                }
            }
        });

        //Evento en elemento x de la tabla - remover fila
        $('tbody#table-body').click(function (e) {
            e.preventDefault();
            if ($(e.target).hasClass('remove-trigger')) {
                $(e.target).parent().parent().remove();
            }
        });
    }, "json");
});

