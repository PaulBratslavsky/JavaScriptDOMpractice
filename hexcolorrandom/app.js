console.log('connected...');

(function() {
  const rootDiv = document.getElementById('root');
  console.log(rootDiv);  

  const showHexValue = document.getElementById('showHexValue');
  console.log(showHexValue);

  const button = document.getElementById('button');
  console.log(button);

  button.addEventListener('click', createHex);

  function changeBackgroundCollor(color) {
    console.log(`Background will change to ${color}`);
    rootDiv.style.backgroundColor = color;
  }

  function showHexColor(color) {
    showHexValue.innerHTML = `<h1>${color}</h1>`
  }


  function createHex() {
    const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    console.log(hexValues);

    let hexColor = '#';

    for ( let i = 0; i < 6; i++) {
      
      let random = Math.floor(Math.random() * hexValues.length);
      console.log(i, random);

      hexColor += hexValues[random];

    }

    console.log(hexColor);
    changeBackgroundCollor(hexColor);
    showHexColor(hexColor);
  }
  
}());