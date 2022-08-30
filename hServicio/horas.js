//console.log("Conectando");

var formulario = document.getElementById('formulario');
var respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('botón consultar');

    var datos = new FormData(formulario);
    console.log(datos);
    console.log(datos.get('matricula'));

    if (datos.get('matricula') === ''){
        respuesta.innerHTML =  
        `<div class="alert alert-danger" role="alert">
            Escribe tú matricula
        </div>`
    }else{
        if (datos.get('matricula') === 'ep00012'){
            respuesta.innerHTML = `
            <div class="alert alert-info" role="alert">
                Hola ${datos.get('matricula')}, actualmente tienes 15 hora(s) de servicio
            </div>`
        }
        else{
            respuesta.innerHTML = `
            <div class="alert alert-danger" role="alert">
                La matricula ${datos.get('matricula')} no existe
            </div>`
        }
    }
})