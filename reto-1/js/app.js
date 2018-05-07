window.addEventListener('load', function() {
  // Variables
  var button = document.getElementById('get-answer');
  var maxNumberSpan = document.getElementById('max-number');
  var minNumberSpan = document.getElementById('min-number');
  var secondMaxNumberSpan = document.getElementById('second-max-number');
  // Función orderNumbers
  function orderNumbers(arrayOfNumbers) {
    var numbers = arrayOfNumbers;
    var max = numbers[0];
    var secondMax = numbers[0];
    var min = numbers[0];
    // Recorriendo el array
    for(var i = 0; i < numbers.length ; i++) {
      // Comparando
      if(numbers[i] > max) {
        secondMax = max;
        max = numbers[i];
      } else if(numbers[i] < max && numbers[i] > secondMax) {
        secondMax = numbers[i];
      } else if (numbers[i] < max && numbers[i] < secondMax && numbers[i] <= min) {
        min = numbers[i];
      } else {
        min;
        max;
        secondMax;
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
