function quince(){
    let can, val
    can = document.getElementById("cantidad").value
    val = document.getElementById("valor").value
    res1 = can*val
    resporcentaje = can*val *15 /100
    resfinal = res1-resporcentaje
    document.getElementById("resdescuento-15").innerHTML = "<div> Queda en  "+ resfinal +"</div>"
}
function cincuenta(){
    let cantidad, valor
    cantidad = document.getElementById("cantidad").value
    valor = document.getElementById("valor").value
    res2 = cantidad*valor
    respor = cantidad*valor *50 /100
    resfin = res2-respor
    document.getElementById("resdescuento-50").innerHTML = "<div> Queda en "+ resfin +"</div>"
}
function sindescuento(){
    let sin1, sin
    sin1 = document.getElementById("cantidad").value
    sin = document.getElementById("valor").value
    res3 = sin1*sin
    document.getElementById("ressindescuento").innerHTML = "<div> Queda en "+ res3 +"</div>"
}
function verFicha(){
    let n1, cubo
    n1 = document.getElementById("numero1").value
    cubo = n1*n1*n1
    document.getElementById("respuesta-n1").innerHTML = "<div>"+ cubo +"</div>"
}