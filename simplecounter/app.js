(function(){
  console.log('ready');

  // const addButton = document.getElementById('addButton');
  // const subtractButton = document.getElementById('subtractButton');

  const showCount = document.getElementById('showCount');
  const counterButton = document.querySelectorAll('.counterButton');
  console.log(showCount); 
  console.log(counterButton);

  showCount.style.fontSize = '8rem';
  let count = 0;

  counterButton.forEach( (btn) => {

    btn.addEventListener('click', (event) => {
      // Get value of button clicke
      const value = event.target;

      // Check Value and trigger oppropriate function
      if ( value.classList.contains('addButton') ) {
        count++;
        showCount.textContent = count;
        console.log('You clicked Add button');
      } else {
        count--;
        showCount.textContent = count;
        console.log('You clicked Subtract button');
      }

      // change color 
      if ( count > 0) {
        showCount.style.color = 'green';
      } else if ( count < 0 ) {
        showCount.style.color = 'red';
      } else {
        showCount.style.color = 'white';
      }

    });
  });

/*
  addButton.addEventListener('click', function() {
    count++;
    showCount.textContent = count;
    console.log('Add Button Clicked');
  });

  subtractButton.addEventListener('click', function() {
    count--;
    showCount.textContent = count;
    console.log('Subtract Button Clicked');
  });

  */

   
   

})();