console.log("connected");

// colors
const colors = ['yellow', 'green', 'blue', 'orange', '#f15025', 'rgba(125,125,125,0.5)'];
const arrayLength = colors.length;

// target elements
const mainDiv = document.getElementById('root');
const button = document.getElementById('button');

// generate random number based on array length
const getRandomNumber = (arrayLength) => Math.floor( (Math.random() * arrayLength) );

// change colors vis style attribute
const changeColor = () => { mainDiv.style.backgroundColor = colors[getRandomNumber(arrayLength)]; }

// event listener
button.addEventListener('click', changeColor);

