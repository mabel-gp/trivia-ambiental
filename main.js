//Muestra la alternativa correcta e incorrecta para la primera pregunta.
let pruebaUno = document.querySelector('#boton_uno');
pruebaUno.addEventListener("click",uno);

function uno(){
    let seleccion = document.querySelector('input[type="radio"][name="dia_mundial"]:checked');
    let correcta =document.querySelector('input[type="radio"][id="junio"]');
    if (seleccion === correcta){
        alert(`La alternativa correcta es:  ${correcta.value}. \n¡Tu respuesta es correcta!`);
    }else{
        alert(`La respuesta correcta es:  ${correcta.value}. \nTu respuesta es incorrecta.`);
    }
};

//Muestra la alternativa correcta e incorrecta para la segunda pregunta.
let pruebaDos = document.querySelector('#boton_dos');
pruebaDos.addEventListener("click",dos);

function dos(){
    let seleccionDos = document.querySelector('input[type="radio"][name="organizacion"]:checked');
    let correctaDos =document.querySelector('input[type="radio"][id="onu"]');
    if (seleccionDos === correctaDos){
        alert(`La alternativa correcta es:  ${correctaDos.value}. \n¡Tu respuesta es correcta!`);
    }else{
        alert(`La respuesta correcta es:  ${correctaDos.value}. \nTu respuesta es incorrecta.`);
    }
};

//Muestra la alternativa correcta e incorrecta para la tercera pregunta.
let pruebaTres = document.querySelector('#boton_tres');
pruebaTres.addEventListener("click",tres);

function tres(){
    let seleccionTres = document.querySelector('input[type="radio"][name="ciencia"]:checked');
    let correctaTres =document.querySelector('input[type="radio"][id="ecologia"]');
    if (seleccionTres === correctaTres){
        alert(`La alternativa correcta es:  ${correctaTres.value}. \n¡Tu respuesta es correcta!`);
    }else{
        alert(`La respuesta correcta es:  ${correctaTres.value}. \nTu respuesta es incorrecta.`);
    }
};