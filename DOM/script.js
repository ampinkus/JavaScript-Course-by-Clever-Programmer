console.log("Hello");
// we can modify dinamicaly a text using id's to identify them
let titleDiv = document.getElementById("title"); //titleDiv is the tag with id 'title'
console.log("before: ", titleDiv.innerText); //we can get the text from the tag with the title id
titleDiv.innerText = "Goodbye!"; // modify the text inside h2
console.log("after: ", titleDiv.innerText); //after modifying the Text

let message = "Click on a button!";
let blockMessage = ""; // the message we put below a block

titleDiv.innerHTML = `<p><h2>${message}</h2></p>`; //we change the text and the HTML code, we use template literals
titleDiv.style.color = "red"; // change the color to red using title.Div

// get all the elements of the class .square (use a dot) in a node list called squares
const squares = document.querySelectorAll(".square");

// name a variable clickedBlock with the id 'blockText' to insert a text in the page below the boxes
let clickedBlock = document.getElementById("blockText");

// add on each box how many times we clicked on it
// create an object that saves the number of click, initial is zero
const timesClicked = { red: 0, yellow: 0, green: 0 };

// we use a forEach loop for each element with class .square
squares.forEach((square) => {
  // launch the function when we click on a square
  square.onclick = () => {
    console.log(square.value);
    timesClicked[square.value]++; // add one click on the color square
    square.innerText = timesClicked[square.value]; // put the value in the box
    clickedBlock.innerText = `You clicked on ${square.value}`; // modify the text of clickedBlock
  };
});

let resetGame = document.getElementById("clear-game"); // select the Reset button
resetGame.onclick = () => clearScore(); // when we click on the button invoque the clear the score function
// function that clears the score
function clearScore() {
  squares.forEach((square) =>  square.innerText = '');
}
