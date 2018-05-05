window.addEventListener('load', function() {
  // Variables
  let button = document.getElementById('get-answer');
  let maxNumberSpan = document.getElementById('max-number');
  let minNumberSpan = document.getElementById('min-number');
  let secondMaxNumberSpan = document.getElementById('second-max-number');
  // Función orderNumbers
  function orderNumbers(arrayOfNumbers) {
    // console.log(button);
    let numbers = arrayOfNumbers;
    let max = numbers[0];
    let secondMax = numbers[0];
    let min = numbers[0];
    // Recorriendo el array
    for(var i = 0; i < numbers.length ; i++) {
      debugger;
      console.log(numbers[i]);
      // Comparando
      if(numbers[i] > max) {
        secondMax = max;
        max = numbers[i];
      } else if(numbers[i] < max && numbers[i] > secondMax) {
        secondMax = numbers[i];
      } else if (numbers[i] < max && numbers[i] < secondMax && numbers[i] <= min) {
        min = numbers[i];
      } else {
        console.log('Este número no es el menor ni el mayor.');
        min = min;
        max = max;
        secondMax = secondMax;
        console.log(secondMax);
      }
    }
    // Colocando los valores obtenidos en sus respectivos contenedores
    maxNumberSpan.textContent = max;
    minNumberSpan.textContent= min;
    secondMaxNumberSpan.textContent = secondMax;
  };

  // Evento click
  button.addEventListener('click', function() {
    orderNumbers([45, 75, 200, 256, 1, 27]);
  });
});
