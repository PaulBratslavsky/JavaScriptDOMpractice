console.log("connected");

// colors
const colors = ['yellow', 'green', 'blue', 'orange', '#f15025', 'rgba(125,125,125,0.5)'];
const arrayLength = colors.length;

// target elements
const mainDiv = document.getElementById('root');
const button = document.getElementById('button');
const showColor = document.getElementById('showColor');

// generate random number based on array length
const getRandomNumber = (arrayLength) => Math.floor( (Math.random() * arrayLength) );

// change colors vis style attribute
const changeColor = () => { 
  const arrayIndex = colors[getRandomNumber(arrayLength)];
  showColor.innerHTML = `<h1>${arrayIndex}</h1>`;
  mainDiv.style.backgroundColor = arrayIndex; 
  console.log(showColor);
  
}

// event listener
button.addEventListener('click', changeColor);

