// //1. Write the program to greet a person given their first and last name
// var fname = "Kush";
// var lname = "Goel";

// console.log("Welcome " + fname + lname);

// //2. Write a program that greets a person based on their gender. (If else)

// let firstName = "Kushagra";
// let age = 23;
// let gender = "male"; // Use a string for gender

// if (gender === "male") {
//   console.log("Welcome Mr." + firstName );
// } else {
//   console.log("Welcome Mrs." + firstName );
// }

// //3. Write a program that counts from 0 - 1000 and prints (for loop)

// let count = 0;

// for (let i = 0; i <= 1000; i++) {
//   count = count + i;
// }

// console.log(count);

// //4. Write a program that counts from 0 - 10000 and prints (for loop)

// let count1= 0;
// for (let i = 0 ;  i < 10000 ; i++ ){
//   count1 = count1 + i ;
// }

// console.log (count1);

// // COMPLEX PRIMITIVES - ARRAYS
// // 5. Write a program prints all the even numbers in an array

// const numbers = [21,22,23,24,25];

// for (let i = 0; i<numbers.length ; i ++){

//     if (numbers[i] % 2 == 0){
//       console.log(numbers[i]);
//     }
// }

// //6. Write a program to print the biggest number in an arrya
// let max = numbers[0];
// for (let i = 1 ; i<numbers.length; i++){
//   if (numbers[i] > max){
//     max = numbers[i];

//   }

// }
// console.log("The biggest number in the array is:", max);

// //7.Write a program that prints all the male people’s first name given a complex object

// // let personArray = ["kush", "ram", "Sejal"];
// // let genderArray = ["male", "male", "female"];

// // for (let i = 0 ; i< personArray.length; i++){
// //   if (genderArray[i] == "male"){
// //     console.log(personArray[i]);
// //   }
// // }

// // OR

// const allUsers = [{
//         firstName : "Raman",
//         gender : "male"
//       },
//       {
//         firstName : "SiRaman",
//         gender : "male"
//       },
//       {
//         firstName : "Ramanika",
//         gender : "female"
//       }]

// for (let i = 0 ; i < allUsers.length; i++ ){
//   if(allUsers[i]["gender"] == "male"){
//     console.log(allUsers[i]["firstName"]);
//   }
// }

// //8. Write a program that reverses all the elements of an array

// let array = [1,2,3,4,5];
// let left = 0;
// let right = array.length-1;

//     while ( left < right){

//       let temp = array[left];
//       array[left]= array[right];
//       array[right]= temp;

//       left++;
//       right--;
//     }

//     console.log("Reversed array is ", array);

// // //9. Write a function to print sum of two numbers
// // 10. Write another function that displays this result in a pretty format
// // 11. Write another function that takes this sum and prints it in passive tense

// function sum(num1, num2) {
//   let result = num1 + num2;
//   return result;
// }

// function displayResult(data) {
//   console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//   console.log("Sum's result is : " + data);
// }

// // You are only allowed to call one function after this
// // How will you displayResult of a sum
// let value = displayResult(sum(2,3));

// //12. Create a counter in js that counts from 30 to 0

// function counter(count) {
//   for (let i = 30; i >= 0; i--) {
//     //setTimeout(count(i),1*1000);
//     setTimeout(() => count(i), (30 - i) * 1000);
//   }
// }
// function count(i) {
//   console.log(i);
// }
// counter(count);

//13.Calculate the time it takes between a setTimeout call and the inner function actually running.
 
      function first (abc){
        let timeBefore = Date.now();
        setTimeout(()=> abc(timeBefore), 1*1000);
      }

      function abc (timeBefore){
        timeAfter = Date.now();
        console.log( timeAfter - timeBefore);
      }

      first(abc);

//14. Create a terminal Clock
      
for(let i=0;i<=500;i++){
  setTimeout(() => printTime(i),i*1000);
}
function printTime(i){
  let date = new Date();
  console.clear();
  console.log("The Terminal Clock:", date.getHours(),"hrs :",date.getMinutes(),"mins :",date.getSeconds()+1, "secs");
  console.log("It will get stopped after 500 seconds")
}