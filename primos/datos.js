//console.log("Funcionando");

var formulario = document.getElementById('formulario');
var resp = document.getElementById('resp');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('Me diste un clic')

    var datos = new FormData(formulario);
    console.log(datos)
    console.log(datos.get('numero'))

    if(datos.get('numero') === ''){
        resp.innerHTML = `
        <div class="alert alert-danger" role="alert">
            Escribe un número entero positivo
        </div>`
    }else{
            if (datos.get('numero') > 0 ){

            
                var respuesta = document.getElementById('respuesta');



                respuesta.innerHTML = 
                `
                <table class="table" id="tabla">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Número Primo</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                `
                var tabla = document.getElementById('tabla');
                contarPrimo = 1;
                indice = 2;
                var ind1 = 0;
                while (contarPrimo <= datos.get('numero')){
                    esPrimo = 0;
                    for (let ind = 2; ind <= indice; ind++){
                        if ((indice % ind) == 0) {
                            esPrimo++;
                        }
                        ind1 = ind;
                    }
                    ind1;
                    if (esPrimo == 1){
                        var agregarFila = tabla.insertRow(-1);
                        var agregarCelda = agregarFila.insertCell(0);
                        agregarCelda.textContent = contarPrimo;
                        var agregarCelda = agregarFila.insertCell(1);
                        agregarCelda.textContent = ind1;
                        contarPrimo++;
                    }
                    indice++;
                }
            
            }
            
            else{
                resp.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Un número ${datos.get('numero')} es negativo, no se puede calcular
                </div>`
            }
        }
    
})