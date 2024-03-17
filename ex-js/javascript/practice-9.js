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

// Array methods:
// Push():

let vegitables=["potato","brinjal",'tomato', "ladyfinger"];

//adding another items to list

vegitables.push("chilli","okra","cucumber");
console.log(vegitables);

//pop:  It deletes the last item from list
let deletedItems=vegitables.pop();
console.log(vegitables);
console.log("deleted", deletedItems);

//.tostring():  It converts the whole array to number

let string=vegitables.toString();
console.log(string);

//concatenetion of an array:
console.log(heroes + vegitables);

//unshift():  It add the item to the start of list

vegitables.unshift("Onion");
console.log(vegitables);

//shift(): It adds an item in the start of list
