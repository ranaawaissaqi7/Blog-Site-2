const counterElement1 = document.getElementById('counter1');
const counterElement2 = document.getElementById('counter2');
const counterElement3 = document.getElementById('counter3');

let counter = 0;
const targetLength = 100;

// Define a function to increment the counter and update the display
function incrementCounter() {
  counter++;
  counterElement1.innerText = `${counter}+`;
  counterElement2.innerText = `${counter}+`;
  counterElement3.innerText = `${counter-10}+`;

  // Stop the counter when it reaches the target length
  if (counter >= targetLength) {
    clearInterval(interval);
  }
}

// Start the counter with an interval of 100 milliseconds
const interval = setInterval(incrementCounter, 100);


