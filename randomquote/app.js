(function() {
  console.log('connected...');

  const quotes = [
    {
      quote:
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
      author: " Life"
    },
    {
      quote:
        "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
      author: "John Kenneth Galbraith"
    },
    {
      quote:
        "God save me from my friends. I can protect myself from my enemies.",
      author: "Claude Louis Hector de Villars "
    },
    {
      quote: "The price of anything is the amount of life you exchange for it.",
      author: "David Thoreau"
    },
    {
      quote:
        "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
      author: "Charles Lindbergh"
    },
    {
      quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author: " Tyne Daly"
    }
  ];

  const button = document.getElementById('button');
  const quote = document.getElementById('quote');
  const author = document.querySelector('.author');
  
  // generate random number
  function randomNumber(item) {
    random = Math.floor( Math.random() * item.length );
    console.log(random);
    return random;
  }

  // generate quote
  function generateQuote() {

    const random = randomNumber(quotes);

    quote.textContent = quotes[random].quote;
    author.textContent = quotes[random].author;
    
  }

  // handle button click
  button.addEventListener('click', generateQuote);

})();