const sheets = document.querySelector('#sheets');
const prueba = document.querySelector('#prueba')
const paper = document.querySelector('#paper');
const copies = document.querySelector('#copies')
const total = document.querySelector('#total')
const bton = document.querySelector('#btnCalcular')
const priceQuimPaper = 0.06
const priceBondPaper = 0.05



    function btnOnClick() {
        if (paper.value == 'quimico'){
            const sumaDatos = sheets.value * copies.value * priceQuimPaper;
        total.innerText = "$" +  sumaDatos;

        } else if (paper.value == 'bond2'){
            const sumaDatos = sheets.value * copies.value * priceBondPaper;
        total.innerText = "$" + sumaDatos;
        }else {
            const sumaDatos = sheets.value * priceBondPaper * 1 ;
        total.innerText = "$" + sumaDatos;
        }
        
    }


