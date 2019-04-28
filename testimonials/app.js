(function() {
  console.log('ready');

  let customers = [];
  let index = 0;
  
  // create object constructor function
  function createNewCustomer(img, name, text) {
    this.img = img;
    this.name = name;
    this.text = text;
  }

  // create customer function
  function createCustomeTestimonial(img,name,text) {
    let fullImage = `img/${img}.jpg`;

    // create new customer object
    const customer = new createNewCustomer(fullImage,name,text);
    
    // add new customer to array
    customers.push(customer);
  }

  // Testimonial 
  createCustomeTestimonial('carone','Paul Brats','Best programmer ever');
  createCustomeTestimonial('cartwo','Ariya','Best fiance ever');
  createCustomeTestimonial('carthree','My Cat','Best cat ever');

  console.log(customers);

  // initial testimonial
  document.getElementById('testImage').src = customers[index].img;
        document.getElementById('testName').textContent = customers[index].name;
        document.getElementById('testContent').textContent = customers[index].text;
  
  // select buttons 
  const button = document.querySelectorAll('.button');
  console.log(button);

  button.forEach( btn => {

    btn.addEventListener('click', (event) => {
      if ( event.target.classList.contains('backButton') ) {
        index--;

        if ( index < 0 ) {
          index = customers.length - 1;
        }

        console.log(customers[index].img);
        console.log(customers[index].name);
        console.log(customers[index].text);

        document.getElementById('testImage').src = customers[index].img;
        document.getElementById('testName').textContent = customers[index].name;
        document.getElementById('testContent').textContent = customers[index].text;

        console.log('back button clicked');

      } else if ( event.target.classList.contains('nextButton') ) {
        index++;

        if ( index > customers.length -1 ) {
          index = 0;
        }

        console.log(customers[index].img);
        console.log(customers[index].name);
        console.log(customers[index].text);

        document.getElementById('testImage').src = customers[index].img;
        document.getElementById('testName').textContent = customers[index].name;
        document.getElementById('testContent').textContent = customers[index].text;

        console.log(index);
        console.log('next button clicked');
      }
    });
  });




})();