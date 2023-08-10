function VT(){
    let cantidad1,valor1,cantidad2,valor2
    cantidad1 = document.getElementById("cantidad1").value
    valor1 = document.getElementById("valor1").value
    cantidad2 = document.getElementById("cantidad2").value
    valor2 = document.getElementById("valor2").value
    restotal1 = cantidad1*valor1
    document.getElementById("valor").innerHTML="<div>"+ restotal1+"</div>"
    restotal2 = cantidad2*valor2
    document.getElementById("valor1").innerHTML="<div>"+ restotal2+"</div>"
    fin = restotal1+restotal2;
    document.getElementById("valor total").innerHTML="<div>Su valor total es:  "+ fin+"</div>"
    
    }
    
    function FA(){
        let cantidad1,valor1
        cantidad1 = document.getElementById("cantidad1").value
        valor1 = document.getElementById("valor1").value
        restotal= cantidad1
        restotal1 = cantidad1*valor1
        document.getElementById("factura1").innerHTML="<div>Valor del producto 1:  "+ restotal1+"</div>"
        document.getElementById("factura3").innerHTML="<div>Cantidad del producto 1:  "+ restotal+"</div>"
    
        let cantidad2,valor2
        cantidad2 = document.getElementById("cantidad2").value
        valor2 = document.getElementById("valor2").value
        restotal= cantidad2
        restotal2 = cantidad2*valor2
        document.getElementById("factura2").innerHTML="<div>Valor del producto 2:  "+ restotal2+"</div>"
        document.getElementById("factura4").innerHTML="<div>Cantidad del producto 2:  "+ restotal+"</div>"
        
        fin = restotal1+restotal2;
        document.getElementById("factura").innerHTML="<div>El valor total por los dos productos es de:  "+ fin+"</div>"
    
    
    
    }