function validarn(e)
{
    var teclado = (document.all)? e.keycode: e.witch
    if (teclado==8)return true;
    var patron=/[0-9\d .]/;
    var tec = string.fromcharcode(teclado);
    return patron.test(tec);
}
function interes ()
{
    var valor=document.formulario.cantidad.value;
    var result = parseInt(valor);
    var interes= result * 0.02;
    var total=result + interes;
    document.formulario.sueldoti.value = "$" + total;
}










  

