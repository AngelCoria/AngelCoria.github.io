//https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json

/*
const URL = "./heroes.json";
fetch(URL)
    .then(respuesta => respuesta.json())
    .then(promesa => {procesaJson(promesa)})


    function procesaJson(pjson){
        pjson.members.forEach(miembro => {
            console.log(miembro)  
            console.log(miembro.name)
          })
    }
*/

/*
let nombre = document.getElementById('nombre');
let imagen = document.getElementById('foto');
let fecha = document.getElementById('fecha');
let lugar = document.getElementById('lugar');
let boton = document.getElementById('boton');*/
let imprime = document.getElementById('imprime');
let ul = document.getElementById('lista');


const URL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(URL)
    .then(promesa => promesa.json())
    .then(promesa =>{procesaJson(promesa)})
    
    function procesaJson(param){
        param.prophets.forEach(miembro => {
            console.log(miembro)
            lona(miembro)
            /*nombre.textContent = miembro.name + ' ' + miembro.lastname;
            imagen.src = miembro.imageurl;
            fecha.textContent = miembro.birthdate;
            lugar.textContent = miembro.birthplace;*/
        });
    }

    function lona(object){

        let li = document.createElement('li');

        li.innerHTML = `
            <div class="card m-2" style="width: 18rem;">
                <img src="${object.imageurl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${object.name + " " + object.lastname}</h5>
                    <p class="card-text">${object.birthdate}</p>
                    <p class="card-text">${object.birthplace}</p>
                </div>
            </div>
            `
        ul.appendChild(li);
            
    }


   