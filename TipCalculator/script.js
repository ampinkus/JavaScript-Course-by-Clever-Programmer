// defino las variables
let montoPagar = 0; // monto a pagar
let propina = 0; // cual es el % de la propina
let numeroComensales = 1; // cuantos comensales son
let costoComensal = 0; //cuanto paga cada comensal

 // # indica que estoy buscando por id
let totalCuenta = document.querySelector('#total-cuenta');
let totalPropina = document.querySelector('#propina');
let totalComensales = document.querySelector('#numero-comensales');
let cadaComensal = document.querySelector('#precio-comensal');

// cada vez que ingreso un valor se activa esta función y obtengo el numero que ingrese
calculaCuenta = () => { 
console.log(montoPagar);
console.log(propina);
cadaComensal.setAttribute('value', propina); // envío el valor de los comensales
} 

// Si quiero obtener el valor ingresado cuando presiono Enter en vez de cuando presiono digito a digito
var input = document.getElementById("total-cuenta"); 
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") { 
    event.preventDefault();
    montoPagar = (Number(totalCuenta.value));
  }
});

var input = document.getElementById("propina"); 
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") { 
    event.preventDefault();
    propina = (Number(totalPropina.value));
  }
});

masComensales = () => {
    numeroComensales++;
    console.log(numeroComensales);
    totalComensales.setAttribute('value', numeroComensales); // envío el valor de los comensales
   
}

menosComensales = () => {
    numeroComensales--;
    if(numeroComensales <= 1){
        numeroComensales = 1;
    }
    console.log(numeroComensales);
    totalComensales.setAttribute('value', numeroComensales); // envío el valor de los comensales
}



