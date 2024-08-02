//1. Write the program to greet a person given their first and last name
var fname = "Kush";
var lname = "Goel";

console.log("Welcome " + fname + lname);

//2. Write a program that greets a person based on their gender. (If else)

let firstName = "Kushagra";
let age = 23;
let gender = "male"; // Use a string for gender

if (gender === "male") {
  console.log("Welcome Mr." + firstName );
} else {
  console.log("Welcome Mrs." + firstName );
}

//3. Write a program that counts from 0 - 1000 and prints (for loop)

let count = 0;

for (let i = 0; i <= 1000; i++) {
  count = count + i;
}

console.log(count);
