//Guardar el estado de columna activa
//let tipo de variable de bloque
let columnaActiva = 1; //andamos chequeado el indice de la columna activa

//* Tomar las columnas del documento html*
//Selecciona los elementos con .columna y guardalos en columnas
const columnas = document.querySelectorAll('.columna'); 

//Escuchar los click en cada una de ellas
//Repetir acciones con forEach (por cada columna y con su indice voy a ecuchar el cick)
columnas.forEach((columna, indice) => {
    columna.addEventListener("click", function () {
        cambiarEstado(indice);
    });
});

//Cambiar el estado de las columnas
function cambiarEstado(indice) {
    columnas[columnaActiva].classList.remove("activa");
    columnas[indice].classList.add("activa");
    columnaActiva = indice;
}

const btnDrowBottom = document.querySelectorAll('.drow');
const btnDrowTop = document.querySelectorAll('.drowTop');
const desktop = document.querySelectorAll('.desktop');
const mobile = document.querySelectorAll('.mobile');

btnDrowBottom.forEach((drow, indice) => {
    drow.addEventListener("click", function (){
        desktop[indice].classList.add("desplegar");
        mobile[indice].classList.add("plegar");
    })
});

btnDrowTop.forEach((drow, indice) => {
    drow.addEventListener("click", function (){
        desktop[indice].classList.remove("desplegar");
        mobile[indice].classList.remove("plegar");
    })
});



