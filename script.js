function Escribir(a){
    if(document.getElementById("Pantalla").innerHTML=="0"){
        document.getElementById("Pantalla").innerHTML = a;
    }else{
    document.getElementById("Pantalla").innerHTML += a;}
}

var x;
var y;
var selector;
function Suma(){
    x=parseFloat(document.getElementById("Pantalla").innerHTML);
    BorrarTodo();
    selector=1;
    
}
function Resta(){
    x=parseFloat(document.getElementById("Pantalla").innerHTML);
    BorrarTodo();
    selector=2;
}
function Multiplicacion(){
    x=parseFloat(document.getElementById("Pantalla").innerHTML);
    BorrarTodo();
    selector=3;
}
function Division(){
    x=parseFloat(document.getElementById("Pantalla").innerHTML);
    BorrarTodo();
    selector=4;
}
function Resultado(){
    switch(selector){
        case 1:
            y=parseFloat(document.getElementById("Pantalla").innerHTML);
            let suma=x+y
            document.getElementById("Pantalla").innerHTML = (suma);
            selector=0;
        break;
        case 2:
            y=parseFloat(document.getElementById("Pantalla").innerHTML);
            let resta=x-y
            document.getElementById("Pantalla").innerHTML = (resta);
            selector=0;
        break;
        case 3:
            y=parseFloat(document.getElementById("Pantalla").innerHTML);
            let multiplicacion=x*y
            document.getElementById("Pantalla").innerHTML = (multiplicacion);
            selector=0;
        break;
        case 4:
            y=parseFloat(document.getElementById("Pantalla").innerHTML);
            let division=x/y
            document.getElementById("Pantalla").innerHTML = (division);
            selector=0;
        break;
        
    }
    
    
}
function Borrar(){
    let todo = document.getElementById("Pantalla").innerHTML;
    document.getElementById("Pantalla").innerHTML = (todo.substring(0, todo.length - 1));
    if(document.getElementById("Pantalla").innerHTML==""){
        document.getElementById("Pantalla").innerHTML = "0";
    }
}
function BorrarTodo(){
    document.getElementById("Pantalla").innerHTML="0";
}
