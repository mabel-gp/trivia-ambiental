//Muestra la alternativa correcta e incorrecta para la primera pregunta.
let replyDay = document.querySelector('#boton_day');
replyDay.addEventListener("click",selectDay);

function selectDay(){
    let day = document.querySelector('input[type="radio"][name="dia_mundial"]:checked');
    let correctDay =document.querySelector('input[type="radio"][id="junio"]');
    if (day === correctDay){
        alert(`La alternativa correcta es:  ${correctDay.value}. \n¡Tu respuesta es correcta!`);
    }else{
        alert(`La respuesta correcta es:  ${correctDay.value}. \nTu respuesta es incorrecta.`);
    }
};

//Muestra la alternativa correcta e incorrecta para la segunda pregunta.
let replyOrg = document.querySelector('#boton_org');
replyOrg.addEventListener("click",selectOrg);

function selectOrg(){
    let org = document.querySelector('input[type="radio"][name="organizacion"]:checked');
    let correctOrg =document.querySelector('input[type="radio"][id="onu"]');
    if (org === correctOrg){
        alert(`La alternativa correcta es:  ${correctOrg.value}. \n¡Tu respuesta es correcta!`);
    }else{
        alert(`La respuesta correcta es:  ${correctOrg.value}. \nTu respuesta es incorrecta.`);
    }
};

//Muestra la alternativa correcta e incorrecta para la tercera pregunta.
let replyScience = document.querySelector('#boton_science');
replyScience.addEventListener("click",selectScience);

function selectScience(){
    let science = document.querySelector('input[type="radio"][name="ciencia"]:checked');
    let correctScience =document.querySelector('input[type="radio"][id="ecologia"]');
    if (science === correctScience){
        alert(`La alternativa correcta es:  ${correctScience.value}. \n¡Tu respuesta es correcta!`);
    }else{
        alert(`La respuesta correcta es:  ${correctScience.value}. \nTu respuesta es incorrecta.`);
    }
};

let back = document.querySelector("#regresar");
back.addEventListener("click",goToBack);
function goToBack(){
    location.href="index.html";
};