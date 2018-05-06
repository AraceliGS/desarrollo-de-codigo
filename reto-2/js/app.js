window.addEventListener('load', function() {
  // Variables
  let button = document.getElementById('get-solutions');
  let longestNameSpan= document.getElementById('longest-name')
  button.addEventListener('click', function() {
    let names = ['erik', 'leonardo', 'andres', 'gerardo', 'jan', 'renzo'];
    let namesLength = [];
    let letters;
    // Bucles para hallar el nmúmero de caracteres de cada palabra
    for(var i = 0; i < names.length; i++) {
      letters = names[i];
      let wordLength = 0;
      for(var k = 0; k < letters.length; k++) {
         wordLength = wordLength + 1;
      };
      namesLength.push(wordLength);
    };
    console.log(namesLength);
    // Hallando la palabra con más caracteres
    let maxLengthIndex = 0;
    for(var i = 0; i < namesLength.length ;i++) {
      if (namesLength[i] >= namesLength[maxLengthIndex]) {
        maxLengthIndex = i;
      } else {
        maxLengthIndex;
      }
    }
    console.log(maxLengthIndex);
    console.log(names[maxLengthIndex]);
    longestNameSpan.textContent = names[maxLengthIndex];
  });
});
