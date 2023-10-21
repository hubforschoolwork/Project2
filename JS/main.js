
//Click Listener

document.addEventListener("click", function (event) {
    // Checking if the button was clicked
    if (!event.target.matches("#button")) return;
  
    console.log("Button was clicked!");
  });


//Fetch

fetch("<https://official-joke-api.appspot.com/random_joke>")
.then((response) => response.json())
.then((data) => renderJoke(data));
.catch(() => renderError());
});


//Taking object received from Endpoint and add elements InnerHTML

function renderJoke(data) {
    //Getting elements
    
    const setup = document.getElementById("setup");
    const punchline = document.getElementById("punchline");

    const error = document.getElementById("error");
    error.innerHTML = "";

    setup.innerHTML = data.setup;
    punchline.innerHTML = data.punchline;
  }



  function renderError() {
    const error = document.getElementById("error");
    error.innerHTML = "Whoops, something went wrong. Please try again later!";
  }



  