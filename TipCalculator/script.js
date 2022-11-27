// Variables para ingresar los datos de los campos, # indica que estoy buscando por id
let campoTotalCuenta = document.querySelector('#total-cuenta'); // El total de la consumición
let campoTotalPropina = document.querySelector('#propina'); // cual es el % de la propina
let campoNumeroComensales = document.querySelector('#numero-comensales'); // cuantos comensales son
let campoTotalCadaComensal = document.querySelector('#precio-comensal'); //cuanto paga cada comensal

// Variables para guardar los valores numéricos de los campos
let totalCuenta = 0; // El total de la consumición
let totalPropina = 0; // cual es el % de la propina
let numeroComensales = 1; // cuantos comensales son
let totalCadaComensal = 0; //cuanto paga cada comensal

// cada vez que ingreso un valor se activa esta función y obtengo el numero que ingrese
calculaCuenta = () => { 
console.log(montoPagar);
console.log(propina);
cadaComensal = totalCuenta*( 1 + totalPropina/100) / totalComensales;
console.log(cadaComensal);
// cadaComensal.setAttribute('value', propina); // envío el valor de los comensales
} 

// Si quiero obtener el valor ingresado cuando presiono Enter en vez de cuando presiono digito a digito
var input = document.getElementById("total-cuenta"); 
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") { 
    event.preventDefault();
    montoPagar = (Number(campoTotalCuenta.value));
  }
  calculaCuenta();
});

var input = document.getElementById("propina"); 
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") { 
    event.preventDefault();
    propina = (Number(totalPropina.value));
  }
  calculaCuenta();
});

masComensales = () => {
    numeroComensales++;
    console.log(numeroComensales);
    totalComensales.setAttribute('value', numeroComensales); // envío el valor de los comensales
    calculaCuenta(); 
}

menosComensales = () => {
    numeroComensales--;
    if(numeroComensales <= 1){
        numeroComensales = 1;
    }
    console.log(numeroComensales);
    totalComensales.setAttribute('value', numeroComensales); // envío el valor de los comensales
    calculaCuenta();
}



