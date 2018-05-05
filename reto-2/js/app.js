window.addEventListener('load', function() {
  // Variables
  let button = document.getElementById('get-solutions');
  let longestNameSpan= document.getElementById('longest-name')
  button.addEventListener('click', function() {
    // console.log('Hicistes click');
    let names = ['erik', 'leonardo', 'andres', 'gerardo', 'jan', 'renzo'];
    let namesLength = [];
    for(var i = 0; i < names.length; i++) {
      let letters = names[i].split('');
      console.log(letters);
      for(var i = 0; i < letters.length; i++) {
        
      };
    };
  });
});
