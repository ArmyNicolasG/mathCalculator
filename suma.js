//Version 1.0
//Buttons
var clearButton = document.getElementById('clearButtons');
clearButton.addEventListener('click', () => {
    sumBtn.innerHTML = "¡OPERATE!";
})
//Suma
var sumaNumbers = [];
sumBtn = document.getElementById('submitSuma');
sumBtn.addEventListener('click', () => {  
    sumaNumbers.push(parseInt(document.getElementById('input1suma').value));
    sumaNumbers.push(parseInt(document.getElementById('input2suma').value));
        console.log(sumaNumbers);
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
    submitSuma.innerHTML = sumaNumbers.reduce(reducer);
    sumaNumbers = [];
});
//Let array = document.getElementById(IdDelTag). querySelectorAll('input')