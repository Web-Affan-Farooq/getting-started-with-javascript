// //Loops In Javascript:
//for loops:
console.log("----------------------for loop------------");
for (let i=14; i<=140; i=i+14) {
     console.log(i);
 }
 console.log("loop is ended");
 let sum=0;
 for (i=1; i<=5; i++) {
    sum = sum+i ;
 }
 console.log("sum =",sum);

for(let j=1; j<=10; j++) {
    console.log("j =",j);
}
console.log("------------------------for loop ends here-------------");
//infinite loop:
/*the loop which naver ends or 
the loop which never declare false in called  infinite loop
Note: we didn't use infinite loop in our code
*/
//while loop:
console.log("--------------------------------while loop---------------------");
let I=1;
while (I<=5) {
    console.log("I =", I);
    I++;
}
console.log("------------------------while loop ends here---------------------");

//do-while:

let A=1;
do {
    console.log("A =" ,A);
    A++;
}while (A<=5);
console.log("-----------------------------do-while loop ended-----------------------");

let str="javascript";
let size=0;
for (let size of str) {
    console.log("size=",size);
    size++;
}