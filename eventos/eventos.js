console.log("Funcionando");

let salir = document.getElementById('salir');
let inicio = document.getElementById('inicio');
let opera = document.getElementById('operacion');
let pre = document.getElementById('pregunta');
let su = document.getElementById('suma');
let re = document.getElementById('resta');
let mul = document.getElementById('multiplica');
let di = document.getElementById('divide');
let res = document.getElementById('reiniciar');
let resultado = document.getElementById('resultado');
let resul = document.getElementById('resul');

salir.addEventListener('click', mensalir);
function mensalir(){
    if (confirm('Vas a salir del programa'))
        document.write('Adios ;)');
}

inicio.addEventListener('click', inicioB);
function inicioB(){
    opera.style.display = 'block';
    pre.style.display = "block";
}

pre.addEventListener('click', preB);
function preB(){
    alert("Ah ocurrido un error");
}

opera.addEventListener('click', operaB);
function operaB(){
    su.style.display = "block";
    re.style.display = "block";
    mul.style.display = "block";
    di.style.display = "block";
    res.style.display = "block";
    resul.style.display = "block"
    resultado.style.display = "block"
}

res.addEventListener('click', resB);
function resB(){
    su.style.display = "none";
    re.style.display = "none";
    mul.style.display = "none";
    di.style.display = "none";
    res.style.display = "none";
    opera.style.display = 'none';
    pre.style.display = "none";
    resul.style.display = "none";
    resultado.style.display = "none";
}

su.addEventListener('click', suB);
function suB(){
    
    resultado.innerHTML = "La suma es 35"; 
}

re.addEventListener('click', reB);
function reB(){
    resultado.innerHTML = "La resta es 15"; 
}

mul.addEventListener('click', mulB);
function mulB(){
    resultado.innerHTML = "La multiplicación es 155"; 
}

di.addEventListener('click', diB);
function diB(){
    resultado.innerHTML = "La division es 5"; 
}


