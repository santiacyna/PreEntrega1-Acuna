
const valorMinimo = parseInt(prompt("Ingrese el número mínimo:"));
const valorMaximo = parseInt(prompt("Ingrese el número máximo:"));

let sumaPares = 0;
let sumaImpares = 0;

for (let i = valorMinimo; i <= valorMaximo; i++) {
  if (i % 2 === 0) {
    sumaPares += i;
  } else {
    sumaImpares += i;
  }
}

alert(`La suma de todos los números pares da ${sumaPares}`);
alert(`La suma de todos los números impares da ${sumaImpares}`);

  




