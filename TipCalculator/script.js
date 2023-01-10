// Variables para ingresar los datos de los campos, # indica que estoy buscando por id
let campoTotalCuenta = document.querySelector("#total-cuenta"); // Campo del total de la consumición
let campoTotalPropina = document.querySelector("#propina"); // Campo cual es el % de la propina
let campoNumeroComensales = document.querySelector("#numero-comensales"); // Campo cuantos comensales son
let campoTotalCadaComensal = document.querySelector("#precio-comensal"); //Campo cuanto paga cada comensal
let textoInicial =  document.querySelector("#texto-inicial");

// Variables para guardar los valores numéricos de los campos
let totalCuenta = 0; // El total de la consumición
let totalPropina = 0; // cual es el % de la propina
let numeroComensales = 1; // cuantos comensales son
let totalCadaComensal = 0; //cuanto paga cada comensal

// calculo el total para cada comensal y lo presento en el campo de cada comensal
calculaCuenta = () => {
  totalCadaComensal =
    (totalCuenta * (1 + totalPropina / 100)) / numeroComensales;
  // envío el costo para cada comensal con value indico que el atributo que modifico es el valor del campo
  campoTotalCadaComensal.setAttribute("value", totalCadaComensal.toFixed(2)); 
};

//obtengo el valor ingresado en los campos "Total Cuenta" y "Propina" cuando presiono Enter
var input = document.getElementById("total-cuenta");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    totalCuenta = Number(campoTotalCuenta.value);
  }
  calculaCuenta();
});

var input = document.getElementById("propina");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    totalPropina = Number(campoTotalPropina.value);
  }
  calculaCuenta();
});

// agrego un comensal mas y vuelvo a calcular la cuenta
masComensales = () => {
  numeroComensales++;
  campoNumeroComensales.setAttribute("value", numeroComensales); // envío el valor de los comensales
  calculaCuenta();
};

// elimino un comensal y vuelvo a calcular la cuenta
menosComensales = () => {
  numeroComensales--;
  if (numeroComensales <= 1) {
    numeroComensales = 1;
  }
  campoNumeroComensales.setAttribute("value", numeroComensales); // envío el valor de los comensales
  calculaCuenta();
};

// inserto el mensaje en el campo texto-inicial del HTML
message = () => { 
  textoInicial.innerHTML =
    'Ingrese el Total de la Cuenta y el % de Propina <br> presione ENTER luego de cada ingreso.<br>Con los botones elija el número de comensales.<br>El total a pagar se ve en el campo "Cada Comensal $"'
};
