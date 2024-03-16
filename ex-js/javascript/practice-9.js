//Arrays in javascript:

// let array_1=[1,2,3,4,5,6,7,8,9,10];
// console.log(array_1);

// //retreiving data over an array:
// console.log(array_1[8]);

// //changing data over an array:
// array_1[0]=20;

// looping over an array:

let Friends=["Affan","Ayan","Ghalib","tayyab"];
for (i=0; i<Friends.length; i++) {
    console.log(Friends[i]);
}
console.log("------------------------------");
let heroes=["Ironman", "Batman", "Superman"];
for (let i of heroes) {
    console.log(i.toLowerCase());
}
let cities= ["Karachi","Lahore","Peshawar"];
for (let city of cities) {
    console.log(city.toUpperCase());
    city++;
}
