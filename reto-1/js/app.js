// Variables
let button = document.getElementById('get-answer');
let maxNumberSpan = document.getElementById('max-number');
let minNumberSpan = document.getElementById('min-number');
let secondMaxNumberSpan = document.getElementById('second-max-number');
// Evento click
button.addEventListener('click', function() {
  // console.log(button);
  let numbers = [45, 75, 200, 256, 1, 27];
  let MAX = numbers[0];
  let SECONDMAX = numbers[0];
  let MIN = numbers[0];
  // Recorriendo el array
  for(var i = 0; i < numbers.length ; i++) {
    debugger;
    console.log(numbers[i]);
    // Comparando
    if(numbers[i] > MAX) {
      SECONDMAX = MAX;
      MAX = numbers[i];
    } else if(numbers[i] < MAX && numbers[i] > SECONDMAX) {
      SECONDMAX = numbers[i];
    } else if (numbers[i] < MAX && numbers[i] < SECONDMAX && numbers[i] <= MIN) {
      MIN = numbers[i];
    } else {
      console.log('Este número no es el menor ni el mayor.');
      MIN = MIN;
      MAX = MAX;
      SECONDMAX = SECONDMAX;
      console.log(SECONDMAX);
    }
  }
  // Colocando los valores obtenidos en sus respectivos contenedores
  maxNumberSpan.textContent = MAX;
  minNumberSpan.textContent= MIN;
  secondMaxNumberSpan.textContent = SECONDMAX;
});
