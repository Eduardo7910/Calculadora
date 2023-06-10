document.addEventListener('DOMContentLoaded', function(){

    //*Variable

    var pantalla = document.querySelector('.pantalla');
    var boton = document.querySelectorAll('.bottn');
    var boton_Igual = document.querySelector('.bottn_Igual');
    var boton_Borrar = document.querySelector('.bottn_Borrar');
    var boton_Operacion = document.querySelectorAll('.bottn_Operacion');


    //*Evento de los botones numericos
    boton.forEach(function(boton){
        boton.addEventListener('click', function(){
            pantalla.value += boton.textContent;
        });
    });

    //*Evento de los botones de operacion
   boton_Operacion.forEach(function(boton_Operacion){
        boton_Operacion.addEventListener('click', function(){
            pantalla.value += boton_Operacion.textContent;
        });
   });

    //*Evento del boton de igual
    boton_Igual.addEventListener('click', function(){
        var expresion = pantalla.value;
        var resultado = eval(expresion);
        pantalla.value= resultado;
    });

    //*Evento del boton de borrar (C)
    boton_Borrar.addEventListener('click', function(){
        pantalla.value = '';
    });

});