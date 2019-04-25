console.log("connected");

// Not to polute the local scope we create an imemdiate invoking function.
(() => {

  // colors
  const colors = ['yellow', 'green', 'blue', 'orange', '#f15025', 'rgba(125,125,125,0.5)'];
  const arrayLength = colors.length;

  // target elements
  const mainDiv = document.getElementById('root');
  const button = document.getElementById('button');
  const showColor = document.getElementById('showColor');

  // generate random number based on array length
  const getRandomNumber = (arrayLength) => Math.floor( (Math.random() * arrayLength) );

  // event listener
  button.addEventListener('click', changeColor);
  
  // change colors vis style attribute
  function changeColor() { 
    const arrayIndex = colors[getRandomNumber(arrayLength)];
    showColor.innerHTML = `<h1>${arrayIndex}</h1>`;
    mainDiv.style.backgroundColor = arrayIndex; 
    console.log(showColor);
    
  }


})();
