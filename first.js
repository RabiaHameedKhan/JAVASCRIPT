console.log("Javascript learning Day 1");

// TASK 1 : CREATE AN OBJECT
console.log("Task 1");

const student={
    name: "RABIA",
    age:21,
    department: "Software Engineering"

};

console.log(student);
console.log(student.age);
student.age= student.age+1;
console.log(student.age);

//TASK 2: TAKE INPUT AND CHECK IF IT IS MULTIPLE OF 5

let num= prompt("Enter a number");

if(num%5==0){
    console.log(num, "is multiple of 5");
}
else{
    console.log(num, "is not multiple of 5");
}

//TASK 3: GRADING SYSTEM

console.log("GRADES OF STUDENTS");

let grade= prompt("Enter Marks of student");

if (grade>=80 && grade<=100){
    console.log("Grade A");
}
else if(grade>=70 && grade<=89){
    console.log("Grade B");
}
else if(grade>=60 && grade<=69){
    console.log("Grade C");
}
else if(grade>=50 && grade<=59){
    console.log("Grade D");
}
else{
    console.log("Grade F");
}