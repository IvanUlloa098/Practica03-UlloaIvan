//var avertencias='';

function validarCamposObligatorios() {
    var bandera = true;
    var op;

    for(var i = 0; i < document.forms[0].elements.length; i++) {
        var elemento = document.forms[0].elements[i];
        
        if((elemento.value != '' && elemento.type == 'text') || (elemento.value != '' && elemento.type == 'password')) {

            op = elemento.id;

            switch(op) {

                case 'cedula':
                    c=this.validarCedula(elemento);
                    if (c==false) {
                        document.getElementById('mensajeCedula').innerHTML = '<br>Cedula no valida';
                    }
                break;
                    
                case 'nombres':
                    c=this.dosPalabras(elemento);
                    if (c==false) {
                        document.getElementById('mensajeNombres').innerHTML = '<br>Debe escribir los dos nombres';
                    }
                break;
                
                case 'apellidos':
                    c=this.dosPalabras(elemento);
                    if (c==false){
                        document.getElementById('mensajeNombres').innerHTML = '<br>Debe escribir los dos apellidos';
                    }
                break;

                case 'contrasena':
                    c=this.valiarPassword(elemento);
                    if (c==false){
                        document.getElementById('mensajePass').innerHTML = '<br>Debe tener al menos 8 caracteres<br>Al menos una letra minuscula y mayuscula<br> Debe incluir un caracter especial (@,_,$)';
                    }
                break;

                case 'correo':
                    c=this.validarCorreo(elemento);
                    if (c==false){
                        document.getElementById('mensajeEmail').innerHTML = '<br>Revisa el corroe ingresado<br> Admitidos: ups.edu.ec y est.ups.edu.ec';
                    }
                break;

                case 'fecha':
                    c=this.validarFecha(elemento);
                    //alert(c);
                    if (c==false){
                        document.getElementById('mensajeFecha').innerHTML = '<br>Formato: dd/mm/yyyy';
                    }
                break;

            }

        } else if((elemento.value == '' && elemento.type == 'text') || (elemento.value == '' && elemento.type == 'password')) {

            /*if(elemento.id == 'cedula'){
                document.getElementById('mensajeCedula').innerHTML = '<br>La cedula esta vacia';
            }*/
        
            elemento.style.border = '1px red solid';
            elemento.className = 'error';
            bandera = false;
        }
    }

    if(!bandera){
        //advertencias = advertencias+'\nERROR: Campos Obligatorios Vacios';
        alert('ERROR: Por favor llene los campos obligatorios');
    }

    return bandera;
}

function validarCedula(elemento) {

    var texto = elemento.value;
    var bandera=false;
    var total = 0;

    if (texto.length == 10){

        for(i = 0; i < (texto.length-1); i++){
            if (i%2 === 0) {
                var aux = texto.charAt(i) * 2;
                if (aux > 9) aux -= 9;
                total += aux;
            } else {
                total += parseInt(texto.charAt(i));
            }
        }

        total = total % 10 ? 10 - total % 10 : 0;

        if (texto.charAt(texto.length-1) == total) {
            bandera=true;
        }else{
            bandera=false;
        }
    }

    return bandera;

}


function validarFormato(elemento) {
    
    if(elemento.value.length > 0 && elemento.value.length <= 10){
        var miAscii = elemento.value.charCodeAt(elemento.value.length-1);
        console.log(miAscii);
        //alert(elemento.value.length);
        if((miAscii >= 48 && miAscii <= 57) || (miAscii == 47)){
            return true;
        } else {
            elemento.value = elemento.value.substring(0, elemento.value.length-1);
            return false;
        }

    }  else if (elemento.value.length > 10) {         
        elemento.value = elemento.value.substring(0, elemento.value.length-1);
        return false;
    } else{
        return true;
    }

}

function validarFecha(elemento) {

    var count=0, m=0, d=0, a=0;
    var texto = elemento.value;
    var bandera=false, formato=false;
    
    if(texto.length == 10) {
        for(var i = 0; i < texto.length; i++) {

            codigo = texto.charCodeAt(i);
            if (codigo == 47) {
                count++;
                if (i == 3) {
                    count++;
                } else if (i == 6) {
                    count++;
                }
                
            }
    
        }
    }

    if(count==2){
        formato=true;
    }
    
    count=0;
    if (formato == true) {

        for(var i = 0; i < texto.length; i++) {

            codigo = texto.charCodeAt(i);
            if (codigo == 47) {
                count++;
                
                if (count==1) {
                    d=parseInt(texto.substring(0,i));
                    m=parseInt(texto.substring(i+1,i+3));
                } else {
                    a=parseInt(texto.substring(i+1,texto.length));
                    break;
                }
                
            }
    
        }

        if((d>0 && d<=31) && (m>0 && m<=12) && (a>1900 && a<=2020)) {
            bandera=true;
        }

    } else {
        bandera = false;
    }

    if (bandera == false) {
        elemento.style.border = '1px red solid';
        elemento.className = 'error';
    }

    return bandera;

}

function validarCorreo(elemento) {
    
    var codigo; 
    var count=0;
    var texto = elemento.value;
    var bandera=false;
    //alert(texto);

    for(var i = 0; i < texto.length; i++) {

        codigo = texto.charCodeAt(i);
        if (codigo == 64) {
            count=i;
            break;
        }

    }

    if(count != 0) {
        //alert(texto.substring(count, texto.length));
        if ((texto.substring(count, texto.length) == '@ups.edu.ec') || (texto.substring(count, texto.length) == '@est.ups.edu.ec')){
            bandera=true;
        } else {
            elemento.style.border = '1px red solid';
            elemento.className = 'error';
            bandera = false;
        }
    }
    //alert(count);

    return bandera;

}

function valiarPassword(elemento) {

    var codigo; 
    var may=0, min=0, car=0;
    var texto = elemento.value;
    var bandera=true;
    //alert(texto);
    
    if (texto.length>=8) {
        for(var i = 0; i < texto.length; i++) {

            codigo = texto.charCodeAt(i);
            if (codigo >= 97 && codigo <= 122) {
                min=1;
            } else if (codigo >= 65 && codigo <= 90) {
                may=1;
            } else if (codigo == 64) {
                car=1;
            } else if (codigo == 36) {
                car=1;
            } else if (codigo == 95) {
                car=1;
            }
    
        } 
    } else {
        elemento.style.border = '1px red solid';
        elemento.className = 'error';
        bandera = false;
    }

    if (min!=1 && may!=1 && car!=1) {
        elemento.style.border = '1px red solid';
        elemento.className = 'error';
        bandera = false;
    }
    
    return bandera;

}

function dosPalabras(elemento) {

    var codigo; 
    var count=0;
    var bandera=true;
    //var elemento = document.getElementById("nombres");
    var texto = elemento.value;
    
    for(var i = 0; i < texto.length; i++) {

        codigo = texto.charCodeAt(i);
        if (codigo == 32) {
            count++;
        }

    }  
    
    if(count>1){
        //advertencias = advertencias+'\nERROR: Solo dos '+elemento.id;
        //alert('ERROR: Solo dos '+elemento.id);
        elemento.style.border = '1px red solid';
        elemento.className = 'error';
        bandera = false;

    } else if (count==0) {
        //alert('ERROR: Dos '+elemento.id+' neccesarios');
        //advertencias = advertencias+'\nERROR: Dos '+elemento.id+' neccesarios';
        elemento.style.border = '1px red solid';
        elemento.className = 'error';
        bandera = false;
    }

    return bandera;
}

function validarTelefono(elemento) {
    
    if(elemento.value.length > 0 && elemento.value.length <= 10){
        var miAscii = elemento.value.charCodeAt(elemento.value.length-1);
        console.log(miAscii);
        //alert(elemento.value.length);
        if(miAscii >= 48 && miAscii <= 57){
            return true;
        } else {
            elemento.value = elemento.value.substring(0, elemento.value.length-1);
            return false;
        }

    }  else if (elemento.value.length > 10) {         
        elemento.value = elemento.value.substring(0, elemento.value.length-1);
        return false;
    } else{
        return true;
    }

}

function validarLetras(elemento) {

        if(elemento.value.length > 0){
            var miAscii = elemento.value.charCodeAt(elemento.value.length-1);
            console.log(miAscii);

            if((miAscii >= 97 && miAscii <= 122) || (miAscii >= 65 && miAscii <= 90) || (miAscii == 32)){
                return true;
            } else {
                elemento.value = elemento.value.substring(0, elemento.value.length-1);
                return false;
            }

        } else{
            return true;
        }

}