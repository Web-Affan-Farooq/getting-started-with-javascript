//Objective no 4:
//write a code which can give grades to students according to thier scores
/*
90-100, A
70-89 , B
60-69, C
50-59, D
0-49, fail
 */
let studentMarks=prompt("enter your score");
let grade;

if (studentMarks>=90 && studentMarks<=100) {
    console.log("According to your score , your grade is","Grade-A");
}else if (studentMarks>=70 && studentMarks<=89) {
    console.log("According to your score , your grade is","Grade-B");
}else if (studentMarks>=60 && studentMarks<=69) {
    console.log( "According to your score , your grade is","Grade-C");
}else if (studentMarks>=50 && studentMarks<=59) {
    console.log( "According to your score , your grade is","Grade-D");
}else {
    console.log("According to your score , your are","Fail");
}