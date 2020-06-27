function longitudynumeros(e,contenidovalor, longitudMaxima){
    try {
        if (teclado==8||contenidovalor.value.length > (longitudMaxima - 1))
            return false;
        else
        var patron = /[0-9\d .]/;
        var tec = String.fromCharCode(teclado);
        return patron.test(tec);             
        } 
        catch (e) {
        return false;
    }

}
function validarlongitud( contenidovalor, longitudMaxima)
{
    try {
        if (contenidovalor.value.length > (longitudMaxima - 1))
            return false;
        else
            return true;             
        } 
        catch (e) {
        return false;
    }
}
function validar(e,contenido)
{
    
            
    var teclado = (document.all) ? e.keycode: e.which
    
    if (teclado==8 && contenido.value.length<12)return true;
    
    
    var patron = /[0-9\d .]/;
    var tec = String.fromCharCode(teclado);
    console.log(tec);
    
    return patron.test(tec);
    
   
}
function interes()
{
    
    var valor=document.formulario.cantidad.value;
    var result = parseInt(valor);
    var interes= result * 0.02;
    var total = result + interes;
    document.formulario.sueldoti.value = "$" + total;
}










  

