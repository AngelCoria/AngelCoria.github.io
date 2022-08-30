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

                var numeros = [datos.get('numero')];
                var ordenados = [datos.get['numero']];
                var ordenaDes = [datos.get('numero')];
                for (let indice = 1; indice <= datos.get('numero'); indice++){
                    numeros[indice] = Math.trunc(Math.random() * 100);
                    ordenados[indice] = numeros[indice];
                    ordenaDes[indice] = numeros[indice];
                }

            
                var respuesta = document.getElementById('respuesta');



                respuesta.innerHTML = 
                `
                <table class="table" id="tabla">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Número Aleatorios</th>
                                <th scope="col">Número Ordenados Ascendentes</th>
                                <th scope="col">Número Ordenados Descendente</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                `
                var tabla = document.getElementById('tabla');
                
                
//ordena ascendente
                i = 1;
                inter = 0;
                while (i < datos.get('numero')){
                    for(indice = 1; indice < datos.get('numero'); indice++){
                        if (ordenados[indice] > ordenados[indice + 1]){
                            apoyo = ordenados[indice];
                            ordenados[indice] = ordenados[indice + 1];
                            ordenados[indice + 1] = apoyo;
                        }
                        else{
                          inter++;  
                        }
                    }
                    i++;
                    if (inter == (datos.get('numero'))){
                        i = datos.get('numero') + 1;
                     }
                }

    //ordena descendente
    i = 1;
    inter = 0;
    while (i < datos.get('numero')){
        for(indice = 1; indice < datos.get('numero'); indice++){
            if (ordenaDes[indice] < ordenaDes[indice + 1]){
                apoyo = ordenaDes[indice];
                ordenaDes[indice] = ordenaDes[indice + 1];
                ordenaDes[indice + 1] = apoyo;
            }
            else{
              inter++;  
            }
        }
        i++;
        if (inter == (datos.get('numero'))){
            i = datos.get('numero') + 1;
         }
    }


                for (indice = 1; indice <= datos.get('numero'); indice++){
                    
                        var agregarFila = tabla.insertRow(-1);
                        var agregarCelda = agregarFila.insertCell(0);
                        agregarCelda.textContent = indice;
                        var agregarCelda = agregarFila.insertCell(1);
                        agregarCelda.textContent = numeros[indice];
                        var agregarCelda = agregarFila.insertCell(2);
                        agregarCelda.textContent = ordenados[indice];
                        var agregarCelda = agregarFila.insertCell(3);
                        agregarCelda.textContent = ordenaDes[indice];
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