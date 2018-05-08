window.addEventListener('load', function() {
  // Variables
  var getLongestNameButton = document.getElementById('get-solution-1');
  var longestNameSpan= document.getElementById('longest-name')
  var namesList = document.getElementById('names-list');
  var orderArrayList = document.getElementById('get-solution-2');
  // Función para hallar la palabra más larga
  function longestWord(array) {
    var names = array;
    var namesLength = [];
    var letters;
    // Bucles para hallar el nmúmero de caracteres de cada palabra
    for(var i = 0; i < names.length; i++) {
      letters = names[i];
      var wordLength = 0;
      for(var k = 0; k < letters.length; k++) {
         wordLength = wordLength + 1;
      };
      namesLength[i] = wordLength;
      //console.log(namesLength);
    };
    // Hallando la palabra con más caracteres
    var maxLengthIndex = 0;
    for(var i = 0; i < namesLength.length ; i++) {
      if (namesLength[i] >= namesLength[maxLengthIndex]) {
        maxLengthIndex = i;
      } else {
        maxLengthIndex;
      }
    }
    console.log(names[maxLengthIndex]);
    longestNameSpan.textContent = names[maxLengthIndex];
  }
  // Función para ordenar el arreglo firstWords de forma ascendente
  function sortInAscendingOrder(array, index, minWord) {
    // Bucle para comparar que letra es menor
    for(var k = 0; k < array.length; k++) {
      if(minWord < array[k]) {
        array[index] = array[k];
        array[k] = minWord;
        minWord = array[index];
      } else {
        minWord;
      }
     }
  }
  // Evento click para el botón OBTENER
  getLongestNameButton.addEventListener('click', function() {
    longestWord(['erik', 'leonardo', 'andres', 'gerardo', 'jan', 'renzo']);
  });
  // Evento click para el botón ORDENAR
  orderArrayList.addEventListener('click', function() {
    var arrayOfWords = ['erik', 'leonardo', 'andres', 'gerardo', 'jan', 'renzo'];
    var firstWords = [];
    var word;
    // Bucle para obtener la primera letra de cada palabra
    for(var i = 0; i < arrayOfWords.length; i++) {
      //debugger;
      word = arrayOfWords[i];
      var minWord = word;
      firstWords[i] = minWord;
      sortInAscendingOrder(firstWords, i, minWord);
    }
    console.log(firstWords);
    for(var i = 0; i < firstWords.length; i++) {
      debugger;
      var li = `<li class="item" id=${i}>${firstWords[i]}</li>`;
      namesList.innerHTML += li;
    }
    console.log(namesList);
  });
});
