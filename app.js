//CLASSES AND OBJECTS


// let data="userdata";

// class user{
//     constructor(name, email){
//         this.name=name;
//        this.email=email;       
//     }


//  userdata(){
//     console.log("User Data")
//  }

// }
// let student1= new user("Rabia", "abbc");
// let student2= new user ("Khan", "xyz");


// class admin extends user{
//     constructor(name,email){
//         super(name,email); // to invoke parents constructors
//     }
//     editdata (){
//         data="Edited Data";
//     }

// }

// let admin1= new admin("admin","ckffk");


//ERROR HANDLING IN JAVASCRIPT

let a=10;
let b=20;


//before using try catch code will not run after the error occurs

// console.log("a=", a);
// console.log("b=", b);
// console.log(a+b);
// console.log(a+b);
// console.log(a+b);
// console.log(a+b);
// console.log(a+c);
// console.log(a+b);
// console.log(a+b);


//after using try catch on the expected eror line the code will run after the eror line

console.log("a=", a);
console.log("b=", b);
console.log(a+b);
console.log(a+b);
console.log(a+b);
console.log(a+b);
try{
    console.log(a+c);
}
catch(err){
    console.log(err);
}

console.log(a+b);
console.log(a+b);



