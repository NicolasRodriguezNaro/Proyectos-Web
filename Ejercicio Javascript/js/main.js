// EJERCICIO
// Preguntar a un estudiante si desea agregar, eliminar o modificar
// una nota. Al leer la nota se debe RECALCULAR y MOSTRAR 
// el promedio del curso.
// Repetir la acción hasta que se indique que no se desean 
// agregar mas notas
// Al finalizar mostrar el promedio del curso.
//-----------------------------------------

const notas=[];
let sumatoria = 0;
let i=0;

let nota = prompt("Desea agregar alguna nota (s/n)");

while(nota=="s"){
    nota = Number.parseFloat(prompt("Digite la nota"));
    notas.push(nota);

    sumatoria+= notas[i];
    i++;

    alert("El promedio es: "+(sumatoria/notas.length));

    nota = prompt("Desea ingresar otra nota? (s/n)");
}

alert("El promedio del curso es: "+ (sumatoria/notas.length));