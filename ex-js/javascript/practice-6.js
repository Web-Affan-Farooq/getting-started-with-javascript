//if , else if , else statements:
console.log("---------------------------'if' ,'else if' and 'else' statements-------------------------")
let mode="dark";
let color;

if (mode==="dark") {
    console.log("Background-color:black;");
} else if(mode==="blue") {
        console.log("Background-color:blue;");
} else if (mode==="gorilla") {
        console.log("Background-color:pink;");
}else if (mode==="hacker") {
    console.log("background-color:grey;");
}else {
        console.log("Background-color:white;");
}
console.log(color);

//tarnary operator:

let childAge="70";
   let resultage= childAge >= 18 ? "adult" : "not adult";
console.log(resultage);

//switch statement:
//apple leechee guava pineapple
let fruit="pineapple";
let message="we are out of order";
switch (fruit) {
    case 'apple':
        console.log("we have several varities of apples");
        break;
    case 'pineapple':
        console.log("we have several varities of pineapples");
        break;
    case 'leechee':
        console.log("we have several varities of leechees");
        break;
    case 'guava':
        console.log("we have several varities of guavas");
        break;
    default:
        console.log(message);
        break;
}
