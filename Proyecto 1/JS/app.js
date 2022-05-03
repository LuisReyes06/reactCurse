/*alert('Hola Mundo en JS');*/

var operandoa;
var operandob;
var operacion;

function init(){

    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');


    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }


    reset.onclick = function(e){
        resetear();
    }


    suma.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }

    resta.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }

    multiplicacion.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }

    division.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }

    igual.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
    }

}

function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver(){
    
    var res = 0;
    
    switch(operacion){
    
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;

        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    resultado.textContent = res;
    console.log(`El resultado de la operacion es: ${res}`);
}


function mayorEdad(){

    var edad = document.getElementById('edad').value;

    if(edad >= 100){
       
        document.getElementById('area').value = "Tienes " + edad + " años, no mms we como le haces para seguir luchando :O";
        
    }else if(edad >= 21){
       
        document.getElementById('area').value = "Tienes " + edad + " años, ya estamos veteranos we :')";

    }else if (edad >= 18){

       document.getElementById('area').value = "Tienes " + edad + " años, ya eres legal XD";

    }else if (edad == 17){

        document.getElementById('area').value = "Amo su inocencia, " + edad + " años, amo sus errores, " + edad + " años, soy su primer novio, " + edad + " años, su primer amor";

    }else if (edad >= 1){

        document.getElementById('area').value = "Tienes " + edad + " años, aun estas chavo hijo mío :3";

    }else{

        document.getElementById('area').value = "Tienes " + edad + " años, no digas mmds mary jane esa edad no la puedes tener";

    }

}


function evaluacion(){

    var calificacion = document.getElementById('calificacion').value;

    if(calificacion == 10){
       
        document.getElementById('areaC').value = "Tienes " + calificacion + " de calificacion, Excelente tienes la nota maxima :O";
        
    }else if( (calificacion <= 9) && (calificacion >= 8) ){
       
        document.getElementById('areaC').value = "Tienes " + calificacion + " de calificacion, sobresaliente pero puedes mejorar :)";

    }else if ((calificacion <= 7) && (calificacion >= 6)){

       document.getElementById('areaC').value = "Tienes " + calificacion + " de calificacion, aprobatoria pero no te conformes sigue esforzandote /(^_^) /";

    }else if ((calificacion <= 5) && (calificacion >= 0)){

        document.getElementById('areaC').value = "Tienes " + calificacion + " de calificacion, reprobaste :'(, este cuatrimestre no fue el mejor pero el siguiente se puede";

    }else{

        document.getElementById('areaC').value = "Tienes " + calificacion + " de calificacion, no digas mmds mary jane solo puedes tener una calificacion entre 0 y 10";

    }

}