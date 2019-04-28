(function() {
  console.log('ready');

  // select elements to use
  const message = document.getElementById('message');
  const feedback = document.querySelector('.feedback');
  const submit_message = document.getElementById('submit_form');
  const show_message = document.querySelector('.show_message');

  console.log(message);
  console.log(feedback);
  console.log(submit_message);
  console.log(show_message);
  

  function submitMessage(e) {
    e.preventDefault();

    let value = message.value;

    if ( value === '' ) {
      feedback.classList.add('show');
      setTimeout(function() { feedback.classList.remove('show'); }, 1000);
    } else {
      show_message.textContent = message.value;
      message.value = "";     
      console.log('Message Submitted');
    }
 
  }

  submit_message.addEventListener('submit', submitMessage);

})(); 