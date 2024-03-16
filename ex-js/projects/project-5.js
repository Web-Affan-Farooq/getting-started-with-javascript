// For a given array with marks of students ->[85,97,44,37,76,60] . Find the average of the entire class

let studentMarks=[85,97,44,37,76,60];
for (let sum of studentMarks) {
    console.log(sum=sum+1);
}
let sum=studentMarks[0]+studentMarks[1]+studentMarks[2]+studentMarks[3]+studentMarks[4]+studentMarks[5];
console.log("--------------------------------------------------------");
 let avg=sum/6;
 console.log(avg);