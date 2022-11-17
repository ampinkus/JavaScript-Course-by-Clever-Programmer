/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/


  //Add function here
  let sumArrow = (a, b) => a + b;



  //Subtract function here
  let substractArrow = (a, b) => a - b;



  //Divide function here
  let divideArrow = (a, b) => {
    if (b == 0) {
      return "divide by zero";
    } else return a / b;
  };

  //Multiply function here
  let multiplyArrow = (a, b) => a * b;


console.log("hello from the SUM exercise");
/* 
  TODO: create a function that console logs the result of any of the above operations.
*/

console.log(sumArrow(10, 5));
console.log(substractArrow(10, 5));
console.log(divideArrow(10, 0));
console.log(multiplyArrow(10, 5));
