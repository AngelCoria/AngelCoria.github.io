//console.log("Funcionando");

let nombres = new Array;
var formulario = document.getElementById('formulario');
var resp = document.getElementById('resp');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('Me diste un clic');

    var datos = new FormData(formulario);
    console.log(datos.get('nombre'));

    if(datos.get('nombre') === ''){
        resp.innerHTML = `
        <div class="alert alert-danger" role="alert">
            Escribe el nombre de una persona
        </div>`
    }
    else{

        if (datos.get('nombre') == 'fin' ){
            resp.innerHTML = `
        <div class="alert alert-danger" role="alert">
            He terminado
        </div>`
        }else{
            if (datos.get('nombre') != '' ){
                resp.innerHTML ="";
                var respuesta = document.getElementById('respuesta');

                respuesta.innerHTML = 
                `
                <table class="table table-striped" id="tabla">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                `
                var tabla = document.getElementById('tabla');
                
                nombres.push(datos.get('nombre'));
                document.getElementById("nombre").value = "";

                for (const indice in nombres) {
                    var agregarFila = tabla.insertRow(-1);
                    var agregarCelda = agregarFila.insertCell(0);
                    agregarCelda.textContent = parseInt(indice) + 1;
                    var agregarCelda = agregarFila.insertCell(1);
                    agregarCelda.textContent = nombres[indice];
                }
            }
        }



            
            /*
            else{


                resp.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    El número ${datos.get('numero')} es negativo, no se puede calcular
                </div>`
            }*/
        }
    
})

