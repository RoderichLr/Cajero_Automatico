//declaramos variable para el boton de iniciar secion
let btnInciarSecion = document.getElementById('botonIniciarSecion');
let btnConsultar =document.getElementById('btnC');
let btnDepositar =document.getElementById('btnD');
let btnRetirar =document.getElementById('btnR');
let spanIndicaciones =document.getElementById('indicaciones');
let bordeC = document.getElementById('bordeContraseña');
let bordeU = document.getElementById('bordeUsuario');
let bordeCan =document.getElementById('bordeCantidad');
let cant = document.getElementById('cantidad');
let divC = document.getElementById('divInputCantidad');
let spanPregunta = document.getElementById('spanCantidad');
let botonesAccion =document.getElementById('btnsAcc');
let despliegeC = document.getElementById('despliegeCantidad');
let btnEnviar =document.getElementById('botonEnviar');
let divEnviar=document.getElementById('enviar');
let spanBienvenida =document.getElementById('bienvenida');
let resultado = Number ('0');
let saldoM = Number('345');
let saldoA = Number('190');
let saldoE = Number('845');
let controlAcciones = 0;
let controlUsuarios = 0;
let saldoActualM = 0;
let saldoActualA = 0;
let saldoActualE= 0;
let final;
 
function iniciar(){//funcion principal
//declaramos variables para  el input de usuario y de contraseña
 let inputUsuario = document.getElementById('usuario').value;
 let inputContraseña = document.getElementById('contraseña').value;
//Objetode objetos que contiene los datos de los usuarios registrados
let  datos = {
  'Maria Carrillo': {
    'Mc1234' : 'UsuarioMaria'
  },
  'Abraham Sanchez': {
   'As1234' : 'UsuarioAbraham'
 },
 'Emanuel Vidal': {
   'Ev1234' : 'UsuarioEmanuel'
 },

}
// validar  espacios vacios en los inputs
if ( inputContraseña !== "" && inputContraseña !=="" ){
// se almacenan el supusto usuario
let resultadoUsuario = datos[inputUsuario] ;
//se verifica si lo que ingreso es correcto para continuar a validar la contraseña
if( resultadoUsuario !== undefined){
//almacenamos la supuesta contraseña
let resultadoContraseña = datos[inputUsuario][inputContraseña] ;
//valida que la  contrasea sea  correcta  
  if ( resultadoContraseña !== undefined){

/*una vez validado que existen los usuarios y las contraseñas estan bien  con auyuda del objeto
el switch entrara a el al usuario que corresponda*/
  switch(datos[inputUsuario][inputContraseña]){

    case 'UsuarioMaria':
    spanBienvenida.innerHTML = "¡Bienvenida! Maria Carrillo"
    estilosGenerales();
    controlUsuarios = 1 ;
    break;

    case 'UsuarioAbraham':
    spanBienvenida.innerHTML = "¡Bienvenido! Abraham Sanchez"
    estilosGenerales();
    controlUsuarios = 2 ;
    break;

    case 'UsuarioEmanuel':
    spanBienvenida.innerHTML = "¡Bienvenido! Emanuel Vidal"
    estilosGenerales();
    controlUsuarios = 3 ;
    break;
      
    }
 }
 //Validaciones principales del login
else{
  alert("Usuario o Contraseña incorrecto "); 
 }
}
else{
  alert("Usuario o Contraseña incorrecto ");
}
  }
  else{
    alert("esta vacio el formulario");
  }
//Quitamos o mostramos lo necesario para la ontra interfaz  
}
function estilosGenerales(){
botonesAccion.classList.add('visible');
botonesAccion.classList.remove('invisible');
botonesAccion.setAttribute('class','botonesAccion');
//
spanIndicaciones.classList.add('visible');
spanIndicaciones.classList.remove('invisible');
//
bordeC.classList.remove('bordeBtn1');
bordeU.classList.remove('bordeBtn2')
bordeC.classList.add('invisible');
bordeU.classList.add('invisible');
btnInciarSecion.classList.add('invisible');
//Montamos el monto que tiene por defecto a un monto que se actualizara dependiendo las operaciones
saldoActualM = saldoM;
saldoActualA = saldoA;
saldoActualE = saldoE;

}

function introducirCantidad(){

despliegeC.classList.add('visible');
despliegeC.classList.remove('invisible');
despliegeC.setAttribute('class','despliege');
//
divEnviar.classList.add('visible');
divEnviar.classList.remove('invisible');
btnEnviar.setAttribute('class','btnEnviar');
//
bordeCan.classList.add('visible');
cant.classList.add('visible');
bordeCan.classList.remove('invisible');
cant.classList.remove('invisible');
bordeCan.setAttribute('bordeBtn3');
cant.setAttribute('textoCantidad');

}

function sumar (){//Esta funcion activa los botones necesarios par ahacer la suma
cant.value="";
spanPregunta.innerHTML= "¿Cuanto dinero quiere Depositar?" ;
controlAcciones = 1;
introducirCantidad();
}

function restar (){//Esta funcion activa los botones necesarios par ahacer la resta
cant.value="";
spanPregunta.innerHTML= "¿Cuanto dinero quiere Retirar?" ;
controlAcciones = 2;
introducirCantidad();
  }

/* una ves que se digite la cantidad dependiendo el usuario
llamara a la funcion para sumar o restar*/
  function confirmacion(){
                          
switch(controlUsuarios){
case 1:
  UsuarioM();
break;

case 2:
   UsuarioA();
break;

case 3:
  UsuarioE();
break;
}
  
    
  }
//Muestra el saldo dependiendo la opracion que se realizo
function saldoActual(){

despliegeC.classList.add('visible');
despliegeC.classList.remove('invisible');
despliegeC.setAttribute('class','despliege');
//
divEnviar.classList.add('invisible');
divEnviar.classList.remove('visible');
//
bordeCan.classList.add('invisible');
cant.classList.add('invisible');
bordeCan.classList.remove('visible');
cant.classList.remove('visible');
 
 switch(controlUsuarios){
  case 1: // primer usuario
    if(saldoActualM>991){   
    spanPregunta.innerHTML= "No puedes tener mas de 990 pesitos";
    setTimeout(repetirMa,2000);
    
    function repetirMa(){
    saldoActualM = saldoActualM - Number (cant.value);
    spanPregunta.innerHTML= 'Tu sueldo actual es de:'+ ' '+ saldoActualM;

    }
    }
    else if(saldoActualM<10){
      spanPregunta.innerHTML= "No puedes tener menos de 10 pesitos";
      setTimeout(repetirM,2000);
      function repetirM(){
      saldoActualM = saldoActualM + Number (cant.value);
      spanPregunta.innerHTML= 'Tu sueldo actual es de:'+ ' '+ saldoActualM;

    }
    }
    else {
      
      spanPregunta.innerHTML= 'Tu sueldo actual es de:'+ ' '+ saldoActualM;
     
    }

  break;

  case 2://segundo usuario
    if(saldoActualA>991){
        
      spanPregunta.innerHTML= "No puedes tener mas de 990 pesitos";
      setTimeout(repetirAa,2000);
      function repetirAa(){
      saldoActualA = saldoActualA - Number (cant.value);
      spanPregunta.innerHTML= 'Tu sueldo actual es de:'+ ' '+ saldoActualA;

    }
    }
    else if(saldoActualA<10){
        
      spanPregunta.innerHTML= "No puedes tener menos de 10 pesitos";
      setTimeout(repetirA,2000);
      function repetirA(){
      saldoActualA = saldoActualA + Number (cant.value);
       spanPregunta.innerHTML= 'Tu sueldo actual es de:'+ ' '+ saldoActualA;

    }
    }
    else {
      
      spanPregunta.innerHTML= 'Tu sueldo actual es de:'+ ' '+ saldoActualA;
     
    }
  
  break;
  
  case 3://tercer usuario
    if(saldoActualE>991){
        
      spanPregunta.innerHTML= "No puedes tener mas de 990 pesitos";
      setTimeout(repetirEa,2000);
      function repetirEa(){
      saldoActualE = saldoActualE - Number (cant.value);
      spanPregunta.innerHTML= 'Tu sueldo actual es de:'+ ' '+ saldoActualE;

    }
    }
    else if(saldoActualE<10){
        
      spanPregunta.innerHTML= "No puedes tener menos de 10 pesitos";
      setTimeout(repetirE,2000);
      function repetirE(){
      saldoActualE = saldoActualE + Number (cant.value);
       spanPregunta.innerHTML= 'Tu sueldo actual es de:'+ ' '+ saldoActualE;

    }
    }
    else {
      
      spanPregunta.innerHTML= 'Tu sueldo actual es de:'+ ' '+ saldoActualE;
     
    }
  break;
   }


  
  
}

function isNumberKey(evt){// solo permite numeros
  var charCode = (evt.which) ? evt.which : evt.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
  return true;
}
//Hace suma o resta segun el boton elgido este es para primer usuario 
function UsuarioM(){
 
  if (controlAcciones === 1  ){//sumar

    saldoActualM = saldoActualM + Number (cant.value);
    return saldoActualM;
     
    
   
    }
    if (controlAcciones === 2  ){
      //Restar
    saldoActualM = saldoActualM - Number (cant.value);
    return saldoActualM;
      
      }
   
}
//Hace suma o resta segun el boton elgido este es para segundo usuario 
function UsuarioA(){
  if (controlAcciones === 1 ){
   
    saldoActualA = saldoActualA + Number (cant.value);
    return saldoActualA;
     
    
   
    }
    if (controlAcciones === 2  ){
      //Restar
    saldoActualA = saldoActualA - Number (cant.value);
    return saldoActualA;
      
      }
}
//Hace suma o resta segun el boton elgido este es para tercer usuario usuario 
function UsuarioE(){
  if (controlAcciones === 1 ){
 
    saldoActualE = saldoActualE + Number (cant.value);
    return saldoActualE;
     
    
   
    }
    if (controlAcciones === 2  ){
      //Restar
    saldoActualE = saldoActualE - Number (cant.value);
    return saldoActualE;
      
      
}
}


