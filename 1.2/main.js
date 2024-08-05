//Things done in class-> 

console.log("hello world")

var a =1 ;
a =2;

console.log(a);

let b = 1;
b = 2;
console.log(b);


let firstName = "Kushagra";
let age = 23;
let isMarried = true;

if (isMarried == true) {
  console.log(firstName + " is married");
} else {
  console.log(firstName + " is not married");
}


// Arrays -> 

let person1= "kush";
let person2= "kush2";
let person3= "kush3";

//OR

const personArray = ["kush", "kush1", "kush2"];
console.log(personArray[0]);
console.log(personArray[1]);
console.log(personArray[2]);


//array of objects-> 

const users1 = [1,2,3];   // array of numbers
const users2= ["raman", "kush", "sejal"] // array of strings

const allUsers = [{
          firstName : "raman",
          gender : "male"
      }, {
          firstName : "Kush",
          gender : "male"
      }, {
        firstName : "Kush",
        gender : "male"
    }
];

for (let i = 0 ; i < allUsers.length; i++ ){
  if(allUsers[i]["gender"] == "male"){
    console.log(allUsers[i]["firstName"]);
  }
}     



//functions-> 



// function sum (number1, number2){

//   return number1 + number2 ;
// }

// const value = sum(1,2);
// console.log (value);



function sum(num1, num2) {
  let result = num1 + num2;
  return result;
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum

let value = displayResultPassive(sum(2,3));


//setTimeout - used to call a function after a certain duration.

function greet () {
    console.log ("Hello World");
}
setTimeout(greet, 3000);