//console.log("Funcionando");

/************   función scrabble   **********/
function scrable(cadena){
    palabra = new Array;
    palabra = cadena.split("");
//document.write(palabra + "<br>");

//document.write(`${palabra[0]}<br>`);
//let fin = palabra.length;
//document.write(`arreglo ${fin}<br>`);
    let suma = 0;
    let indice = 0;
    while (palabra[indice] != null) {
    //cara = palabra[indice];
    //document.write(`<br>Suma - ${suma} cara - ${cara}<br>`);
        switch(palabra[indice]){
            case 'A': 
            case 'E': 
            case 'I': 
            case 'O':
            case 'U':
            case 'L':
            case 'N': 
            case 'R': 
            case 'S':
            case 'T':
                suma++;break;
            case 'D':
            case 'G':
                suma += 2;break; 
            case 'B':
            case 'C':
            case 'M': 
            case 'P':
                suma += 3;break;
            case 'F': 
            case 'H':
            case 'V':
            case 'W':
            case 'Y':
                suma += 4;break;
            case 'K' :
                suma += 5;break;
            case 'J':
            case 'X' :
                suma += 8;break;
            case 'Q':
            case 'Z':
                suma += 10;break;
        }
        indice++;
    }
return suma;

}

var formulario = document.getElementById('formulario');
var resp = document.getElementById('resp');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    //console.log('Me diste un clic')

    var datos = new FormData(formulario);
    console.log(datos.get('palabra'))

    if(datos.get('palabra') === ''){
        resp.innerHTML = `
        <div class="alert alert-danger" role="alert">
            Escribe una palabra
        </div>`
    }
    else{
            respuesta.innerHTML = 
            `
            <table class="table table-striped" id="tabla">
                    <thead>
                        <tr>
                            <th scope="col">Palabra</th>
                            <th scope="col">Puntos</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            `
            var tabla = document.getElementById('tabla');

            let agregarFila = tabla.insertRow(-1);
            let agregarCelda = agregarFila.insertCell(0);
            agregarCelda.textContent = datos.get('palabra');
            agregarCelda = agregarFila.insertCell(1);
            agregarCelda.textContent = scrable(datos.get('palabra').toUpperCase()); 
            datos.get('palabra').value = "";           
        }
        
})