/* Bloque 2-6: muestra el valor de cada radio button para la primera pregunta*/
document.addEventListener("click",selectDay); 
function selectDay(){
    let day = document.querySelector('input[type="radio"][name="dia_mundial"]:checked');
    alert('Seleccionaste:  ' + day.value);
};


/* Bloque 10-14: muestra el valor de cada radio button para la segunda pregunta*/
document.addEventListener("click",selectOrg);    
function selectOrg(){
    let org = document.querySelector('input[type="radio"][name="organizacion"]:checked');
    alert('Seleccionaste:  ' + org.value);
};