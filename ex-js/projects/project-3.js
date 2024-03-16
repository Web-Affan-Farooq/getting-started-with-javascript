//objective no 3:
//get user to input a number using prompt("enter a number:") . check if the number is multiple of 5 or not.
 let usernum= prompt("Enter a number");
 if (usernum % 5=== 0) {
     console.log(usernum , "is multiple of 5");
 } else {
     console.log(usernum , "is NOT multiple of 5");
 }
/*Note : this code doesn't work on any runtime enviroment
for results in terminal alternatively you can run the following code . You can be able to see results by using javascriipt runtime enviroment like node JS
replace the code with it and you can ready to go...

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function(usernum) {
  if (usernum % 5 === 0) {
    console.log(usernum, "is a multiple of 5");
  } else {
    console.log(usernum, "is NOT a multiple of 5");
  }
  rl.close();
});
*/
