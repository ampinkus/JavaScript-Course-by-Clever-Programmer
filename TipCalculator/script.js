// defino las variables
let totalCuenta = 0; // monto a pagar
let propina = 0; // cual es el % de la propina
let numeroComensales = 1; // cuantos comensales son
let costoComensal = 0; //cuanto paga cada comensal

totalCuenta = document.querySelector('#total-cuenta');

calculaCuenta = () => {
console.log(Number(totalCuenta.value));
} 


masComensales = () => {
    numeroComensales++;
    console.log(numeroComensales);
}

menosComensales = () => {
    numeroComensales--;
    if(numeroComensales <= 1){
        numeroComensales = 1;
    }
    console.log(numeroComensales);
}



