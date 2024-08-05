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

//4. Write a program that counts from 0 - 10000 and prints (for loop)


let count1= 0; 
for (let i = 0 ;  i < 10000 ; i++ ){
  count1 = count1 + i ;
}

console.log (count1);



// COMPLEX PRIMITIVES - ARRAYS
// 1. Write a program prints all the even numbers in an array 

const numbers = [21,22,23,24,25];

for (let i = 0; i<numbers.length ; i ++){

    if (numbers[i] % 2 == 0){
      console.log(numbers[i]);
    }
}
 

//2. Write a program to print the biggest number in an arrya 
let max = numbers[0];
for (let i = 1 ; i<numbers.length; i++){
  if (numbers[i] > max){
    max = numbers[i];
    
  }

}
console.log("The biggest number in the array is:", max);

//3.Write a program that prints all the male people’s first name given a complex object 

// let personArray = ["kush", "ram", "Sejal"];
// let genderArray = ["male", "male", "female"];

// for (let i = 0 ; i< personArray.length; i++){
//   if (genderArray[i] == "male"){
//     console.log(personArray[i]);
//   }
// }

// OR 

const allUsers = [{
        firstName : "Raman",
        gender : "male"
      },
      {
        firstName : "SiRaman",
        gender : "male"
      },
      {
        firstName : "Ramanika",
        gender : "female" 
      }]

for (let i = 0 ; i < allUsers.length; i++ ){
  if(allUsers[i]["gender"] == "male"){
    console.log(allUsers[i]["firstName"]);
  }
}     


//4. Write a program that reverses all the elements of an array

let array = [1,2,3,4,5];
let left = 0;
let right = array.length-1;


    while ( left < right){

      let temp = array[left];
      array[left]= array[right];
      array[right]= temp;

      left++;
      right--;
    }

    console.log("Reversed array is ", array);