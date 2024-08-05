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