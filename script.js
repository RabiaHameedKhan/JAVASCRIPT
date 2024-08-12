// console.dir(document.body);

// let div= document.querySelector("div");
// console.log(div);

// let heading= document.querySelector("h1");
// console.dir(heading);
// console.log(heading.innerText);
// let newheading= heading.innerText + " JAVASCRIPT LEARNING DAY 2";
// console.dir(newheading);

// let main= document.querySelectorAll(".box");
// console.dir(main);
// console.dir(main[0]);
// let div1= main[0].innerText="First div";
// console.log(div1);

// console.dir(main[1]);
// let div2= main[1].innerText="Second div";
// console.log(div2);

// console.dir(main[2]);
// let div3= main[2].innerText="Third div";
// console.log(div3);



//TASK

// let button=document.createElement("button");
// button.innerText="click here";
// button.style.backgroundColor="red";
// button.style.color="white";
// aces= document.querySelector("body");
// console.log(aces);

// aces.prepend(button);

let btn = document.querySelector("button");

let curent = "light";

let heading=document.querySelector("h1");

btn.addEventListener("click", () => {
    if (curent == "light") {
        curent = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        heading.style.color="white";
    } else {
        curent = "light";
        document.querySelector("body").style.backgroundColor = "white";
        heading.style.color="Black";
    }

    console.log(curent);


});
