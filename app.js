
var emailLog= document.getElementById('emaillog');
var passwordLog= document.getElementById('passwordlog');
var checkoutLog= document.getElementById('checklog');

var emailReg= document.getElementById('emailreg');
var passwordReg= document.getElementById('passwordreg'); 
var cpassword= document.getElementById('cpassword');
var checkoutReg= document.getElementById('checkreg');
var address= document.getElementById('address');
var lastname= document.getElementById('lastname');
var nombre= document.getElementById( 'nombre');
var city= document.getElementById('city');

var msj= document.getElementById('error');

function sendLogin(){
    var mensaje = [];
    if(emailLog.value===null|| emailLog.value===''){
        mensaje.push('No ingresó correo electronico y contraseña');
    }
    if(passwordLog.value===null|| passwordLog.value===''){
        mensaje.push('Intentelo nuevamente');
    }
    msj.innerHTML=mensaje.join(', ');

    return false;
}

function sendRegister(){

    var mensaje=[];
    if (nombre.value===null|| nombre.value===''){
        mensaje.push('Falto ingresar tu nombre');
    }
    if (lastname.value===null|| lastname.value===''){
        mensaje.push('Falto ingresar tu apellido ');
    }
    if(passwordReg.value===null|| passwordReg.value===''){
        mensaje.push('No ingresaste tu contraseña');
    }
    if(cpassword.value===null|| cpassword.value===''){
        mensaje.push('No ingresaste la confirmacion de contraseña');
    }
    if(emailReg.value===null|| emailReg.value===''){
        mensaje.push('No ingresaste tu correo');
    }
    if (address.value===null|| address.value===''){
        mensaje.push('Falto ingresar tu direccion ');
    }
    if (city.value===null|| city.value===''){
        mensaje.push('Falto ingresar tu ciudad');
    }
    msj.innerHTML=mensaje.join(' , ');

    return false;


}
