


let papers = document.getElementById ("opPaper").value.toLowerCase();
let paperSize = document.getElementById ("opSize").value.toLowerCase();
let sheets = document.getElementById ("opSheets").value;
let numberSheets = document.getElementById ("amount").value;

let isQuimico = document.getElementById('quimico').checked;
let isHalfCarta = document.getElementById('halfCarta').checked

let chemicalPrice = 0.01;
let halfChemPrice = 0.005;
let bondPrice = 0.011;
let halfBondPrice = 0.0055;
let gain = 2.5;
let copies;
let totalSheets;

//agregar costos operacionales a las variables para aumentar precios y tambien IVA
function quimicoHalf(){
  if (isQuimico && isHalfCarta) {
    const result = (sheets * numberSheets) * (halfChemPrice * gain);
    document.getElementById("total").innerHTML = result  // multiplicar por iva
  } else if (papers == "bond" && paperSize == "media carta") {
    const result = (sheets * numberSheets) * (halfBondPrice * gain);
    console.log(result);// multiplicar por iva
  } else {
    alert("introduzca datos");
  }
}
//if (isQuimico && isHalfCarta) {
  //const result = (sheets * numberSheets) * (halfChemPrice * gain);
  //document.getElementById("total").innerHTML = result  // multiplicar por iva
//} else if (papers == "bond" && paperSize == "media carta") {
  //const result = (sheets * numberSheets) * (halfBondPrice * gain);
  //console.log(result);// multiplicar por iva
//} else {
  //alert("introduzca datos");
//}

