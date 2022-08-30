

//console.log("Funcionando");
function arregloVacio(){
    swal('Peliculas','La base de datos no tiene información','error');
}


function esVacio(){
  swal('Peliculas','Escribe el nombre de la pelicula en el campo de la izquierda','error');  
}

function imprimir(){
    datos.value = '';
            resp.innerHTML = '';
            respuesta.innerHTML = 
                `
                <table class="table table-striped" id="tabla">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre de la pelicula</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                `
                for (const indice in nomPeli) {
                    var agregarFila = tabla.insertRow(-1);
                    var agregarCelda = agregarFila.insertCell(0);
                    agregarCelda.textContent = parseInt(indice) + 1;
                    var agregarCelda = agregarFila.insertCell(1);
                    agregarCelda.textContent = nomPeli[indice];
                }
}

function esEliminado(nom){
   
    swal('Peliculas',`La pelicula ${nom} fue eliminada`,'success');
}

/************* */
let nomPeli = new Array;
let formulario = document.getElementById('formulario');
let resp = document.getElementById('resp');
let boton1 = document.getElementById('boton1');
let boton2 = document.getElementById('boton2');
let boton3 = document.getElementById('boton3');
let boton4 = document.getElementById('boton4');
let datos = document.getElementById('pelicula');

datos.addEventListener('keypress', function(e){
    if (e.keyCode == 13){
        e.preventDefault();
    }
}, false);

//********   Agrega un elemento al final del arreglo *********** */
boton2.addEventListener('click', function(e){
    e.preventDefault();

    if(datos.value == '')
        esVacio();
    else
        if (datos.value != '' ){
            swal ( `La pelicula ${datos.value} se ha agregado al final de la lista` , { 
                botones : false , 
                timer : 1700 , 
              } ) ;
            nomPeli.push(datos.value);
            imprimir();
        }
})

//********   Agrega un elemento al inicio del arreglo *********** */
boton1.addEventListener('click', function(e){
    e.preventDefault(e);
    
    if(datos.value == '')
        esVacio();
    else
        if (datos.value != '' ){
            swal ( `La pelicula ${datos.value} se ha agregado al inicio de la lista` , { 
                botones : false , 
                timer : 1700 , 
              } ) ;
            nomPeli.unshift(datos.value);
            imprimir();
        }
})

//********   Elimina el primer elemento del arreglo *********** */
boton3.addEventListener('click', function(e){
    e.preventDefault(e);

    let hayElemento = nomPeli.length;
    if (hayElemento != 0){
        let apoyo = nomPeli[0];
        let preg = prompt(`Se elimina la pelicula ${nomPeli[0]}, estas seguro [ s / n ]?`);
        
        if (preg == 's'){
            nomPeli.shift();
            imprimir();
            esEliminado(apoyo);
        } 
    }
    else
        arregloVacio();
     
})

//********   Elimina el último elemento del arreglo *********** */
boton4.addEventListener('click', function(e){
    e.preventDefault(e);

    let hayElemento = nomPeli.length;
    if (hayElemento != 0){
        let apoyo = nomPeli.length;
        let peli = nomPeli[apoyo-1];
        let preg = prompt(`Se elimina la pelicula ${nomPeli[apoyo-1]}, estas seguro [ s / n ]?`);
        

        if (preg == 's'){
            nomPeli.pop();
            imprimir();
            esEliminado(peli);
        } 
    }
    else
        arregloVacio();
     
})



