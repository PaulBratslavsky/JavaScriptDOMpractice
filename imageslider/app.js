(function() {
  console.log('ready');

  const carPictures = [
    'carone',
    'cartwo',
    'carthree',
    'carfour',
    'carfive',
    'carsix'
  ]

  let counter = 0;

  const imageContainer = document.querySelector('.imageContainer');
  console.log(imageContainer);

  // set initial image 
  imageContainer.style.background = `url('img/${carPictures[counter]}.jpg') center/cover fixed no-repeat`;

  // querySelectorAll allows us to use forEach method
  const button = document.querySelectorAll('button');

  button.forEach( btn => {
    btn.addEventListener('click', function() {
      let value = event.target;

      if ( value.classList.contains('backButton') ) {

        counter--;

        if ( counter < 0 ) {
          counter = carPictures.length - 1;
        }

        imageContainer.style.background = `url('img/${carPictures[counter]}.jpg') center/cover fixed no-repeat`;
        
      } else if ( value.classList.contains('nextButton') ) {
        
        
        counter++;

        if ( counter > carPictures.length - 1) {
          counter = 0;
        }

        imageContainer.style.background = `url('img/${carPictures[counter]}.jpg') center/cover fixed no-repeat`;

      }
    })
  });

})();