//logical operators:*/
let l=6;
let m=5;
//&& and operator:
let Cond1= l>m;
let Cond2= l===6;
console.log("Cond1 && Cond2 =", Cond1&&Cond2);
console.log(" For deep understanding , see this object:");
let AndLogicalOperator = {
    true:"when true&&true", 
    false:"when false&&false",
    false:"when true&&false",
    false:"when false&&true",
};
console.log(AndLogicalOperator);

// || OR operators:
console.log("Cond1 || Cond2 =", Cond1||Cond2);

console.log("In Or operator , we only have false result when the condition is totally false. Otherwise true in all conditions");

let OrLogicalOperator={
    true:"when true&&true", 
    false:"when false&&false",
    true:"when true&&false",
    true:"when false&&true",
};
console.log(OrLogicalOperator);

// !() not operator:

console.log("!(l>m) =",!(l>m));

console.log("Note that not operator reverse the actual result for example if the result is false and if we use logical operator not on it it reverse the result and gave the answer true.");