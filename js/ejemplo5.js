const a = document.querySelector("#dato1")
const b = document.querySelector("#dato2")
const c = document.querySelector("#dato3")
const d = document.querySelector("#dato4")
const dm = document.querySelector("#dato45")
const e = document.querySelector("#dato5")
const f = document.querySelector("#dato6")
const g = document.querySelector("#dato7")
const h = document.querySelector("#dato8")
const i = document.querySelector("#dato9")
const j = document.querySelector("#dato10")
const k = document.querySelector("#dato11")
const l = document.querySelector("#dato12")
const m = document.querySelector("#dato13")
const n = document.querySelector("#dato14")


/* const p = document.querySelector("#dato16") */



function getFicha(){
let uno, dos, tres, cuatro, cuatrom, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce
uno = document.getElementById("nom_producto").value
dos = document.getElementById("linea").value
tres = document.getElementById("versiones").value
cuatro = document.getElementById("version").value
cuatrom = document.getElementById("modulo").value
cinco = document.getElementById("descripcion").value
seis = document.getElementById("descripciones").value
siete = document.getElementById("productor").value
ocho = document.getElementById("producto").value
nueve = document.getElementById("otro").value
diez = document.getElementById("requerimiento").value
once = document.getElementById("requerimientos").value
doce = document.getElementById("cliente").value
trece = document.getElementById("recomendaciones").value
catorce = document.getElementById("funcion").value


// localstorege
localStorage.setItem("Nombre del Producto",uno);
localStorage.setItem("Nombre del cliente",dos);
localStorage.setItem("Numero de Producto",tres);
localStorage.setItem("Version de Producto",cuatro);
localStorage.setItem("modulo",cuatrom);
localStorage.setItem("Descripcion General",cinco);
localStorage.setItem("Tipo de Arquitectura",seis);
localStorage.setItem("Requerimiento físico",siete);
localStorage.setItem("Requerimiento lógico",ocho);
localStorage.setItem("Recomendaciones sistema",nueve);
localStorage.setItem("Requerimiento sistema",diez);
localStorage.setItem("Funciones adicionales",once);
localStorage.setItem("Caracteristicas cliente",doce);
localStorage.setItem("recomendaciones",trece);
localStorage.setItem("funciones del sistema",catorce);


//limpiando los campos o inputs
document.getElementById("nom_producto").value = "";
document.getElementById("linea").value = "";
document.getElementById("versiones").value = "";
document.getElementById("version").value = "";
document.getElementById("modulo").value = "";
document.getElementById("descripcion").value = "";
document.getElementById("descripciones").value = "";
document.getElementById("productor").value = "";
document.getElementById("producto").value = "";
document.getElementById("otro").value = "";
document.getElementById("requerimiento").value = "";
document.getElementById("requerimientos").value = "";
document.getElementById("cliente").value = "";
document.getElementById("recomendaciones").value = "";
document.getElementById("funcion").value = "";

}


function getcargar(){
let uno, dos, tres, cuatro, cuatrom, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince, di 
uno = localStorage.getItem("Nombre del Producto");
dos = localStorage.getItem("Nombre del cliente");
tres = localStorage.getItem("Numero de Producto");
cuatro = localStorage.getItem("Version de Producto");
cuatrom = localStorage.getItem("modulo");
cinco = localStorage.getItem("Descripcion General");
seis = localStorage.getItem("Tipo de Arquitectura");
siete = localStorage.getItem("Requerimiento físico");
ocho = localStorage.getItem("Requerimiento lógico");
nueve = localStorage.getItem("Recomendaciones sistema");
diez = localStorage.getItem("Requerimiento sistema");
once = localStorage.getItem("Funciones adicionales");
doce = localStorage.getItem("Caracteristicas cliente");
trece = localStorage.getItem("recomendaciones");
catorce = localStorage.getItem("funciones del sistema");


//mostrar datos
a.innerHTML = uno;
b.innerHTML = dos;
c.innerHTML = tres;
d.innerHTML = cuatro;
dm.innerHTML = cuatrom;
e.innerHTML = cinco;
f.innerHTML = seis;
g.innerHTML = siete;
h.innerHTML = ocho;
i.innerHTML = nueve;
j.innerHTML = diez;
k.innerHTML = once;
l.innerHTML = doce;
m.innerHTML = trece;
n.innerHTML = catorce;
}

function clearlocalStorage(){
    localStorage.clear();
}
