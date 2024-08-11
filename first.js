console.log("Javascript learning Day 1");

// TASK 1 : CREATE AN OBJECT
// console.log("Task 1");

// const student={
//     name: "RABIA",
//     age:21,
//     department: "Software Engineering"

// };

// console.log(student);
// console.log(student.age);
// student.age= student.age+1;
// console.log(student.age);

// //TASK 2: TAKE INPUT AND CHECK IF IT IS MULTIPLE OF 5

// let num= prompt("Enter a number");

// if(num%5==0){
//     console.log(num, "is multiple of 5");
// }
// else{
//     console.log(num, "is not multiple of 5");
// }

// //TASK 3: GRADING SYSTEM

// console.log("GRADES OF STUDENTS");

// let grade= prompt("Enter Marks of student");

// if (grade>=80 && grade<=100){
//     console.log("Grade A");
// }
// else if(grade>=70 && grade<=89){
//     console.log("Grade B");
// }
// else if(grade>=60 && grade<=69){
//     console.log("Grade C");
// }
// else if(grade>=50 && grade<=59){
//     console.log("Grade D");
// }
// else{
//     console.log("Grade F");
// }

//TASK 3 : GUESS THE NUMBER GAME

// let num= 20;
// let guess= prompt("Guess the number");

// while( guess!=num){
//    guess= prompt("Try again")
// }

// console.log("congratulations! you guessed the right number")

//TASK 4: ARRAYS

// let marks=[10, 20, 30, 40,50];

// for(i=1; i<marks.length; i++){
//     let offers= marks[i]/10;
//     marks[i]-=offers
// }
// console.log(marks);


//PUSH AND POP

// let chocolates=["kitkat", "cadbury", "bounty", "Mars"];
// console.log(chocolates);

// chocolates.push("You");
// console.log(chocolates);

// deleted= chocolates.pop();
//  console.log(chocolates);

//  console.log("deleted chocolate:", deleted);

//  //TOSTRING

//  console.log(chocolates.toString());

//  //CONCAT

//  let coffee=["latte", "iced coffee", "mocha"];

//  let fav=coffee.concat(chocolates);
//  console.log(fav);
//  console.log(fav.toString());

//  //SHIFT AND UNSHIFT

//  let shift=chocolates.shift();// delete from start
//  console.log(shift);

//  let unshift=chocolates.unshift("Tobelerone"); //add to start
//  console.log(unshift);
//  console.log(chocolates);

//  //SLICE AND SPLICE

//  console.log(chocolates.slice(1,3)); //returns slice(piece) of an array

//  console.log(chocolates.splice(2,1,"Maltestor")); //add delete and replace
//  console.log(chocolates);

//  //SPLICE

//  let array=["1", "2","3","4","5"];

// array.splice(2,0,100); //add element
// console.log(array);

// array.splice(2,2,100); //delete element
// console.log(array);

// array.splice(3,1,100); //Replace element
// console.log(array);

//TASK:

// let companies=["Bloomberg", "Microsoft", "uber","Google","IBM","Netflix"];
// console.log(companies);

//remove first company from array

// companies.shift();
// console.log(companies);

// remove uber and add ola at its place

// companies.splice(2,1,"ola");
// console.log(companies);

//add amazon at the end

// companies.push("amazon");
// console.log(companies);




