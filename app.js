/* Bloque 2-8: muestra la alerta para la primera pregunta*/
let replyDay = document.querySelector("#boton");
replyDay.addEventListener("click",selectDay);

function selectDay(){
    let day = document.querySelector('input[type="radio"][name="dia_mundial"]:checked');
    alert('Seleccionaste:  '+ day.value);
}


/* Bloque 11-17: muestra la alerta para la segunda pregunta*/
let replyOrg = document.querySelector("#boton");
replyOrg.addEventListener("click",selectOrg);

function selectOrg(){
    let org = document.querySelector('input[type="radio"][name="organizacion"]:checked');
    alert('También:  ' + org.value);
}