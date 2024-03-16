// Conditional statements:
console.log("-----------------------------Conditional statements----------------------------");

// If statements: (states whenever condition appear is true or false )
let age=25;

let Message="You can vote Now";

if (age>18) {
    console.log(Message);
};

age=17;
let Message_2="You dont have to vote Now";

if (age<18) {
    console.log(Message_2);
};

let Mode="dark";
let Color;

if (Mode ==="dark") {
    color ="black";
}

if (Mode ==="light") {
    color ="white";
}

console.log(color);

//if-else statements: (states when if condition is true then run if or when if is false then run true)

let AgeForParticipation=12;

if (AgeForParticipation >= 15) {
    console.log("You are eligible");
}
else {
    console.log("You are not eligible");
}
