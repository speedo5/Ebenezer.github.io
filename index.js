function showDiv() {
  // Get a reference to the div element
  const myDiv = document.getElementById("myDiv");

  // Change the display property to make it visible
  myDiv.style.display = "block";
}
       // Optionally, you can clear the interval after a certain number of iterations
        // For example, to stop after 10 background changes:
        // let iterations = 0;
        // const maxIterations = 10;
        // const interval = setInterval(() => {
        //     changeBackground();
        //     iterations++;
        //     if (iterations === maxIterations) {
        //         clearInterval(interval);
        //     }
        // }, 5000);