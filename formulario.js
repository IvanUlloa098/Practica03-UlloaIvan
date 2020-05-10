function validarCamposObligatorios()
{
    var bandera = true

    for(var i = 0; i < document.forms[0].elements.length; i++){
    var elemento = document.forms[0].elements[i]
    if(elemento.value == '' && elemento.type == 'text'){
        if(elemento.id == 'cedula'){
        document.getElementById('mensajeCedula').innerHTML = '<br>La cedula esta vacia'
    }
    elemento.style.border = '1px red solid'
    elemento.className = 'error'
    bandera = false
    }
 }

 if(!bandera){
 alert('Error: revisar los comentarios')
 }
 return bandera
}
function validarLetras(elemento)
{
 if(elemento.value.length > 0){
 var miAscii = elemento.value.charCodeAt(elemento.value.length-1)
 console.log(miAscii)

 if(miAscii >= 97 && miAscii <= 122){
 return true
 }else {
 elemento.value = elemento.value.substring(0, elemento.value.length-1)
 return false
 }
 }else{
 return true
 }

}